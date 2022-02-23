import React from 'react'

export default { title: 'Components/Modal' }

// FIXME: What types of modals are actually used? What features need showcasing?
// FIXME: any story below should showcase a working modal, i.e. with full close/dismiss functionality.
export const Modal_window_1 = () => (
  <div className='modal-container'>
    <div className='modal'>
      <div className='modal-header modal-header-bg modal-header-bg--1 radius-top-s bg-blue-deep-80 p-s'>
        <a
          href='#'
          className='link text-white body-m modal-close modal-close--back'
        >
          <i className='fas fa-arrow-left m-r-xxs' /> Back
        </a>
        <a
          href='#'
          className='link text-white modal-close modal-close--x modal-close--x-large'
        >
          <i className='fas fa-times-circle' />
        </a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom-s'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>Add your target market</h4>
          <p className='m-t-xs'>
            You will need to choose a target market before you can complete this
            section
          </p>
          <button className='button'>Add a target market</button>
        </div>
      </div>
    </div>
  </div>
)

export const Modal_window_2 = () => (
  <div className='modal-container'>
    <div className='modal'>
      <div className='modal-header modal-header-bg modal-header-bg--2 radius-top-s bg-blue-deep-80 p-s'>
        <a href='#' className='link text-white body-m modal-close'>
          <i className='fas fa-arrow-left m-r-xxs' /> Back
        </a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom-s'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>Add your product</h4>
          <p className='m-t-xs'>
            You will need to choose a product before you can complete this
            section
          </p>
          <button className='button'>Add a product</button>
        </div>
      </div>
    </div>
  </div>
)

export const Modal_window_3 = () => (
  <div className='modal-container'>
    <div className='modal'>
      <div className='modal-header modal-header-bg modal-header-bg--3 radius-top-s bg-blue-deep-80 p-s'>
        <a href='#' className='link text-white body-m modal-close'>
          <i className='fas fa-arrow-left m-r-xxs' /> Back
        </a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom-s'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>This feature is coming soon</h4>
          <p className='m-t-xs'>
            This feature is not available in the Beta version of the new
            great.gov.uk platform.
          </p>
          <button className='button'>OK</button>
        </div>
      </div>
    </div>
  </div>
)

export const Modal_window_4 = () => (
  <div className='modal-container'>
    <div className='modal'>
      <div className='modal-header bg-white radius-top-s p-h-s p-t-s'>
        <a
          href='#'
          className='button button--secondary button--small button--icon modal-close'
        >
          <i className='fas fa-arrow-left' />
          <span>Back</span>
        </a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom-s'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>This feature is coming soon</h4>
          <p className='m-t-xs'>
            This feature is not available in the Beta version of the new
            great.gov.uk platform.
          </p>
          <button className='button'>OK</button>
        </div>
      </div>
    </div>
  </div>
)

export const Modal_window_5 = () => (
  <div className='modal-container'>
    <div className='modal'>
      <div className='modal-header bg-white radius-top-s p-h-s p-t-s'>
        <a href='#' className='link modal-close modal-close--x'>
          <i className='fas fa-times' />
        </a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom-s'>
        <div className='p-h-s p-t-0 p-b-s'>
          <h4 className='h-xs p-0'>Add your target market</h4>
          <p className='m-t-xs'>
            You will need to choose a target market before you can complete this
            section.
          </p>
          <button className='button'>Add a target market</button>
        </div>
      </div>
    </div>
  </div>
)

export const Modal_window_6_empty = () => (
  <div className='modal-container'>
    <div className='modal'>
      <div className='modal-header bg-white radius-top-s p-h-s p-t-s'>
        <a
          href='#'
          className='button button--secondary button--small button--icon modal-close modal-close--back m-t-n-xs m-f-n-xs'
        >
          <i className='fas fa-arrow-left' />
          <span>Back</span>
        </a>
        <a href='#' className='link modal-close modal-close--x'>
          <i className='fas fa-times' />
        </a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom-s'>
        <div className='p-h-s p-t-0 p-b-s' style={{ height: '200px' }} />
      </div>
    </div>
  </div>
)

export const Modal_window_no_image = () => (
  <div className='modal-container'>
    <div className='modal'>
      <div className='modal-header radius-top-s bg-blue-deep-80 p-s'>
        <a href='#' className='link text-white body-m modal-close'>
          <i className='fas fa-arrow-left m-r-xxs' /> Back
        </a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom-s'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>Add your target market</h4>
          <p className='m-t-xs'>
            You will need to choose a target market before you can complete this
            section
          </p>
          <button className='button'>Add a target market</button>
        </div>
      </div>
    </div>
  </div>
)

export const Modal_window_with_footer = () => (
  <div className='modal-container'>
    <div className='modal'>
      <div className='modal-header modal-header-bg modal-header-bg--1 radius-top-s bg-blue-deep-80 p-s'>
        <a href='#' className='link text-white body-m modal-close'>
          <i className='fas fa-arrow-circle-left m-r-xxs' /> Back
        </a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom-s'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>Add your target market</h4>
          <p className='m-t-xs'>
            You will need to choose a target market before you can complete this
            section
          </p>
          <button className='button'>Add a target market</button>
        </div>
        <div className='modal-footer'>
          <hr className='hr hr--light m-0' />
          <div className='p-h-s p-b-s'>
            <h4 className='h-xs p-b-xs'>
              Select a market you’ve already researched
            </h4>
            <button className='tag tag--icon tag--tertiary inline m-r-xs'>
              United Kingdom
              <i className='fas fa-plus' />
            </button>
            <button className='tag tag--icon tag--tertiary inline'>
              Mauritius
              <i className='fas fa-plus' />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
