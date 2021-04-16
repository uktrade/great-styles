import React from 'react'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import { Modal } from './modal/Modal'

import modalImage from '../images/modal-3.png'

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

// const CustomButton = () => {
//   return (
//     <button className="button button--small button--secondary" type="button">
//       Open custom
//     </button>
//   )
// }

export const Modal_1 = () => {
  return (
    <div className="bg-blue-deep-60 p-xs">
      <Modal {...Modal_1.args}>
        <p>Child content</p>
      </Modal>
    </div>
  )
}
Modal_1.args = {
  // title: 'Modal title',
  body: `<p>Some content here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error distinctio laboriosam quae at quibusdam animi odit, deleniti nostrum iusto adipisci tenetur id rem eos, quos voluptatum accusantium beatae magni!</p>`,
  // image: {
  //   src: modalImage,
  //   alt: 'Alt text',
  //   bgClass: 'bg-blue-deep-80',
  // },
  primaryButtonClick: true,
  secondaryButtonClick: true,
  closeClick: true,
  progressPercentage: 20,
}
