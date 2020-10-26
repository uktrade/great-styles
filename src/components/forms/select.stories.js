import React from "react";

export default {title: "Form/Select-box"};

export const Collapsed = () => (
  <div className="select m-b-l">
    <div className="form-group">
      <label className="form-label" htmlFor="Business performance">
        Business performance
      </label>
      <input
        className="form-control"
        id="Business performance"
        type="text"
        name="Business performance"
        placeholder="Select one"
        readOnly
        value="£50 million or over"
      />
    </div>
    <button
      className="select__button text-blue-deep-20 bg-white"
      type="button"
      aria-haspopup="listbox"
    >
      <i className="fas fa-sort" />
    </button>
  </div>
);

export const Expanded = () => (
  <div className="select m-b-l">
    <div className="form-group width-full">
      <label className="form-label" htmlFor="Business performance">
        Business performance
      </label>
      <input
        className="form-control"
        id="Business performance"
        type="text"
        name="Business performance"
        placeholder="Select one"
        readOnly=""
        value="£50 million or over"
      />
    </div>
    <button
      className="select__button text-blue-deep-20 bg-white"
      type="button"
      aria-haspopup="listbox"
    >
      <i className="fas fa-times-circle text-blue-deep-60" />
    </button>
    <ul role="listbox" className="select__list bg-white body-l radius">
      <li>Select one</li>
      <li className="select__list--item" aria-selected="false" role="option">
        item 1
      </li>
      <li className="select__list--item" aria-selected="false" role="option">
        item 2
      </li>
      <li className="select__list--item" aria-selected="false" role="option">
        item 3
      </li>
    </ul>
  </div>
);
