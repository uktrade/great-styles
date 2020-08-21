import React from "react";

export default { title: "Button" };

export const Button = () => (
  <div className="m-s">
    <i className="fab fa-500px"></i>
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
