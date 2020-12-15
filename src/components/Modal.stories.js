import React from "react";

export default {title: "Overlays"};

export const Modal_window = () => (
  <div className="bg-blue-deep-10 modal-container">
    <div className="modal">
      <div className="modal-header radius-top-md bg-blue-deep-80 p-s">
        <a href="/test" className="link text-white body-m modal-close">
          <i className="fas fa-arrow-circle-left m-r-xxs" /> back
        </a>
      </div>
      <div className="modal-inner text-blue-deep-80 bg-white radius-bottom-md">
        <div className="p-s">
          <h4 className="h-xs p-0">Add your target market</h4>
          <p className="m-t-xs">
            You will need to choose a target market before you can complete this section
          </p>
          <button className="button">Add a target market</button>
        </div>
      </div>
    </div>
  </div>
);

export const Modal_window_2 = () => (
  <div className="bg-blue-deep-10 modal-container">
    <div className="modal">
      <div className="modal-header modal-header-bg modal-header-bg--1 radius-top-md bg-blue-deep-80 p-s">
        <a href="/test" className="link text-white body-m modal-close">
          <i className="fas fa-arrow-circle-left m-r-xxs" /> back
        </a>
      </div>
      <div className="modal-inner text-blue-deep-80 bg-white radius-bottom-md">
        <div className="p-s">
          <h4 className="h-xs p-0">Add your target market</h4>
          <p className="m-t-xs">
            You will need to choose a target market before you can complete this section
          </p>
          <button className="button">Add a target market</button>
        </div>
      </div>
    </div>
  </div>
);

export const Modal_window_3 = () => (
  <div className="bg-blue-deep-10 modal-container">
    <div className="modal">
      <div className="modal-header modal-header-bg modal-header-bg--1 radius-top-md bg-blue-deep-80 p-s">
        <a href="/test" className="link text-white body-m modal-close">
          <i className="fas fa-arrow-circle-left m-r-xxs" /> back
        </a>
      </div>
      <div className="modal-inner text-blue-deep-80 bg-white radius-bottom-md">
        <div className="p-s">
          <h4 className="h-xs p-0">Add your target market</h4>
          <p className="m-t-xs">
            You will need to choose a target market before you can complete this section
          </p>
          <button className="button">Add a target market</button>
        </div>
      </div>
    </div>
  </div>
);

export const Modal_window_4 = () => (
  <div className="bg-blue-deep-10 modal-container">
    <div className="modal">
      <div className="modal-header modal-header-bg modal-header-bg--2 radius-top-md bg-blue-deep-80 p-s">
        <a href="/test" className="link text-white body-m modal-close">
          <i className="fas fa-arrow-circle-left m-r-xxs" /> back
        </a>
      </div>
      <div className="modal-inner text-blue-deep-80 bg-white radius-bottom-md">
        <div className="p-s">
          <h4 className="h-xs p-0">Add your product</h4>
          <p className="m-t-xs">
            You will need to choose a product before you can complete this section
          </p>
          <button className="button">Add a product</button>
        </div>
      </div>
    </div>
  </div>
);

export const Modal_window_5 = () => (
  <div className="bg-blue-deep-10 modal-container">
    <div className="modal">
      <div className="modal-header modal-header-bg modal-header-bg--3 radius-top-md bg-blue-deep-80 p-s">
        <a href="/test" className="link text-white body-m modal-close">
          <i className="fas fa-arrow-circle-left m-r-xxs" /> back
        </a>
      </div>
      <div className="modal-inner text-blue-deep-80 bg-white radius-bottom-md">
        <div className="p-s">
          <h4 className="h-xs p-0">This feature is coming soon</h4>
          <p className="m-t-xs">
            This feature is not available in the Beta version of the new great.gov.uk
            platform.
          </p>
          <button className="button">OK</button>
        </div>
      </div>
    </div>
  </div>
);

export const Modal_window_with_footer = () => (
  <div className="bg-blue-deep-10 modal-container">
    <div className="modal">
      <div className="modal-header modal-header-bg modal-header-bg--1 radius-top-md bg-blue-deep-80 p-s">
        <a href="/test" className="link text-white body-m modal-close">
          <i className="fas fa-arrow-circle-left m-r-xxs" /> back
        </a>
      </div>
      <div className="modal-inner text-blue-deep-80 bg-white radius-bottom-md">
        <div className="p-s">
          <h4 className="h-xs p-0">Add your target market</h4>
          <p className="m-t-xs">
            You will need to choose a target market before you can complete this section
          </p>
          <button className="button">Add a target market</button>
        </div>
        <div className="modal-footer">
          <hr className="hr hr--light m-0" />
          <div className="p-h-s p-b-s">
            <h4 className="h-xs p-b-xs">Select a market you’ve already researched</h4>
            <button className="tag tag--icon tag--tertiary inline m-r-xs">
              United Kingdom
              <i className="fas fa-plus" />
            </button>
            <button className="tag tag--icon tag--tertiary inline">
              Mauritius
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
