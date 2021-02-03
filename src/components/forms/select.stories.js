import React from "react";

export default {title: "Form/Select-box"};

export const Collapsed = () => (
  <div className="select m-b-l">
    <div className="form-group">
      <label className="form-label" htmlFor="Business performance">
        Business performance
      </label>
    </div>
    <div className="select__button text-blue-deep-20 button--toggle ">
      <button aria-haspopup="listbox" tabIndex="0" type="button" className="f-r button--toggle">
        <i className="fas button--toggle fa-sort" />
      </button>
    </div>
    <div className="select__placeholder text-blue-deep-60 bg-white radius ">Payment in advance</div>
  </div>
);

export const Expanded = () => (
  <div className="select m-b-l">
    <div className="form-group">
      <label className="form-label" htmlFor="Business performance">
        Business performance
      </label>
    </div>
    <div className="select__button text-blue-deep-20 button--toggle select__button--close">
      <button aria-haspopup="listbox" tabIndex="0" type="button" className="f-r button--toggle">
        <i className="fas button--toggle fa-times-circle text-blue-deep-60" />
      </button>
    </div>
    <div className="select__placeholder text-blue-deep-60 bg-white radius hidden">Payment in advance</div>
    <ul role="listbox" className="select__list m-t-0 bg-white body-l radius">
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
