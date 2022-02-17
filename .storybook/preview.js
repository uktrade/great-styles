import '../src/scss/great-styles.scss'

export const parameters = {
  layout: 'centered',
  docs: { page: null },
  // TODO: Define some actual organisation for all components/atoms/modules
  // Sort the stories and folders alphabetically (at the top level)
  options: {
    storySort: {
      order: ['Base styles', ['Colours', 'Typography', 'Grid'], 'Elements'],
    },
  },
}
