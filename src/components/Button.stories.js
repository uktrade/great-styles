import React from 'react'
import { select, text } from '@storybook/addon-knobs'

export default { title: 'Actions/Button' }

const renderButtons = (buttons, isDisabled = false, isIconOnly = false) => {
  const label = text('Button text', '')
  const icon = buttons.some(b => b.includes('-icon')) ? select('Button icon', ['plus', 'download', 'arrow-right', 'arrow-left'], 'plus') : null
  return (
    <div>
      {buttons.map((classes) => {
        return (
          <div className="m-b-s">
            <button className={classes} disabled={isDisabled}>
              {classes.split().map((c) => {
                if (c.includes('loading')) {
                  return <div class="button--loading__spinner">Loading...</div>
                } else if (icon) {
                  return (
                    <>
                      <i className={`fas fa-${icon}`} />
                      {!isIconOnly && <span>{label || `.${c}`}</span>}
                    </>
                  )
                } else {
                  return label || `.${c}`
                }
              })}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export const button_large = () =>
  renderButtons([
    'button button--large',
    'button button--large button--secondary',
    'button button--large button--tertiary',
    'button button--large button--quaternary',
  ])

export const button_medium = () =>
  renderButtons([
    'button',
    'button button--secondary',
    'button button--tertiary',
    'button button--quaternary',
  ])

export const button_small = () =>
  renderButtons([
    'button button--small',
    'button button--small button--secondary',
    'button button--small button--tertiary',
    'button button--small button--quaternary',
  ])

export const button_large_icon = () =>
  renderButtons([
    'button button--large button--icon',
    'button button--large button--secondary button--icon',
    'button button--large button--tertiary button--icon',
    'button button--large button--quaternary button--icon',
  ])

export const button_medium_icon = () =>
  renderButtons([
    'button button--icon',
    'button button--secondary button--icon',
    'button button--tertiary button--icon',
    'button button--quaternary button--icon',
  ])

export const button_small_icon = () =>
  renderButtons([
    'button button--small button--icon',
    'button button--small button--secondary button--icon',
    'button button--small button--tertiary button--icon',
    'button button--small button--quaternary button--icon',
  ])

export const button_disabled = () =>
  renderButtons(
    [
      'button',
      'button button--secondary',
      'button button--tertiary',
      'button button--quaternary',
    ],
    true
  )

export const button_loading = () =>
  renderButtons([
    'button button--small button--loading',
    'button button--small button--loading button--secondary',
    'button button--small button--loading button--tertiary',
    'button button--small button--loading button--quaternary',
    'button button--loading',
    'button button--loading button--secondary',
    'button button--loading button--tertiary',
    'button button--loading button--quaternary',
    'button button--large button--loading',
    'button button--large button--loading button--secondary',
    'button button--large button--loading button--tertiary',
    'button button--large button--loading button--quaternary',
  ])

export const button_small_only_icon = () =>
  renderButtons(
    [
      'button button--small button--only-icon',
      'button button--small button--only-icon button--secondary',
      'button button--small button--only-icon button--tertiary',
      'button button--small button--only-icon button--quaternary',
      'button button--small button--only-icon button--loading',
      'button button--small button--only-icon button--loading button--secondary',
      'button button--small button--only-icon button--loading button--tertiary',
      'button button--small button--only-icon button--loading button--quaternary',
    ],
    false,
    true
  )

export const button_medium_only_icon = () =>
  renderButtons(
    [
      'button button--only-icon',
      'button button--only-icon button--secondary',
      'button button--only-icon button--tertiary',
      'button button--only-icon button--quaternary',
      'button button--only-icon button--loading',
      'button button--only-icon button--loading button--secondary',
      'button button--only-icon button--loading button--tertiary',
      'button button--only-icon button--loading button--quaternary',
    ],
    false,
    true
  )

export const button_large_only_icon = () =>
  renderButtons(
    [
      'button button--large button--only-icon',
      'button button--large button--only-icon button--secondary',
      'button button--large button--only-icon button--tertiary',
      'button button--large button--only-icon button--quaternary',
      'button button--large button--only-icon button--loading',
      'button button--large button--only-icon button--loading button--secondary',
      'button button--large button--only-icon button--loading button--tertiary',
      'button button--large button--only-icon button--loading button--quaternary',
    ],
    false,
    true
  )

export const button_full_width = () =>
  renderButtons([
    'button button--full-width',
    'button button--full-width button--secondary',
    'button button--full-width button--tertiary',
    'button button--full-width button--quaternary',
  ])

export const button_auto_width = () =>
  renderButtons([
    'button button--auto-width',
    'button button--auto-width button--secondary',
    'button button--auto-width button--tertiary',
    'button button--auto-width button--quaternary',
  ])

export const button_tiny_toggle = () => (
  <button className="button button--tiny-toggle" type="button">
    <i className="fa fa-chevron-circle-down" />
  </button>
)
