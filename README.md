# Great Styles

![GitHub package.json version](https://img.shields.io/github/package-json/v/uktrade/great-styles)
![CircleCI Build](https://circleci.com/gh/uktrade/great-styles.svg?style=shield)

A collection of styles, components, assets and scripts for the great.gov.uk platform, showcased
as [a Storybook instance](https://great-styles-staging.london.cloudapps.digital/).

---

## Development

Install dependencies:

```shell
$ npm install
```

Run storybook locally:

```shell
$ npm run storybook
```

Compile CSS:

```shell
$ npm run build 
```

Compile JS components, hooks and scripts:

```shell
$ npm run babel
```

_NOTE: you can run both the above script using `npm run build:all`._

## Versioning

To release a new version, [create a new release pull request](https://github.com/uktrade/great-styles/compare), and
[prepare a draft release](https://github.com/uktrade/great-styles/releases/new). The new tag on publish
should follow [Semantic Versioning](https://semver.org/). Once the pull request has been approved and merged, publish
the release.

Services using great-styles as a dependency can then update their version of `great-styles` if needed:

```shell
$ npm install --save-dev uktrade/great-styles#v0.4.1
```

## Publishing Storybook

You will need to be logged in to GOVUK <abbr title="Platform as a Service">PaaS</abbr>/Cloud Foundry. Once logged in,
and with sufficient permissions, you will be able to build and deploy the static Storybook instance:

```shell
$ npm run storybook:deploy
```

This will build and deploy the Storybook instance to https://great-styles-staging.london.cloudapps.digital.

