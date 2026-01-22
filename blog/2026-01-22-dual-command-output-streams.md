---
title: Machine and Human readable command output streams
slug: dual-command-output-streams
---

With the [latest nightly build](https://nightlies.opentofu.org/nightlies/) of OpenTofu, we have included support for producing both the human readable and [machine readable](https://opentofu.org/docs/internals/machine-readable-ui/) outputs simultaneously.

## Background

Many of OpenTofu's long running commands support the `-json` flag.  This flag switches the output mode from human readable colorized logs into a [documented json format](https://opentofu.org/docs/internals/machine-readable-ui/). The main downside of using the `-json` argument is that it completely disables the human readable output. Existing tooling on top of OpenTofu therefore had two options, both with their own drawbacks.

On one hand, you could attempt to parse the human readable output and work based on that fuzzy parsing. This would allow you to keep the exact output that the user is used to relying on and manipulating it as you see fit. The main downsides being an output that changes between versions and a complex and error prone text parser.

On the other hand, you could work exclusively with the machine readable output. This is a stable and versioned interface that can be relied upon and is easy to parse. The main downside is that users may miss or expect you to re-create portions of the human readable output (a non-trivial task).

With the new `-json-into` flag, stdout and stderr remain the same output that users have come to expect, while at the same time streaming the machine readable logs into whatever file or pipe you specify.

## Examples

### Simple output capture

To start off, let's capture the output from `tofu plan` using the new flag.  We can then process the output (in this case with jq) to produce our own summary.

```bash
$ tofu plan -json-into=plan.json -out planfile
...

  # random_password.password[99] will be created
  + resource "random_password" "password" {
      + bcrypt_hash = (sensitive value)
      + id          = (known after apply)
      + length      = 16
      + lower       = true
      + min_lower   = 0
      + min_numeric = 0
      + min_special = 0
      + min_upper   = 0
      + number      = true
      + numeric     = true
      + result      = (sensitive value)
      + special     = true
      + upper       = true
    }

Plan: 200 to add, 0 to change, 0 to destroy.

─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

Saved the plan to: planfile

To perform exactly these actions, run the following command to apply:
    tofu apply "planfile"


$ cat plan.json  | jq -r 'select(.type=="planned_change") | "Planned Change: \(.change.action) \(.change.resource.addr)"'
...
Planned Change: create random_password.password[95]
Planned Change: create random_password.password[96]
Planned Change: create random_password.password[97]
Planned Change: create random_password.password[98]
Planned Change: create random_password.password[99]
```

As you can see, the user still sees the output that they are familiar with, while producing a machine readable artefact which can be further processed.

### Streamed output capture

For a slightly more fun example, we can use [pipeform](https://github.com/magodo/pipeform) to demonstrate some of the more advanced capabilities that this new flag offers.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wWyGmMN4HHk?si=zmoboVlnqFPY7tT-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Downloading the nightly builds

:::warning

Do not test this release on a production project! It is not a stable release!

:::

The nightly builds are available exclusively from the [OpenTofu Nightly Repository](https://nightlies.opentofu.org/nightlies/). Please choose the select the appropriate file for your platform.

