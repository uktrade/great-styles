import React from 'react';

export default { title: 'Modal' };

export const Modal = () => (
  <div className='bg-blue-deep-10 p-l'>
    <div className='modal'>
      <div className='modal-header radius-top bg-blue-deep-80 p-s'>
        <a href='/test' className='link text-white body-m modal-close'><i className='fas fa-arrow-circle-left m-r-xxs' /> back</a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>Add your target market</h4>
          <p className='m-t-xs'>You will need to choose a target market before you can complete this section</p>
          <button className='button'>Add a target market</button>
        </div>
      </div>
    </div>
  </div>
)

export const Modal_2 = () => (
  <div className='bg-blue-deep-10 p-l'>
    <div className='modal'>
      <div className='modal-header modal-header--2 radius-top bg-blue-deep-80 p-s'>
        <a href='/test' className='link text-white body-m modal-close'><i className='fas fa-arrow-circle-left m-r-xxs' /> back</a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>Add your target market</h4>
          <p className='m-t-xs'>You will need to choose a target market before you can complete this section</p>
          <button className='button'>Add a target market</button>
        </div>
      </div>
    </div>
  </div>
)

export const Modal_3 = () => (
  <div className='bg-blue-deep-10 p-l'>
    <div className='modal'>
      <div className='modal-header modal-header--3 radius-top bg-blue-deep-80 p-s'>
        <a href='/test' className='link text-white body-m modal-close'><i className='fas fa-arrow-circle-left m-r-xxs' /> back</a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>Add your target market</h4>
          <p className='m-t-xs'>You will need to choose a target market before you can complete this section</p>
          <button className='button'>Add a target market</button>
        </div>
      </div>
    </div>
  </div>
)

export const Modal_with_footer = () => (
  <div className='bg-blue-deep-10 p-l'>
    <div className='modal'>
      <div className='modal-header radius-top bg-blue-deep-80 p-s'>
        <a href='/test' className='link text-white body-m modal-close'><i className='fas fa-arrow-circle-left m-r-xxs' /> back</a>
      </div>
      <div className='modal-inner text-blue-deep-80 bg-white radius-bottom'>
        <div className='p-s'>
          <h4 className='h-xs p-0'>Add your target market</h4>
          <p className='m-t-xs'>You will need to choose a target market before you can complete this section</p>
          <button className='button'>Add a target market</button>
        </div>
        <div className='modal-footer'>
          <hr className='hr hr--light m-0' />
          <div className='p-h-s p-b-s'>
            <h4 className='h-xs p-b-xs'>Select a market you’ve already researched</h4>
            <button className='button button--secondary button--icon inline m-r-xs'><i className='fas fa-plus-square' /><span>United Kingdom</span></button>
            <button className='button button--secondary button--icon inline'><i className='fas fa-plus-square' /><span>Mauritius</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
