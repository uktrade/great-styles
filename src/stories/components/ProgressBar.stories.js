import React from 'react'

export default { title: 'Components/Progress Bar' }

export const ProgressBar = () => (
  <>
    <div className='progress-bar'>
      <span style={{ width: '33.3333%' }} />
    </div>
    <p className='body-m-b m-t-xxs m-b-0'>7 / 21 lessons complete</p>
  </>
)
