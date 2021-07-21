import React from 'react'

export default { title: 'Form/Select-box' }

export const Collapsed = () => (
  <div className="select m-b-l " style={{ width: '300px' }}>
    <div className="form-group  ">
      <label className="form-label" htmlFor="terms">
        Payments terms
      </label>
      <div className="learning ">
        <div className="learning__buttons m-b-xs"></div>
        <div className="learning__content"></div>
      </div>
      <div
        className="select__button text-blue-deep-20 "
        role="region"
        aria-label="Payments terms"
      >
        <button aria-haspopup="listbox" tabIndex="0" type="button">
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      <div className="select__placeholder text-blue-deep-60 bg-white radius">
        <div className="select__placeholder--input"></div>
        <div className="select__placeholder--value">Letter of credit</div>
        <div
          role="listbox"
          className="select__list body-l bg-white radius  "
          aria-expanded="false"
          style={{ transition: 'height 250ms ease 0s', display: 'none' }}
        >
          <ul className="option-list">
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Payment in advance
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item text-black-50"
              aria-selected="true"
            >
              Letter of credit
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Bank collection or documentary collections (D/C)
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Open account
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Other
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export const Expanded = () => (
  <div className="select m-b-l " style={{ width: '400px' }}>
    <div className="form-group  ">
      <label className="form-label" htmlFor="terms">
        Payments terms
      </label>
      <div className="learning ">
        <div className="learning__buttons m-b-xs"></div>
        <div className="learning__content"></div>
      </div>
      <div
        className="select__button text-blue-deep-20 select__button--close"
        role="region"
        aria-label="Payments terms"
      >
        <button aria-haspopup="listbox" tabIndex="0" type="button">
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      <div className="select__placeholder text-blue-deep-60 bg-white radius">
        <div className="select__placeholder--input"></div>
        <div className="select__placeholder--value">Letter of credit</div>
        <div
          role="listbox"
          className="select__list body-l bg-white radius select__list--open "
          aria-expanded="true"
          style={{ transition: 'height 250ms ease 0s', display: 'block' }}
        >
          <ul className="option-list">
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Payment in advance
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item text-black-50"
              aria-selected="true"
            >
              Letter of credit
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Bank collection or documentary collections (D/C)
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Open account
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Other
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export const Multiselect = () => (
  <div className="select m-b-l " style={{ width: '500px' }}>
    <div className="form-group  ">
      <label className="form-label" htmlFor="methods">
        Payments methods
      </label>
      <div className="learning ">
        <div className="learning__buttons m-b-xs"></div>
        <div className="learning__content"></div>
      </div>
      <div
        className="select__button text-blue-deep-20 select__button--close"
        role="region"
        aria-label="Payments methods"
      >
        <button aria-haspopup="listbox" tabIndex="0" type="button">
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      <div className="select__placeholder text-blue-deep-60 bg-white radius">
        <div className="select__placeholder--input"></div>
        <div className="select__placeholder--value">
          <button
            className="tag tag--icon tag--secondary tag--small m-r-xs"
            type="button"
          >
            Other <i className="fas fa-times-circle"></i>
          </button>
          <button
            className="tag tag--icon tag--secondary tag--small m-r-xs"
            type="button"
          >
            Merchant services <i className="fas fa-times-circle"></i>
          </button>
        </div>
        <div
          role="listbox"
          className="select__list body-l bg-white radius select__list--open "
          aria-expanded="true"
          style={{ display: 'block' }}
        >
          <ul className="option-list">
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              International bank transfers
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Credit or debit card payments
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              Local bank transfers
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export const TypeAhead = () => (
  <div className="select m-b-l autocomplete" style={{ width: '500px' }}>
    <div className="form-group  ">
      <label className="form-label visually-hidden" htmlFor="company_name"></label>
      <div className="learning ">
        <div className="learning__buttons m-b-xs"></div>
        <div className="learning__content"></div>
      </div>
      <div className="select__placeholder text-blue-deep-60 bg-white radius">
        <div className="select__placeholder--input">
          <input
            role="combobox"
            aria-controls="listbox"
            aria-expanded="true"
            className="form-control"
            placeholder="Business name"
            value="frosties"
          />
        </div>
        <div
          role="listbox"
          className="select__list body-l bg-white radius select__list--open "
          aria-expanded="true"
          style={{display: 'block'}}
        >
          <ul className="option-list">
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              FROSTIES LIMITED
              <div className="body-m text-blue-deep-60">
                Company number: SC432141
              </div>
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              FROSTIES LIFTING SERVICES LTD
              <div className="body-m text-blue-deep-60">
                Company number: SC592172
              </div>
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              FROSTIES FINCHES LTD
              <div className="body-m text-blue-deep-60">
                Company number: 09141107
              </div>
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              FROSTIE'S BALLOONS LIMITED
              <div className="body-m text-blue-deep-60">
                Company number: 06746941
              </div>
            </li>
            <li
              tabIndex="0"
              role="option"
              className="select__list--item "
              aria-selected="false"
            >
              A1 FROSTIES LTD
              <div className="body-m text-blue-deep-60">
                Company number: 12100578
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
