import React from "react";
import { IDE } from "../IDE";

type FeatureShowcaseProps = {
  title: string;
  description: string;
  version: string;
  codeExample: string;
  align: "left" | "right";
  color: string;
  filename?: string;
  docsUrl?: string;
};

function FeatureShowcase({
  title,
  description,
  version,
  codeExample,
  align,
  color,
  filename = "main.tf",
  docsUrl,
}: FeatureShowcaseProps) {
  const isRight = align === "right";

  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center">
      {/* Code example side */}
      <div
        className={`lg:w-1/2 w-full order-2 ${
          isRight ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <IDE code={codeExample} language="hcl" filename={filename} />
      </div>

      {/* Content side */}
      <div
        className={`lg:w-1/2 w-full order-1 ${
          isRight ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div
          className={`inline-flex px-3 py-1 text-sm font-medium mb-2 rounded-full ${color}`}
        >
          {`Available since v${version}`}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
          {description}
        </p>
        {docsUrl && (
          <a
            href={docsUrl}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 mx-auto container px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          id="features-header"
          className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
        >
          Powerful Features
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          OpenTofu includes unique capabilities to enhance your infrastructure
          management experience
        </p>
      </div>

      <div className="space-y-8">
        <FeatureShowcase
          title="Exclusion Flag"
          description="Selectively exclude resources from operations with the -exclude flag. This provides more control during testing and rollouts, allowing you to focus on specific parts of your infrastructure."
          version="1.9"
          align="left"
          color="bg-blue-600/90 text-white dark:bg-blue-500/90"
          filename="/bin/bash"
          docsUrl="/docs/cli/commands/plan/#resource-targeting"
          codeExample={`# Command line usage
$ tofu plan -exclude="aws_instance.database"
$ tofu apply -exclude="module.network"

# Exclude multiple resources
$ tofu apply \\
  -exclude="aws_instance.web[0]" \\
  -exclude="aws_instance.web[1]"`}
        />

        <FeatureShowcase
          title="Provider Iteration with for_each"
          description="Dynamically generate provider configurations with for_each, eliminating repetitive code and improving maintainability. Perfect for multi-region deployments, multi-environment setups (dev/staging/prod), multi-account scenarios, and cross-cloud implementations. Provider for_each enables cleaner infrastructure patterns, simplified credential rotation, and more controlled progressive rollouts across your infrastructure landscape."
          version="1.9"
          align="right"
          color="bg-blue-600/90 text-white dark:bg-blue-500/90"
          docsUrl="/docs/intro/whats-new/#provider-iteration-for_each"
          codeExample={`# Define regions for deployment
variable "regions" {
  type    = set(string)
  default = ["us-west-1", "us-east-1", "eu-west-1"]
}

variable "disabled_regions" {
  type    = set(string)
  default = []
}

# Create provider for each region
provider "aws" {
  alias    = "by_region"
  region   = each.value
  for_each = var.regions
}

# Deploy resources in each active region
module "deploy" {
  source    = "./deploy"
  providers = {
    aws = aws.by_region[each.key]
  }
  for_each = setsubtract(var.regions, var.disabled_regions)
}`}
        />

        <FeatureShowcase
          title="Early Variable/Local Evaluation"
          description="Update all your modules programmatically with a single variable change. Never miss updating a module version by accident - keep your infrastructure consistent and secure with centralized version management."
          version="1.8"
          align="left"
          color="bg-blue-600/90 text-white dark:bg-blue-500/90"
          docsUrl="/docs/v1.8/language/modules/sources/#support-for-variable-and-local-evaluation"
          codeExample={`# Define module version as a variable
variable "aws_module_version" {
  description = "Version of AWS modules to use"
  type        = string
  default     = "5.6.1"
}

# Use the variable for module versioning
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = var.aws_module_version
  
  name = "my-vpc"
  cidr = "10.0.0.0/16"
  
  azs             = ["us-west-2a", "us-west-2b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
}`}
        />

        <FeatureShowcase
          title="State Encryption"
          description="Protect your infrastructure state at rest with built-in encryption. OpenTofu supports client-side state encryption with multiple key providers (PBKDF2, AWS KMS, GCP KMS, OpenBao, and more) to ensure your sensitive infrastructure data is always encrypted, even when stored in remote backends."
          version="1.7"
          align="right"
          color="bg-blue-600/90 text-white dark:bg-blue-500/90"
          docsUrl="/docs/language/state/encryption/"
          codeExample={`# Configure state encryption
terraform {
  encryption {
    # Define a passphrase-based key provider
    key_provider "pbkdf2" "mykey" {
      passphrase = "correct-horse-battery-staple"
      key_length = 32
      iterations = 600000
    }
    
    # Configure AES-GCM encryption method
    method "aes_gcm" "default" {
      key_provider = key_provider.pbkdf2.mykey
    }
    
    # Enable encryption for state files
    state {
      method = method.aes_gcm.default
      enforced = true
    }
  }
}`}
        />
      </div>
    </section>
  );
}
