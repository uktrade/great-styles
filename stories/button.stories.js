import React from "react";

export default { title: "Buttons" };

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
