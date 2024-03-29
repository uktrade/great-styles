module.exports = {
  stories: ['../src/**/*.stories.js'],

  features: {
    postcss: false,
  },

  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          sassOptions: {
            includePaths: ['src/scss'],
          },
        },
      },
    },
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  }
}
