import React from 'react'

export default { title: 'Components/G-Panel' }

export const GPanel = () => (
  <p className='g-panel'>
    For any questions, queries or feedback please get in touch with
    private@digital.trade.gov.uk
  </p>
)

// FIXME: this looks odd.
export const GPanelHorizontalMobile = () => (
  <p className='g-panel g-panel--horizontal-mobile'>
    For any questions, queries or feedback please get in touch with
    private@digital.trade.gov.uk
  </p>
)

// FIXME: currently broken, remove from SCSS if unused
export const GPanelVertical = () => (
  <p className='g-panel g-panel-vertical'>
    For any questions, queries or feedback please get in touch with
    private@digital.trade.gov.uk
  </p>
)
