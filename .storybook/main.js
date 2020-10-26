module.exports = {
  stories: ["../**/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    // {
    //   name: "@storybook/addon-storysource",
    //   options: {
    //     rule: {
    //       // test: [/\.stories\.jsx?$/], This is default
    //       include: [path.resolve(__dirname, "../src")], // You can specify directories
    //     },
    //     loaderOptions: {
    //       prettierConfig: {printWidth: 80, singleQuote: false},
    //     },
    //   },
    // },
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@invisionapp/dsm-storybook",
  ],
};
