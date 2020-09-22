import React from "react";

export default { title: "Buttons" };

const buttons = [
  "button button--large",
  "button",
  "button button--small",
  "button button--secondary button--large",
  "button button--secondary",
  "button button--secondary button--small",
  "button button--tertiary button--large",
  "button button--tertiary",
  "button button--tertiary button--small"
];

export const Button = () => (
  <div>
    {buttons.map(classes => {
      return (
        <div className="m-b-s">
          <button className={classes}>
            {classes.split().map(c => `.${c}`)}
          </button>
        </div>
      );
    })}
  </div>
);

export const Button_with_icon = () => (
  <div className="m-s">
    <button className="button button--secondary button--icon button--icon-left width-full">
      <i className="fas fa-download" />
      <span>.button .button--secondary .button--icon .button--icon-left</span>
    </button>
    <br className="m-v-s" />
    <button className="button button--secondary button--icon width-full">
      <i className="fas fa-download" />
      .button .button--secondary .button--icon
    </button>
  </div>
);

export const Button_disabled = () => (
  <div className="m-s">
    <button className="button button--primary" disabled>
      .button .button--primary
    </button>
    <br className="m-v-s" />
    <button className="button button--secondary" disabled>
      .button .button--secondary
    </button>
    <br className="m-v-s" />
    <button className="button button--tertiary" disabled>
      .button .button--tertiary
    </button>
    <br className="m-v-s" />
  </div>
);

export const Button_as_icon = () => (
  <div className="m-s">
    <button type="button" className="button button--icon-center">
      <i className="fas fa-share text-blue-deep-60 icon--border" />
    </button>
  </div>
);
