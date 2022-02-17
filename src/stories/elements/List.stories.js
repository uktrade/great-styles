import React from 'react'

export default { title: 'Elements/Lists' }

export const Unordered = () => (
  <div className='m-s'>
    <ul className='list-dot text-blue-deep-80'>
      <li>list item 1</li>
      <li>list item 2</li>
      <li>list item 3</li>
    </ul>
  </div>
)
export const Ordered = () => (
  <div className='m-s'>
    <ol className='list-circle-number bg-blue-deep-80'>
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
