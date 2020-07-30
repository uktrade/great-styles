import React from "react";

import "../styles/great-styles.css";

export default { title: "Form" };

export const Form = () => (
  <div className="m-s">
    <div class="great-checkbox">
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Label text</label>
    </div>
  </div>
);
