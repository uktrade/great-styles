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
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@invisionapp/dsm-storybook",
  ],
};
