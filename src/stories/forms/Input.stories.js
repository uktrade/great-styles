import React from 'react'

export default { title: 'Forms/Input' }

export const Input = () => (
  <div className='form-group'>
    <label className='form-label' htmlFor='input-id'>Your full name</label>
    <input className='form-control' id='input-id' type='text' name='full-name' />
  </div>
)
