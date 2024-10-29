<picture>
  <source srcset="./.github/logo-dark.svg" media="(prefers-color-scheme: dark)" width="250px">
  <source srcset="./.github/logo-light.svg" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" width="250px">
  <img src="./.github/logo-light.svg" width="250px" alt="OpenTofu">
</picture>

## Stack

- [Docusaurus]
- [React]
- [TypeScript]
- [Tailwind CSS]

## Cloning the repository

This repository uses Git submodules to pull in the [main OpenTofu repository](https://github.com/opentofu/opentofu).

```bash
git clone --recurse-submodules git@github.com:opentofu/opentofu.org.git
```

<details>
<summary>Oops! I forgot to recurse submodules…</summary><br>

```bash
cd opentofu.org
git submodule init
git submodule update
```

</details>

## Development

You can either develop locally, or by using a local Docker container.

### Option A: Running the dev server locally

You can run the dev server if you have a local Node.js/npm environment installed:

1. Install dependencies:

   ```bash
   npm install
   ```

1. Start the development server:

   ```bash
   npm run start
   ```

1. You can now access the site locally at <http://localhost:3000>.

### Option A: Running the dev server in a container

You can run the dev server in a Docker container with the following command:

```bash
docker compose up --build
```

## Troubleshooting

### The docs folder does not exist for version "vX.Y"

> Error: The docs folder does not exist for version "vX.Y". A docs folder is expected to be found at versioned_docs/version-vX.Y.

Make sure you installed the Git submodules. See above for instructions.

## Contributing

When you contribute code to OpenTofu, do not forget to sign off your commits as [described here](https://github.com/opentofu/opentofu/blob/main/CONTRIBUTING.md#signing-off-your-commits).

[docusaurus]: https://docusaurus.io
[react]: https://react.dev
[tailwind css]: https://tailwindcss.com
[typescript]: https://www.typescriptlang.org
