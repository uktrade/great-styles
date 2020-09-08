import React from 'react'
import {storiesOf} from "@storybook/react";
export default { title: 'Beta' };

// export const Beta = () => (
//   <span className='beta bg-blue-deep-10 text-blue-deep-80'><strong>BETA</strong></span>
// )

storiesOf('Beta', module)
  .add(
    'Beta',
    () => (<span className='beta bg-blue-deep-10 text-blue-deep-80'><strong>BETA</strong></span>),
    {
      'in-dsm': {
        id: '5f4e59b14faa682b89ba7f74'
      }
    }
  );
