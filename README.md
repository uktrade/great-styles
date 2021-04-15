# Great Styles

[![circle-ci-image]][circle-ci]
[![coverage-image]][coverage]
[![gitflow-image]][gitflow]
[![calver-image]][calver]

**Styles GREAT platform - the Department for International Trade (DIT)**

---

## Development

Install dependencies
`npm install`

Run storybook in dev mode:
`npm run storybook`

Build and watch static assets (indepentent process) using gulp:
`npm i -g gulp` then `gulp` will compile and watch for ongoing SCSS changes.
or `npm run static-build` will execute gulp with `npx` (if you prefer not to install gulp globally).

Preview DSM/storybook locally:
`npm run dsm-storybook:preview`

Publish DSM/storybook:
`npm run dsm-storybook:publish`

you will need a proper .dsmrc file, read more on how to "manage authentication tokens" here:
https://support.invisionapp.com/hc/en-us/articles/360028510211-Configuring-the-Storybook-DSM-Integration

### Installing

### Requirements

### Helpful links

- [Include static folders for `dsm-storybook` to correctly apply global styles](https://support.invisionapp.com/hc/en-us/articles/360044117952-Can-I-include-static-assets-with-the-DSM-Storybook-integration-)

### Related projects

upstream: invision DSM
downstream: https://github.com/uktrade/great-cms
