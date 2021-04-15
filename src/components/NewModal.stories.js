import React from 'react'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import { Modal } from './modal/Modal'

export default {
  title: 'Modals',
  parameters: {
    component: Modal,
    decorators: [withKnobs],
  },
}

export const Modal_1 = () => {
  return (
    <div className="bg-blue-deep-60 p-xs">
      <Modal {...Modal_1.args} />
    </div>
  )
}
Modal_1.args = {}
