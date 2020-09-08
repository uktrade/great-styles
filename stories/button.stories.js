import React from "react";

import "../styles/great-styles.css";
import primary_button from './primary_button.html';

import { storiesOf } from '@storybook/react';
export default { title: "Button" };


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
    <br className='m-v-s'/>
    <button className="button button--primary width-full">
      .button .button--primary .width-full
    </button>
  </div>
);

export const Button_with_icon = () => (
  <div className="m-s">
    <button className="button button--secondary button--icon button--icon-left width-full">
      <i className="fas fa-download" />
      <span>.button .button--secondary .button--icon .button--icon-left</span>
    </button>
    <br className='m-v-s'/>
    <button className="button button--secondary button--icon width-full">
      <i className="fas fa-download" />
      .button .button--secondary .button--icon
    </button>
  </div>
);

export const Button_disabled = () => (
  <div className="m-s">
    <button className="button button--primary" disabled>.button .button--primary</button>
    <br className='m-v-s'/>
    <button className="button button--secondary" disabled>.button .button--secondary</button>
    <br className='m-v-s'/>
    <button className="button button--tertiary" disabled>.button .button--tertiary</button>
    <br className='m-v-s'/>
  </div>
);

storiesOf('Button', module)
  .add(
    'primary button', () => primary_button,
    {
      'in-dsm': {
        id: '5f4e59b14faa682b89ba7f74'
      }
    }
  );
