import React from 'react'

export default { title: 'To be sorted/Forms/Textarea' }
// TODO: Implement error states and help text
export const Textarea = () => (
  <div className='m-s'>
    <div className='form-group'>
      <label className='form-label' htmlFor='textarea'>
        Why can't you provide a National Insurance number?
      </label>
      <textarea className='form-control' name='textarea' id='textarea' rows='5' />
    </div>
    <hr className='hr hr--dark' />
    <div className='form-group'>
      <label className='form-label' htmlFor='textarea'>
        Why can't you provide a National Insurance number?
      </label>
      <div className='text-blue-deep-80 p-t-xs p-b-xxs'>Intro text</div>
      <dl className='form-group-example bg-blue-deep-10 p-xs m-b-xs'>
        <dt className='body-l-b'>Example</dt>
        <dd className='m-t-xxs body-l'>Example text</dd>
      </dl>
      <textarea className='form-control' name='textarea' id='textarea' rows='5' />
    </div>
    <hr className='hr hr--dark' />
    <div className='form-group'>
      <label className='form-label' htmlFor='textarea'>
        Why can't you provide a National Insurance number?
      </label>
      <div className='text-blue-deep-80 p-t-xs p-b-xxs'>Intro text</div>
      <textarea className='form-control' name='textarea' id='textarea' rows='5' />
    </div>
    <hr className='hr hr--dark' />
    <div className='form-group'>
      <label className='form-label' htmlFor='textarea'>
        Why can't you provide a National Insurance number?
      </label>
      <dl className='form-group-example bg-blue-deep-10 p-xs m-b-xs'>
        <dt className='body-l-b'>Example</dt>
        <dd className='m-t-xxs body-l'>Example text</dd>
      </dl>
      <textarea className='form-control' name='textarea' id='textarea' rows='5' />
    </div>
  </div>
)

export const Textarea_error = () => (
  <div className='m-s'>
    <div className='form-group form-group-error'>
      <label className='form-label' htmlFor='textarea'>
        Why can't you provide a National Insurance number?
      </label>
      <div className='text-blue-deep-80 p-t-xs p-b-xxs'>Intro text</div>
      <dl className='form-group-example bg-blue-deep-10 p-xs m-b-xs'>
        <dt className='body-l-b'>Example</dt>
        <dd className='m-t-xxs body-l'>Example text</dd>
      </dl>
      <span className='error-message'>Error message goes here</span>
      <textarea className='form-control' name='textarea' id='textarea' rows='5' />
    </div>
  </div>
)

export const Textarea_with_placeholder = () => (
  <div className='m-s'>
    <div className='form-group'>
      <label className='form-label' htmlFor='textarea'>
        Why can't you provide a National Insurance number?
      </label>
      <div className='text-blue-deep-80 p-t-xs p-b-xxs'>Intro text</div>
      <dl className='form-group-example bg-blue-deep-10 p-xs m-b-xs'>
        <dt className='body-l-b'>Example</dt>
        <dd className='m-t-xxs body-l'>Example text</dd>
      </dl>
      <textarea
        className='form-control'
        name='textarea'
        id='textarea'
        rows='5'
        placeholder='Enter description'
      />
    </div>
  </div>
)

export const Textarea_disabled = () => (
  <div className='m-s'>
    <div className='form-group'>
      <label className='form-label' htmlFor='textarea'>
        Why can't you provide a National Insurance number?
      </label>
      <div className='text-blue-deep-80 p-t-xs p-b-xxs'>Intro text</div>
      <dl className='form-group-example bg-blue-deep-10 p-xs m-b-xs'>
        <dt className='body-l-b'>Example</dt>
        <dd className='m-t-xxs body-l'>Example text</dd>
      </dl>
      <textarea
        className='form-control'
        name='textarea'
        id='textarea'
        rows='5'
        disabled
      />
    </div>
  </div>
)
