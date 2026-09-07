# An Introduction to OpenTofu Symbol Libraries!

## First off, what is a "Symbol Library" and why should I care?

A symbol library is a collection of re-usable language elements that can be loaded into OpenTofu configuration. This includes user defined functions, types, constants, and calls to other symbol libraries.

These libraries are an answer to the long-standing and broad community ask for better and cleaner code re-use. Although OpenTofu uses a declarative configuration language, adding the ability to re-use definitions and logic allows for a whole new level of Don't Repeat Yourself.

## What do they look like in practice?

Symbol libraries consist of symbol files (`*.sym.hcl`) within a directory. Each of these symbol files may contain functions, types, and constants which reference each other.

```hcl
# Optional language block
language {
  # Specifies that this symbol library is written for the first experimental version of the symbol library language.
  edition = experimental2026
}

# Define a type
typedef "dns_recordset" {
  type = object({
    name    = string
    type    = string
    ttl     = number
    records = list(string)
  })
}
# Due to restrictions in HCL, types are referenced using the `::` namespaced function syntax.
# Referenced within the library as symbols::dns_recordset()
# Referenced outside the symbol library as symbols::<libname>::dns_recordset()


# Define a function 
function "format_dns_recordset" {
  # Optional specification of the expected return type
  type = string
  
  # Optional
  description = "Formats the dns record as plain text"
  
  # Named parameters with a given type, these are similar to the "variable" concept within OpenTofu modules and have many of the same options
  parameter "in" {
    type = symbols::dns_recordset()
    # variadic = true may be specified to capture all subsequent arguments into the parameter as a list
    # Optional validation block
    validation {
      condition = length(param.in.records) != 0
      error_message = "Expected at least one record"
    }
  }
  
  # Locals are local to a call of the function and can be used
  # to prepare the return value in multiple steps for clarity
  locals {
    entries = [for record in param.in.records : "record_set ${param.in.name} is a ${param.in.type} with a ttl of ${param.in.ttl} and entry \"${record}\""]
    str = join("\n", local.entries)
  }
  
  # The final value of the function is specified by the return attribute
  return = local.str
}
# Called within the library as symbols::format_dns_recordset(value)
# Called outside the symbol library as symbols::<libname>::format_dns_recordset(value)


# Values are exported constants
values {
  example_recordset = { name = "Example", type = "A", ttl = 500, records = ["example.com. 600 IN A 10.10.10.10"]}
}
# Referenced within the library as symbols.example_recordset
# Referenced outside the symbol library as symbols.<libname>.example_recordset

```

This somewhat contrived example shows the basics of defining functions, constant values, and types within symbol libraries.

## Usage from OpenTofu

Let's assume that the simple example above is located at `./example-lib/example.sym.hcl` relative to the current configuration directory.

```hcl
# Enable the symbol libraries experiment
language { experiments = [symbol_libraries] }

# Import the symbols into the current module
symbols "lib" {
  source = "./example-lib"
}

variable "dns" {
  type = symbols::lib::dns_recordset()
}

output "example" {
  value = symbols.lib.example_recordset
}

output "formatted" {
  value = symbols::lib::format_dns_recordset(var.dns)
}

```

## What can't symbol libraries do?

Symbol libraries are static entities that can not directly access any state (resource, data) or provider information directly. Additionally, this means that provider functions can not be used from within symbol libraries.

This is an intentional design feature. You may pass resource values into symbol functions from OpenTofu, but they symbol libraries themselves do not have any concept of resource or data entities.

## What is the status of Symbol Libraries?

As this is a whole new HCL based language and fundamental way of working with OpenTofu, we have released this feature as an "Experiment". This means that we are counting on *your* feedback to stabilize this feature for general use. It is included in the OpenTofu v1.13 release series and can be opted-into by adding `language { experiments = [symbol_libraries] } ` to your OpenTofu project configuration.

If you like so many others have been frustrated by the inability to share your complex logic and types between parts of your project, please give this feature an in-depth look! We have an [open discussion](https://github.com/orgs/opentofu/discussions/4521) on GitHub for gathering feedback and are hoping that enough passionate people like you leave a comment that we can stabilize this feature for v1.14!

## Where can I learn more?

This is the first in a series of short blog posts showcasing symbol libraries. We plan to author a few of these posts leading up to the v1.14 release to help spread awareness of the experiment and gather more feedback.  The next post in the series will be about building validation functions and leveraging some of the more powerful options therein.

You can also read the RFC https://github.com/opentofu/opentofu/pull/4052 where we refined this idea to the point in which it could be built out as an experiment.

