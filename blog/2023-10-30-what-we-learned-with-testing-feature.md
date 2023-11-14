---
title: What We Learned While Working on OpenTofu's New Test Feature
slug: what-we-learned-while-working-on-opentofus-new-test-feature
image: /img/blog/lessons-learned.png
authors:
  - name: Eran Elbaz
    title: OpenTofu development team, Full Stack Engineer at env0
    url: https://github.com/eranelbaz
    image_url: https://github.com/eranelbaz.png
  - name: Arel Rabinowitz
    title: OpenTofu development team, Principal Engineer at env0
    url: https://github.com/RLRabinowitz
    image_url: https://github.com/RLRabinowitz.png
---

Jumping into a newly forked project can be a difficult task, maybe even frightening! Now, think about jumping into a production-ready project with nine years of legacy code base there. On top of that, you have the task of taking one of the project’s new features from experimental to production-ready.

<!--truncate-->

This is our journey with the OpenTofu testing feature.

It’s an interesting introduction to what’s going on behind the scenes at OpenTofu, as we work on our own pipelines. In this case, we are taking raw, experimental code and turning it into something that keeps up with (and possibly outperforms) Terraform v1.6.0 with the drop-in replacement, OpenTofu v1.6.alpha.

## The Feature

As part of [HashiCorp Terraform License](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license) changes, we joined the [OpenTofu initiative](https://opentofu.org/). And one of our first tasks is to get OpenTofu up-to-date with the upcoming Terraform 1.6.0, which means getting the testing feature from experimental to production-ready.

At the time of the fork, the testing feature did already exist in the codebase. However, it was still in an experimental state, without any documentation as to how the feature worked, and without much test coverage on the test feature’s own capabilities.

That meant we had to figure out the purpose of what seemed like a WIP testing feature, the pros and cons of this approach, and figure out what was missing to get the feature out of “development hell”

We started out mapping the feature by doing a few different things:

First, we read previous tests to understand how the feature behaves in different scenarios. Next, we thoroughly read through its code to get its ins and outs. Then, we tried it out ourselves to get a feel of using the new testing capability.

These are important, as you don’t want to just jump in and start changing code based on what you think it should look like. You need to understand the architecture and intent of the original implementer, so that the code you write complements it, rather than fighting it.

After this effort, we had a full grasp of the testing feature. It was a framework built to help the users test out their configuration in modules in an end-to-end manner, per module. It makes sure the modules act as expected in common cases, while predictably and safely responding to failure conditions, like a misconfiguration.

The testing feature introduces `*.tftest.hcl` files. These 1) describe your testing suite and 2) support a specific subset of HCL blocks. The most important block there is the new `run` block, which constitutes a test run.

When executing `tofu test`, each `run` block executes a `tofu plan` or `tofu apply` behind the scenes, running your module with the configuration specified for the test, and actually creating resources in your cloud (in the case of `apply`).

After each run, it performs validations; i.e., it makes sure that 1) all assertions pass, 2) none of the checks are failing, and 3) the `plan`/`apply` has finished successfully.

After tofu is done performing all the runs and tests, it attempts to destroy all the resources that were created as part of that `tofu test` run.

## How did we approach it?

Throughout our initial testing and code reading, we made a list of feature behaviors that were not covered with tests in the codebase, and also listed behaviors that we felt had the potential to not work properly.

We mostly relied on the code we read, and our knowledge of legacy Terraform and prior issues. For most of those, we ended up creating [pull requests](https://github.com/opentofu/opentofu/issues/8#issuecomment-1697596854), adding test coverage, or actually fixing bugs.

During our time testing out the feature, we encountered some bugs, and came up with some suggestions to actually improve the feature on top of what was already in the pre-forked codebase. Below are some examples of such bugs that we ended up fixing:

### Bug 1: Sensitive Value in `run` block

**Bug description**: `tofu test` crashes when evaluating a sensitive value inside a `run` block’s assertions.

While playing around with our manual QA scenarios, we found out that running `tofu test` can, in a certain scenario, crash the program. Specifically, this happens when the configuration includes a `run` block that has an assertion, and that assertion itself relies on a sensitive value (see the code sample below for main.tftest.hcl).

This isn’t ideal, as a crash in `tofu test` means that there are now resources in your cloud, for which tofu has no recollection.

You could achieve this crash by running the following configuration:

**main.tf:**

```hcl
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.14.0"
    }
  }
}

resource "aws_secretsmanager_secret" "my_secret" {
  name = "my_secret"
}

resource "aws_secretsmanager_secret_version" "my_secret_version" {
  secret_id = aws_secretsmanager_secret.my_secret.id
  secret_string = "secret_value"
}
```

**main.tftest.hcl:**

```hcl
run "secret_test" {
	assert {
		condition = aws_secretsmanager_secret_version.my_secret_version.secret_string == "secret_value"
		error_message = "bad secret"
	}
}
```

Running this configuration with `tofu test` would actually crash tofu. `aws_secretsmanager_secret_version.my_secret_version.secret_string` is a sensitive value, and OpenTofu crashed while attempting to evaluate if it was `true` or `false`. (You can follow the [thread on GitHub](https://github.com/opentofu/opentofu/issues/254)).

Debugging this was a simple manner of running the CLI in a debugger (using the [`debug-opentofu` script](https://github.com/opentofu/opentofu/blob/main/scripts/debug-opentofu) which uses [delve](https://github.com/derekparker/delve) for debugging), then following the code and the crash stack trace in order to figure out the source of the issue. Finally, in order to figure out how to fix the issue, we checked how this issue was solved for other types of conditions in the codebase.

The issue stemmed from how the evaluation of values in HCL works, using the [`go-cty` library](https://pkg.go.dev/github.com/zclconf/go-cty/cty). We won’t get into too much detail about how this evaluation works, but certain values can be “marked” with additional information (such as marking the value as sensitive), and certain actions cannot be made on marked values, causing this panic.

This is intentional, to make sure that the code authors always handle those marks explicitly, instead of relying on some (potentially unwanted) implicit behavior.

In this case, simply unmarking the value prior to checking the boolean value of it was the way to go: `resultVal, _ = resultVal.Unmark()`. You can see the full code [here](https://github.com/opentofu/opentofu/pull/263).

It’s interesting to note that this issue had already occurred for other such conditions before in the legacy codebase, such as the [`precondition` block](https://github.com/hashicorp/terraform/pull/30659) or for a [`variable`’s custom validation rules](https://github.com/hashicorp/terraform/pull/27412) which have similar behavior.

### Bug 2: Null Output Reference

**Bug description:** `tofu test` crashes when referencing a `null` output.

Similarly to the previous bug, we went over our manual QA scenarios and found a scenario where `tofu test` crashes: When a `run` condition references an `output` that has a `null` value.

You could achieve this crash by running the following configuration (More info [here](https://github.com/opentofu/opentofu/issues/257)):

**main.tftest.hcl:**

```hcl
output "my_output" {
  value = null
}


run "test_run" {
  assert {
    condition = output.my_output != "something"
    error_message = "good"
  }
}
```

For this one, after some debug work, we found out that this is due to tofu not serializing `null` outputs as actual outputs. They will not appear as outputs in the state, for example.

However, for the `tofu test` feature, the assertions had to evaluate those `null` outputs as having `nil` value, even though those outputs are not serialized.

The code was as follows:

```go
output := d.Evaluator.State.OutputValue(addr.Absolute(d.ModulePath))
val := output.Value
if val == cty.NilVal {
   // Not evaluated yet?
   val = cty.DynamicVal
}

if output.Sensitive {
   val = val.Mark(marks.Sensitive)
}

return val, diags
```

`OutputValue` returns `nil` if no output was found in the address, including the case where the output value was `null` and therefore was not serialized. So, for the fix, we made sure we return a `nil` value in this case

```go
if output == nil {
   return cty.NilVal, diags
}
```

You can see the full code [here](https://github.com/opentofu/opentofu/pull/267)

### Other Test Feature Improvements and Suggestions

Other than those crash fixes, we found it mostly lacking in test coverage (which makes sense, it was still in alpha). For the testing feature, we saw a bunch of scenarios not being covered by any kind of test, and bug fixes were also often missing test coverage.

As a consequence, we’ve added many new test cases to the integration test suite of the testing feature. We felt higher test coverage was quintessential for an open-source project that will be widely used, considering most of its existing codebase is already pretty old. More info on those test cases can be found [here](https://github.com/opentofu/opentofu/issues/8#issuecomment-1697596854).

Also, we’ve started creating issues for suggestions to better stabilize the feature. For example, a failure during the resource cleanup at the end of a `tofu test` run might fail, causing resources to still exist in your cloud provider. If such a scenario happens, OpenTofu simply lists the names of the resources (in HCL) that have not been deleted properly.

This is probably not good enough, as it could be very hard to find those resources later inside your cloud provider without further information. So, we’ve suggested to at least print out the IDs of those resources, so you can find them more easily in your cloud provider for deletion.

## What we’ve learned

This blog walked through what we learned while working on and troubleshooting OpenTofu’s new testing feature. We used code debugging and black box testing to build out the feature’s functionality for the alpha release of OpenTofu.

Through this adventure we’ve had, of learning the code of a mid-development feature and stabilizing it, we’ve gotten more familiar with the codebase and how to debug it. Beyond that, we’ve learned how to completely build the specs of a feature just by reading the code and playing around with it.

It’s also given us a new appreciation for the criticality of testing for open-source projects of this scale (both for documentation, and for making sure a feature works in the long run), and we intend to increase the coverage in the project as we go.

Of course, this is only a small example of the work put in, but it gives you an idea of how we have gone about creating something new for OpenTofu. It will not only maintain parity with past features of open source Terraform, but keep pace with newer features, and even go beyond just serving as a drop-in replacement for Terraform, developing capabilities that it can call its own.

Please check out [OpenTofu version 1.6.alpha](https://opentofu.org/), plus our blog on [getting OpenTofu started](https://www.env0.com/blog/opentofu-alpha-launches-try-it-out-in-just-3-clicks) and installed.
