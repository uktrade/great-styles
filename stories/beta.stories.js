import React from 'react'
import {storiesOf} from "@storybook/react";
import beta_button from './beta_button.html';
export default { title: 'Beta' };

// export const Beta = () => (
//   <span className='beta bg-blue-deep-10 text-blue-deep-80'><strong>BETA</strong></span>
// )

storiesOf('Beta', module)
  .add(
    'Beta',
    () => beta_button,
    {
      'in-dsm': {
        id: '5f4e59b14faa682b89ba7f74'
      }
    }
  );
