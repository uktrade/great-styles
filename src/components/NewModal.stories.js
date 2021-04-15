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

const containerStyle = {
  display: 'flex',
  width: '100vw',
  height: '100vh',
}

export const Modal_1 = () => {
  return (
    <div className="bg-blue-deep-60 p-xs" style={containerStyle}>
      <Modal {...Modal_1.args} />
    </div>
  )
}
Modal_1.args = {}
