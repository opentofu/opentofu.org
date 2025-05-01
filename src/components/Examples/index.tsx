import React from "react";
import Carousel, { CarouselItem } from "../Carousel";
import { IDE } from "../IDE";

interface Example {
  title: string;
  description: string;
  code: string;
}

const examples: Example[] = [
  {
    title: "Create an S3 Bucket",
    description:
      "Define your infrastructure as code with OpenTofu. A few lines of configuration is all you need to create and manage cloud resources with confidence.",
    code: `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-west-1"
}

resource "aws_s3_bucket" "example" {
  bucket = "my-example-bucket"
}`,
  },
  {
    title: "Configure DNS Records",
    description:
      "Version control your infrastructure with OpenTofu. Track changes, collaborate with your team, and deploy DNS configurations with a single command.",
    code: `terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

resource "cloudflare_record" "example" {
  zone_id = "0da42c8d2132a9ddaf714f9e7c920711"
  name    = "www"
  value   = "192.0.2.1"
  type    = "A"
  ttl     = 3600
  proxied = true
}`,
  },
  {
    title: "Set Up GitHub Repositories",
    description:
      "Automate your development workflow with OpenTofu. Create repositories, set up branch protection, and manage team access in code.",
    code: `terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }
}

provider "github" {
  token = var.github_token
}

resource "github_repository" "example" {
  name        = "my-repo"
  description = "My application repository"
  visibility  = "public"
  auto_init   = true
}

resource "github_branch_protection" "main" {
  repository_id  = github_repository.example.id
  pattern        = "main"
  enforce_admins = true
}`,
  },
];

export function Examples() {
  const carouselItems: CarouselItem[] = examples.map((example, index) => ({
    id: `example-${index}`,
    title: example.title,
    content: (
      <div className="h-full w-[95%] mx-auto sm:w-full sm:p-4">
        <div className="text-left sm:text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">{example.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {example.description}
          </p>
        </div>
        <div className="w-full overflow-hidden shadow-xl">
          <IDE code={example.code} />
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full max-w-full sm:max-w-4xl mx-auto">
      <Carousel items={carouselItems} />
    </div>
  );
}
