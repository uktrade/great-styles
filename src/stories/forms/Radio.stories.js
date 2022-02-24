import React from 'react'

export default { title: 'Forms/Radio' }

export const Normal = () => (
  <ul>
    <li className='multiple-choice'>
      <input type='radio' id='radio-1' name='option' value='option 1' />
      <label htmlFor='radio-1'>Option 1</label>
    </li>
    <li className='multiple-choice'>
      <input type='radio' id='radio-2' name='option' value='option 2' />
      <label htmlFor='radio-2'>Option 2</label>
    </li>
  </ul>
)

export const Large = () => (
  <ul>
    <li className='multiple-choice large'>
      <input type='radio' id='radio-1' name='option' value='option 1' />
      <label htmlFor='radio-1'>Option 1</label>
    </li>
    <li className='multiple-choice large'>
      <input type='radio' id='radio-2' name='option' value='option 2' />
      <label htmlFor='radio-2'>Option 2</label>
    </li>
  </ul>
)
