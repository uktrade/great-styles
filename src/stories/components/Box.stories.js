import React from 'react'

export default {
  title: 'Components/Text-in-a-box',
}

// FIXME: Is this ever used with the arrow? Remove from SCSS if not
export const With_left_arrow = () => (
  <div className='box'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, totam.</div>
)

// FIXME: why is the padding different with/without arrow?
export const No_arrow = () => (
  <div className='box box--no-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
)
