import React from 'react'

export default { title: 'Components/Media Block' }

export const MediaBlock = () => (
  <div className='m-s'>
    <div className='media-block'>
      <img src='https://dummyimage.com/70x70/000/fff' alt='' />
      <div>
        <h3 className='h-l text-blue-deep-80'>Heading text</h3>
        <p className='text-blue-deep-80'>Paragraph text</p>
      </div>
    </div>
  </div>
)
export const RoundImage = () => (
  <div className='m-s'>
    <div className='media-block media-block--round-image'>
      <img src='https://dummyimage.com/70x70/000/fff' alt='' />
      <div>
        <h3 className='h-l text-blue-deep-80'>Heading text</h3>
        <p className='text-blue-deep-80'>Paragraph text</p>
      </div>
    </div>
  </div>
)
export const BorderLeft = () => (
  <div className='m-s'>
    <div className='media-block media-block--round-image'>
      <i className='fas fa-ban'></i>
      <div className='g-panel g-panel--horizontal-mobile'>
        <h3 className='h-l text-blue-deep-80'>Heading text</h3>
        <p className='text-blue-deep-80'>Paragraph text</p>
      </div>
    </div>
  </div>
)
