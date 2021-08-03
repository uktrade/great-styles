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
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@invisionapp/dsm-storybook",
  ],
};
