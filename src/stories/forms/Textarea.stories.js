import React from 'react'

export default { title: 'Forms/Textarea' }

export const Textarea = () => (
  <div className='form-group'>
    <label className='form-label' htmlFor='textarea-id'>About your company</label>
    <textarea className='form-control' id='textarea-id' name='about-company' />
  </div>
)

export const TextareaWithError = () => (
  <div className='form-group form-group-error'>
    <label className='form-label' htmlFor='textarea-id'>About your company</label>
    <span className='error-message'>Tell us about your company</span>
    <textarea className='form-control' id='textarea-id' name='about-company' />
  </div>
)
