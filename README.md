# Great Styles

[![circle-ci-image]][circle-ci]
[![coverage-image]][coverage]
[![gitflow-image]][gitflow]
[![calver-image]][calver]

**GREAT platform styles and components - the Department for International Trade (DIT)**

---

## Development

Install dependencies:

```shell
$ npm install
```

Run storybook in dev mode:

```shell
$ npm run storybook
```

Build all assets:

```shell
$ npm run build 
$ npm run babel
```

Build the static version of Storybook:

```shell
$ npm run storybook:build
```

## Versioning

To release a new version, create a new release on Github. The new tag on publish should follow Semantic Versioning.

Services using great-styles as a dependency can then update their version of `great-styles`:

```shell
$ npm install --save-dev uktrade/great-styles#v0.4.1
```

## Publishing Storybook

You will need to be logged in to GOVUK PaaS/Cloud Foundry. Once logged in, and with sufficient permissions, you will be
able to build and deploy the static Storybook instance:

```shell
$ npm run storybook:deploy
```

