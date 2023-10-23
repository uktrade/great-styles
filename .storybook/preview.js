import '../src/scss/great-styles.scss'

export const backgrounds = [
  {
    name: 'Blue deep 10',
    value: '#e9e7ed',
  },
]

export const parameters = {
  layout: 'centered',
  docs: { page: null },
  options: {
    storySort: {
      order: [
        'Base',
        ['Colours', 'Typography', 'Grid'],
        'Elements',
        'Forms',
        'Components',
      ],
    },
  },
  backgrounds: {
    values: backgrounds,
    grid: {
      disable: true,
    },
  },
}
