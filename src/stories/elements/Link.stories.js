import React from 'react'

export default { title: 'Elements/Link' }

export const Link = () => (
  <div className='m-s'>
    <a href='#' className='link'>
      .link
    </a>
  </div>
)

export const Link_underline = () => (
  <div className='m-s'>
    <a href='#' className='link link--underline'>
      .link .link--underline
    </a>
  </div>
)

export const Link_icon = () => (
  <div className='m-s'>
    <button className='link link--icon'>
      <i className='fas fa-caret-right m-r-xs'></i> <span>.link link--icon</span>
    </button>
  </div>
)

export const Link_large_icon_right = () => (
  <div className='m-s'>
    <a href='#' className='link link--large link--icon-right'>
      <span>link link--large link--icon-right</span>
      <i class='fas fa-arrow-right'></i>
    </a>
  </div>
)

export const Links_as_button = () => (
  <div className='m-s'>
    <a href='#' className='button button--secondary button--icon button--icon-left'>
      <i className='fab fa-linkedin' />
      <span>.button .button--secondary .button--icon .button--icon-left</span>
    </a>
  </div>
)
