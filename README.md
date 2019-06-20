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

Same for other environments like `.env.staging`, etc.

## Usage

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
# Using npm
npm run deploy -- s3 production

# Using yarn
yarn run deploy s3 staging
```

### Running commands

```bash
npm run deploy -- -v | --version
```

```bash
yarn run deploy -h | --help
```

### Caveats

- Out of the box it works fine with the [create-react-app](https://facebook.github.io/create-react-app/), but if you `ejected` your app from it or having customized webpack build solution, then you need to do the following in your app to process your `.env` variables file.

```bash
npm install dotenv-webpack --save-dev
```

Add this in your env specific webpack config file

```js
const Dotenv = require('dotenv-webpack');

plugins: [
  new Dotenv({
    path: './.env.production', // Path to .env file (this is the default)
    safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
  }),
];
```

## License

MIT © [Thanga Ganapathy](https://github.com/ganapathy888)
