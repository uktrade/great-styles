import React from 'react'

export default { title: 'Form/Select-box' }

export const Collapsed = () => (
  <div class="select m-b-l " style={{ width: '300px' }}>
    <div class="form-group  ">
      <label class="form-label " for="terms">
        Payments terms
      </label>
      <div class="learning ">
        <div class="learning__buttons m-b-xs"></div>
        <div class="learning__content"></div>
      </div>
      <div
        class="select__button text-blue-deep-20 "
        role="region"
        aria-label="Payments terms"
      >
        <button aria-haspopup="listbox" tabindex="0" type="button">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div class="select__placeholder text-blue-deep-60 bg-white radius">
        <div class="select__placeholder--input"></div>
        <div class="select__placeholder--value">Letter of credit</div>
        <div
          role="listbox"
          class="select__list body-l bg-white radius  "
          aria-expanded="false"
          style={{ transition: 'height 250ms ease 0s', display: 'none' }}
        >
          <ul class="option-list">
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              Payment in advance
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item text-black-50"
              aria-selected="true"
            >
              Letter of credit
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              Bank collection or documentary collections (D/C)
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              Open account
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
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
  <div class="select m-b-l " style={{ width: '400px' }}>
    <div class="form-group  ">
      <label class="form-label " for="terms">
        Payments terms
      </label>
      <div class="learning ">
        <div class="learning__buttons m-b-xs"></div>
        <div class="learning__content"></div>
      </div>
      <div
        class="select__button text-blue-deep-20 select__button--close"
        role="region"
        aria-label="Payments terms"
      >
        <button aria-haspopup="listbox" tabindex="0" type="button">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div class="select__placeholder text-blue-deep-60 bg-white radius">
        <div class="select__placeholder--input"></div>
        <div class="select__placeholder--value">Letter of credit</div>
        <div
          role="listbox"
          class="select__list body-l bg-white radius select__list--open "
          aria-expanded="true"
          style={{ transition: 'height 250ms ease 0s', display: 'block' }}
        >
          <ul class="option-list">
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              Payment in advance
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item text-black-50"
              aria-selected="true"
            >
              Letter of credit
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              Bank collection or documentary collections (D/C)
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              Open account
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
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
  <div class="select m-b-l " style={{ width: '500px' }}>
    <div class="form-group  ">
      <label class="form-label " for="methods">
        Payments methods
      </label>
      <div class="learning ">
        <div class="learning__buttons m-b-xs"></div>
        <div class="learning__content"></div>
      </div>
      <div
        class="select__button text-blue-deep-20 select__button--close"
        role="region"
        aria-label="Payments methods"
      >
        <button aria-haspopup="listbox" tabindex="0" type="button">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div class="select__placeholder text-blue-deep-60 bg-white radius">
        <div class="select__placeholder--input"></div>
        <div class="select__placeholder--value">
          <button
            class="tag tag--icon tag--secondary tag--small m-r-xs"
            type="button"
          >
            Other <i class="fas fa-times-circle"></i>
          </button>
          <button
            class="tag tag--icon tag--secondary tag--small m-r-xs"
            type="button"
          >
            Merchant services <i class="fas fa-times-circle"></i>
          </button>
        </div>
        <div
          role="listbox"
          class="select__list body-l bg-white radius select__list--open "
          aria-expanded="true"
          style={{ display: 'block' }}
        >
          <ul class="option-list">
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              International bank transfers
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              Credit or debit card payments
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
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
  <div class="select m-b-l autocomplete" style={{ width: '500px' }}>
    <div class="form-group  ">
      <label class="form-label visually-hidden" for="company_name"></label>
      <div class="learning ">
        <div class="learning__buttons m-b-xs"></div>
        <div class="learning__content"></div>
      </div>
      <div class="select__placeholder text-blue-deep-60 bg-white radius">
        <div class="select__placeholder--input">
          <input
            role="combobox"
            aria-controls="listbox"
            aria-expanded="true"
            class="form-control"
            placeholder="Business name"
            value="frosties"
          />
        </div>
        <div
          role="listbox"
          class="select__list body-l bg-white radius select__list--open "
          aria-expanded="true"
          style={{display: 'block'}}
        >
          <ul class="option-list">
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              FROSTIES LIMITED
              <div class="body-m text-blue-deep-60">
                Company number: SC432141
              </div>
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              FROSTIES LIFTING SERVICES LTD
              <div class="body-m text-blue-deep-60">
                Company number: SC592172
              </div>
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              FROSTIES FINCHES LTD
              <div class="body-m text-blue-deep-60">
                Company number: 09141107
              </div>
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              FROSTIE'S BALLOONS LIMITED
              <div class="body-m text-blue-deep-60">
                Company number: 06746941
              </div>
            </li>
            <li
              tabindex="0"
              role="option"
              class="select__list--item "
              aria-selected="false"
            >
              A1 FROSTIES LTD
              <div class="body-m text-blue-deep-60">
                Company number: 12100578
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
