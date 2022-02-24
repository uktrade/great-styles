import React from 'react'

export default { title: 'Forms/Input' }

export const Input = () => (
  <div className='form-group'>
    <label className='form-label' htmlFor='input-id'>Your full name</label>
    <input className='form-control' id='input-id' type='text' name='full-name' />
  </div>
)

export const InputWithError = () => (
  <div className='form-group form-group-error'>
    <label className='form-label' htmlFor='input-id'>Your full name</label>
    <span className='error-message'>Enter your full name</span>
    <input className='form-control' id='input-id' type='text' name='full-name' />
  </div>
)
