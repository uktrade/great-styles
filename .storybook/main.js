module.exports = {
  stories: ["../src/**/*.stories.js"],
  features: {
    postcss: false,
  },
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        sassLoaderOptions: {
          sassOptions: {
            includePaths: ["src/scss"],
          },
        }
      }
    },
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    // TODO: enable when a non-vulnerable version of DSM is released
    //"@invisionapp/dsm-storybook",
  ],
};
