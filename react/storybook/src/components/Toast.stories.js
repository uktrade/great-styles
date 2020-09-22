import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import Toast from './Toast';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [{ name: 'DSM background', value: '#f8f8fa', default: true }]
  })
  .add(
    'A GREAT Toast-er',
    () => {
      const statusOptions = {
        default: 'default',
        success: 'success',
        warning: 'warning',
        error: 'error',
        info: 'info'
      };

      return (
        <Toast
          text={text('text', 'This is a notification message')}
          status={select('status', statusOptions, statusOptions.default)}
        />
      );
    },
    {
      'in-dsm': { id: '5f5f703a6ce17b3e13c41682', version: '1.0.0' }
    }
  );
