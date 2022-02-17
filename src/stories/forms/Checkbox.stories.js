import React from 'react'

export default { title: 'Forms/Checkbox' }

export const Checkbox = () => (
  <ul>
    <li className='multiple-choice'>
      <input type='checkbox' id='checkbox-1' name='options[]' value='option 1' />
      <label htmlFor='checkbox-1'>Option 1</label>
    </li>
    <li className='multiple-choice'>
      <input type='checkbox' id='checkbox-2' name='options[]' value='option 2' />
      <label htmlFor='checkbox-2'>Option 2</label>
    </li>
  </ul>
)
