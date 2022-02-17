import React from 'react'

export default { title: 'To be sorted/Forms/Label' }
// TODO: implement large checkbox?
export const Label_and_Checkbox = () => (
  <div className='m-s'>
    <div class='great-checkbox'>
      <input type='checkbox' id='checkbox' />
      <label htmlFor='checkbox'>Label text</label>
    </div>
    <p></p>
    <div class='great-checkbox great-checkbox--large bg-black'>
      <input type='checkbox' id='checkbox_large' />
      <label htmlFor='checkbox_large'>Label text</label>
    </div>
  </div>
)

export const Django_Checkbox = () => (
  <div className='m-s'>
    <div className='multiple-choice'>
      <input
        type='checkbox'
        name='terms_agreed'
        className='form-control'
        id='id_terms_agreed'
      />

      <label htmlFor='id_terms_agreed' id='id_terms_agreed-label'>
        <span className='form-label'>
          Tick this box to accept the{' '}
          <a href='/terms-and-conditions/' target='_blank'>
            terms and conditions
          </a>{' '}
          of the great.gov.uk service.
        </span>
      </label>
    </div>
  </div>
)
