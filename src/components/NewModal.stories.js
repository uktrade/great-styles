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

// const CustomButton = () => {
//   return (
//     <button className="button button--small button--secondary" type="button">
//       Open custom
//     </button>
//   )
// }

export const Modal_1 = () => {
  return (
    <Modal {...Modal_1.props}>
      <p>Child content</p>
    </Modal>
  )
}
Modal_1.props = {
  title: 'Modal title',
  body: `<p>Some content here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error distinctio laboriosam quae at quibusdam animi odit, deleniti nostrum iusto adipisci tenetur id rem eos, quos voluptatum accusantium beatae magni!</p>`,
  image: {
    src: modalImage,
    alt: 'Alt text',
    bgClass: 'bg-blue-deep-80',
  },
  primaryButtonClick: () => console.log('Primary clicked'),
  primaryButtonLabel: 'Done',
  secondaryButtonClick: () => console.log('Secondary clicked'),
  secondaryButtonLabel: 'Cancel',
  closeClick: () => console.log('Close clicked'),
  progressPercentage: 50,
  // modalSize: 'small',
}
