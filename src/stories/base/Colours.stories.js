import React from 'react'

export default { title: 'Base/Colours' }

const colors = [
  'black-100',
  'black-90',
  'black-80',
  'black-70',
  'black-60',
  'black-50',
  'black-40',
  'black-30',
  'black-20',
  'black-10',
  'blue-deep-100',
  'blue-deep-90',
  'blue-deep-80',
  'blue-deep-70',
  'blue-deep-60',
  'blue-deep-50',
  'blue-deep-40',
  'blue-deep-30',
  'blue-deep-20',
  'blue-deep-10',
  'aqua-100',
  'aqua-20',
  'red-100',
  'red-90',
  'red-80',
  'red-70',
  'red-60',
  'red-50',
  'red-40',
  'red-30',
  'red-20',
  'red-10',
  'green-100',
  'green-30',
  'light-grey',
  'grey',
  'white',
]

export const Colours = () => (
  <>
    <h1 className='h-l'>Colours</h1>

    {colors.map((color) => (
      <div className='m-v-xxs' key={color} style={{ display: 'flex', alignItems: 'center' }}>
        <div
          className={`m-r-xs bg-${color}`}
          style={{
            width: '7.5em',
            height: '1.5em',
            border: color === 'white' ? '1px solid #8e969c' : '',
          }}
        >&nbsp;</div>
        <div className='body-m-b' style={{ textTransform: 'capitalize' }}>
          {color.replaceAll('-', ' ')}
        </div>
      </div>
    ))}
  </>
)

