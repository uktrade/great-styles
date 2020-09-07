import React from "react";

import "../styles/great-styles.css";

export default { title: "Button" };
import { storiesOf } from '@storybook/react';

export const Button = () => (
  <div className="m-s">
    <button className="button button--primary">.button .button--primary</button>
    <p></p>
    <button className="button button--primary button--large">
      .button .button--primary .button--large
    </button>
    <p></p>
    <button className="button button--secondary">
      .button .button--secondary
    </button>
    <p></p>
    <button className="button button--tertiary">
      .button .button--tertiary
    </button>
    <p></p>
    <button className="button button--primary button--round-corner">
      .button .button--primary .button--round-corner
    </button>
  </div>
);

storiesOf('Button', module)
  .add( 
    'primary button',
    () => (
      <button>i'm a primary button</button>
    ),
    {
      'in-dsm': {
        id: '5f4e59b14faa682b89ba7f74'
      }
    }
  );
