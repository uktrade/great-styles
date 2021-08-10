import "../src/scss/great-styles.scss";

export const parameters = {
  layout: 'centered',
  docs: {page: null},
  // TODO: Define some actual organisation for all components/atoms/modules
  // Sort the stories and folders alphabetically (at the top level)
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, {numeric: true}),
  },
};