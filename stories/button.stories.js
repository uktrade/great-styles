import React from "react";

import "../styles/great-styles.css";

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
  </div>
);
