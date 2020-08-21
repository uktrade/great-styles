import React from "react";

export default { title: "Form" };

export const Form = () => (
  <div className="m-s">
    <div class="great-checkbox">
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Label text</label>
    </div>
    <p></p>
    <div class="great-checkbox great-checkbox--large bg-black">
      <input type="checkbox" id="checkbox_large" />
      <label htmlFor="checkbox_large">Label text</label>
    </div>
  </div>
);
