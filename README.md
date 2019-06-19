# @open-tech-world/deploy-site

> Node.js CLI utility for deploying static websites.

## Features

- Auto builds your app.
- It creates arbitary build from your local environment variables (`.env.staging`).
- Optional assets compression using `gzip`.
- Set files http cache using `glob` matching.
- Supports deploying to multiple hosting providers.

## Supported hosting providers

- [x] AWS S3
- [ ] Github pages

## Setup

### 1. Install

Install this package as development dependencies in your project.

```bash
# With npm
$ npm install --save-dev @open-tech-world/deploy-site

# With yarn
$ yarn add --dev @open-tech-world/deploy-site
```

### 2. Add script

Add a new script to your `package.json`.

```json
{
  "scripts": {
    "deploy": "@open-tech-world/deploy-site"
  }
}
```

## CLI Usage

```bash
$ npx @open-tech-world/sw-deploy [HOSTING_PROVIDER ENV | command]
```

Available commands:

    --init              Creates a config file in the project root
    -h, --help          Show help
    -v, --version       Show version

## License

MIT © [Thanga Ganapathy](https://github.com/ganapathy888)
