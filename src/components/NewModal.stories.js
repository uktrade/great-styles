import React from 'react'
import {
  withKnobs,
  boolean,
  select,
  text,
  number,
  object,
} from '@storybook/addon-knobs'
import { Learn_linking } from './Card-learn-linking.stories'
import { Quote } from './Quote.stories'
import { Modal } from './modal/Modal'

import modalImage from '../images/modal-3.png'

export default {
  title: 'Modals',
  parameters: {
    component: Modal,
    decorators: [withKnobs],
  },
}

export const Modal_with_body = () => {
  return (
    <Modal
      {...Modal_with_body.props}
      modalSize={select(
        'Modal size',
        { small: 'small', medium: 'medium', large: 'large' },
        'medium'
      )}
      progressPercentage={number('Progress percentage', null)}
      title={text('Modal title', 'Modal title')}
      closeClick={boolean('Modal close', true)}
      primaryButtonClick={boolean('Primary button enable', true)}
      primaryButtonLabel={text('Primary button label', 'Done')}
      primaryButtonDisable={boolean('Primary button disabled', false)}
      secondaryButtonClick={boolean('Secondary button enable', true)}
      secondaryButtonLabel={text('Secondary button label', 'Cancel')}
      secondaryButtonDisable={boolean('Secondary button disabled', false)}
      image={object('Modal image', {
        src: modalImage,
        alt: 'Two people carrying a massive pencil',
        bgClass: 'bg-blue-deep-80',
      })}
    />
  )
}
Modal_with_body.props = {
  body: `
    <p>Some content here Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veritatis numquam nobis suscipit doloremque sit cupiditate fugiat:</p>
    <ul>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </ul>
  `,
  //   primaryButtonClick: () => console.log('Primary clicked'),
  //   secondaryButtonClick: () => console.log('Secondary clicked'),
  //   closeClick: () => console.log('Close clicked'),
}

export const Modal_with_children = () => {
  return (
    <Modal
      modalSize={select(
        'Modal size',
        { small: 'small', medium: 'medium', large: 'large' },
        'medium'
      )}
      progressPercentage={number('Progress percentage', null)}
      title={text('Modal title', '')}
      closeClick={boolean('Modal close', true)}
      primaryButtonClick={boolean('Primary button enable', true)}
      primaryButtonLabel={text('Primary button label', 'Done')}
      primaryButtonDisable={boolean('Primary button disabled', false)}
      secondaryButtonClick={boolean('Secondary button enable', false)}
      secondaryButtonLabel={text('Secondary button label', 'Cancel')}
      secondaryButtonDisable={boolean('Secondary button disabled', false)}
    >
      <>
        <Learn_linking />
        <Quote />
      </>
    </Modal>
  )
}
