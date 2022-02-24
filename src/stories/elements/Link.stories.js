import React from 'react'

export default { title: 'Elements/Link' }

export const Link = () => (
  <a href='#' className='link'>
    .link
  </a>
)

export const Link_underline = () => (
  <a href='#' className='link link--underline'>
    .link .link--underline
  </a>
)

export const Link_icon = () => (
  <button className='link link--icon'>
    <i className='fas fa-caret-right m-r-xs'></i> <span>.link link--icon</span>
  </button>
)

export const Link_large_icon_right = () => (
  <a href='#' className='link link--large link--icon-right'>
    <span>link link--large link--icon-right</span>
    <i class='fas fa-arrow-right'></i>
  </a>
)

export const Links_as_button = () => (
  <a href='#' className='button button--secondary button--icon button--icon-left'>
    <i className='fab fa-linkedin' />
    <span>.button .button--secondary .button--icon .button--icon-left</span>
  </a>
)
