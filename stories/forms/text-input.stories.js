import React from "react";

export default { title: "Form/Input" };

export const Input = () => (
  <div className="m-s">
    <div className="form-group">
      <label className="form-label" htmlFor="full-name-f1">Full name</label>
      <input className="form-control" id="full-name-f1" type="text" name="full-name-f1" />
    </div>
  </div>
);

export const Input_error = () => (
  <div className="m-s">
    <div className="form-group form-group-error">
      <label className="form-label" htmlFor="example-form-control">This is the label text</label>
      <span className="error-message">Error message goes here</span>
      <input className="form-control" id="example-form-control" type="text" />
    </div>
  </div>
);

export const Input_with_placeholder = () => (
  <div className="m-s">
    <div className="form-group">
      <label className="form-label" htmlFor="full-name-f1">Full name</label>
      <input className="form-control" placeholder='Enter full name' id="full-name-f1" type="text" name="full-name-f1" />
    </div>
  </div>
);

export const Input_disabled = () => (
  <div className="m-s">
    <div className="form-group">
      <label className="form-label" htmlFor="full-name-f1">Full name</label>
      <input className="form-control" id="full-name-f1" type="text" name="full-name-f1" disabled/>
    </div>
  </div>
);
