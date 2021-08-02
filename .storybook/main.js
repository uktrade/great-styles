module.exports = {
  stories: ["../src/**/*.stories.js"],
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
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@invisionapp/dsm-storybook",
  ],
};
