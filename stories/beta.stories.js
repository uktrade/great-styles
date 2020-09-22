import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

export default { title: 'Beta',
                 decorators: [withKnobs, withA11y],
};

export const Beta = () => (
  <span className='beta bg-blue-deep-10 text-blue-deep-80'><strong disabled={boolean('Disabled', false)}>BETA</strong></span>
)
