import React from 'react'
import { select, text } from '@storybook/addon-knobs'

export default { title: 'Elements/Button' }

const buttons = [
  { label: 'Primary', classes: 'button' },
  { label: 'Secondary', classes: 'button button--secondary' },
  { label: 'Tertiary', classes: 'button button--tertiary' },
  { label: 'Quaternary', classes: 'button button--quaternary' },
]

const renderButtons = (extra_classes = '', isDisabled = false) => {
  const icon = extra_classes.includes('-icon') ? select('Button icon', ['plus', 'plus-square', 'download', 'arrow-right', 'arrow-left', 'chevron-down', 'chevron-up'], 'plus') : null
  const isLoading = extra_classes.includes('button--loading')
  const isIconOnly = isLoading || extra_classes.includes('--only-icon')

  return (
    <>
      {buttons.map(button => (
        <div className='m-b-s'>
          <button className={`${button.classes} ${extra_classes}`} disabled={isDisabled}>
            {isLoading &&
            <div className='button--loading__spinner'>Loading...</div>}
            {icon && <i className={`fas fa-${icon}`} />}
            {!isIconOnly && <span>{text('Button text', '') || button.label}</span>}
          </button>
        </div>
      ))}
    </>
  )
}

export const button_large = () =>
  renderButtons('button--large')

export const button_medium = () =>
  renderButtons()

export const button_small = () =>
  renderButtons('button--small')

export const button_large_icon = () =>
  renderButtons('button--large button--icon')

export const button_medium_icon = () =>
  renderButtons('button--icon')

export const button_small_icon = () =>
  renderButtons('button--small button--icon')

export const button_disabled = () =>
  renderButtons('', true)

export const button_loading = () =>
  renderButtons('button--loading')

export const button_large_only_icon = () =>
  renderButtons('button--large button--only-icon')

export const button_medium_only_icon = () =>
  renderButtons('button--only-icon')

export const button_small_only_icon = () =>
  renderButtons('button--small button--only-icon')

export const button_full_width = () =>
  renderButtons('button--full-width')

export const button_auto_width = () =>
  renderButtons('button--auto-width')

export const button_tiny_toggle = () => (
  <button className='button button--tiny-toggle' type='button'>
    <i className='fa fa-chevron-circle-down' />
  </button>
)
