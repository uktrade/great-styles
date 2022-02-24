import React from 'react'

export default { title: 'Elements/Lists' }

export const Unordered = () => (
  <div className='body-l'>
    <ul className='list-bullet'>
      <li>list item 1</li>
      <li>list item 2</li>
      <li>list item 3</li>
    </ul>
    <ul className='list-dot'>
      <li>list item 1</li>
      <li>list item 2</li>
      <li>list item 3</li>
    </ul>
  </div>
)

export const Ordered = () => (
  <div className='body-l'>
    <ol className='list-number'>
      <li>list item 1</li>
      <li>list item 2</li>
      <li>list item 3</li>
    </ol>
  </div>
)

export const OrderedLargeNumbers = () => (
  <div className='bg-blue-deep-80 m-s p-m'>
    <ol className='list-circle-number'>
      <li>
        <span>
          Which ways of funding which might be right for your company’s stage of growth
          and long term strategy?
        </span>
      </li>
      <li>
        <span>
          How prepared are you to work to gain funding, for example by proving credit
          worthiness or pitching for investments?
        </span>
      </li>
    </ol>
  </div>
)
