<img src="./.github/logo-dark.svg#gh-dark-mode-only" alt="OpenTofu" width="250px" />
<img src="./.github/logo-light.svg#gh-light-mode-only" alt="OpenTofu" width="250px" />

## Stack

- Docusaurus
- React
- TypeScript
- Tailwind CSS

## Working with this repository

### Cloning the repository

This repository uses git submodules to pull in the [main OpenTofu repository](https://github.com/opentofu/opentofu).
You can clone it using the following two steps:

1. Clone the repository:

```bash
git clone git@github.com:opentofu/opentofu.org.git
```

2. Fetch the documentation:

```bash
cd opentofu.org
git submodule init
git submodule update
```

### Running the dev server locally

You can run the dev server if you have a local NodeJS/npm environment installed:

1. Install dependencies:

```bash
npm i
```

2. Start the development server:

```bash
npm run start
```

You can now access the site locally at http://localhost:3000/

### Running the dev server in a container

You can also run the dev server in a container with the following command:

```bash
docker compose up --build
```

## Contributing

When you contribute code to OpenTofu, do not forget to sign off your commits as [described here](https://github.com/opentofu/opentofu/blob/main/CONTRIBUTING.md#signing-off-your-commits).
