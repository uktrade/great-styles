import React from 'react'

export default { title: 'Components/Section Complete Checkbox' }

export const SectionCompleteCheckbox = () => (
  <div className='bg-blue-deep-80 m-s p-m'>
    <h3 className='h-m text-white m-b-xs'>Section complete?</h3>
    <div class='great-checkbox great-checkbox--large'>
      <input type='checkbox' id='checkbox_complete' />
      <label htmlFor='checkbox_complete'>Yes</label>
    </div>
  </div>
)
