import React from 'react'

export default { title: 'To be sorted/Forms/Radio' }
// TODO: implement small/large control
const renderRadio = (idx, value, label, checked, classes) => {
  return (
    <div key={`option-${value}`} className={`multiple-choice ${classes}`}>
      <input
        id={idx}
        type='radio'
        className='radio'
        name='button-set'
        value={value}
        checked={checked}
      />
      <label htmlFor={idx} className='body-l'>
        {label}
      </label>
    </div>
  )
}

export const radio_set_small = () => (<>
  {renderRadio(1, 'b1', 'Radio 1', true)}
  {renderRadio(2, 'b2', 'Radio 2', false)}
</>)

export const radio_set_large = () => (<>
  {renderRadio(1, 'b1', 'Radio 1', true, 'large')}
  {renderRadio(2, 'b2', 'Radio 2', false, 'large')}
</>)

