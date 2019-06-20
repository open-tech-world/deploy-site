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
    "deploy": "deploy-site"
  }
}
```

### 3. Create deployment config file

Run the following command in your project root.

It will create a `deploy.json` configuration file in your project root.

```bash
# With npm (Note: extra double dash below is required)
npm run deploy -- --init

# With yarn
yarn run deploy --init
```

### 4. Create env file

Create environment specific file in your project root.

For production, create a `.env.production` file and add some variables into it.

```
REACT_APP_WEBSITE_NAME=Production app

REACT_APP_API_URL=https://api.example.com
```

Same for other env like `.env.staging`, etc.

## CLI Usage

Run the commands in your project root.

```bash
# With npm (Note: extra double dash below is required)
$ npm run deploy -- [HOSTING_PROVIDER ENV | command]

# With yarn
$ yarn run deploy [HOSTING_PROVIDER ENV | command]
```

Available commands:

    --init              Creates a config file in the project root
    -h, --help          Show help
    -v, --version       Show version

## Examples

### Deployment

```bash
npm run deploy -- s3 production
```

```bash
yarn run deploy s3 staging
```

### Running commands

```bash
npm run deploy -- -v | --version
```

```bash
yarn run deploy -h | --help
```

## License

MIT © [Thanga Ganapathy](https://github.com/ganapathy888)
