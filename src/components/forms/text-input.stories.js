import React from "react";

export default {
  title: "Form/Text-field",
  parameters: {
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    "in-dsm": {
      id: "5f778c24191bcac78a413d8e",
      versionFilePath: "../versionFile.json",
    },
  },
};

export const Input = () => (
  <div className="m-s">
    <div className="form-group">
      <label className="form-label" htmlFor="full-name-f1">
        Full name
      </label>
      <input className="form-control" id="full-name-f1" type="text" name="full-name-f1" />
    </div>
  </div>
);

export const Input_error = () => (
  <div className="m-s">
    <div className="form-group form-group-error">
      <label className="form-label" htmlFor="example-form-control">
        This is the label text
      </label>
      <span className="error-message">Error message goes here</span>
      <input className="form-control" id="example-form-control" type="text" />
    </div>
  </div>
);

export const Input_with_placeholder = () => (
  <div className="m-s">
    <div className="form-group">
      <label className="form-label" htmlFor="full-name-f1">
        Full name
      </label>
      <input
        className="form-control"
        placeholder="Enter full name"
        id="full-name-f1"
        type="text"
        name="full-name-f1"
      />
    </div>
  </div>
);

export const Input_disabled = () => (
  <div className="m-s">
    <div className="form-group">
      <label className="form-label" htmlFor="full-name-f1">
        Full name
      </label>
      <input
        className="form-control"
        id="full-name-f1"
        type="text"
        name="full-name-f1"
        disabled
      />
    </div>
  </div>
);

export const Input_date = () => (
  <div className="m-s">
    <div className="form-group">
      <label className="form-label" htmlFor="full-name-f1">
        Date of birth
      </label>
      <input className="form-control" id="full-name-f1" type="date" name="full-name-f1" />
    </div>
  </div>
);

Input.parameters = {
  // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
  // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
  "in-dsm": {id: "5f778c24191bcac78a413d8e", versionFilePath: "../versionFile.json"},
};
Input_error.parameters = {
  // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
  // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
  "in-dsm": {id: "5f778c24191bcac78a413d8e", versionFilePath: "../versionFile.json"},
};
Input_with_placeholder.parameters = {
  // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
  // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
  "in-dsm": {id: "5f778c24191bcac78a413d8e", versionFilePath: "../versionFile.json"},
};
Input_disabled.parameters = {
  // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
  // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
  "in-dsm": {id: "5f778c24191bcac78a413d8e", versionFilePath: "../versionFile.json"},
};
Input_date.parameters = {
  // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
  // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
  "in-dsm": {id: "5f778c24191bcac78a413d8e", versionFilePath: "../versionFile.json"},
};
