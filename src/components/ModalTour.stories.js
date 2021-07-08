import React, { useState, useEffect } from 'react'
import {
  withKnobs,
  boolean,
  select,
  text,
  number,
  object,
} from '@storybook/addon-knobs'
import { ModalTour } from './modal/ModalTour'
import modalImage from '../images/modal-3.png'

export default {
  title: 'Modals/Modal Tour',
  parameters: {
    component: ModalTour,
    decorators: [withKnobs],
  },
}

const slides = [
  {
    id: 1,
    title: 'Modal slide 1',
    body: `
<p>Some content here Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veritatis numquam nobis suscipit doloremque sit cupiditate fugiat:</p>
<ul>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
`,
    image: {
      src: modalImage,
      alt: 'Two people carrying a massive pencil',
      bgClass: 'bg-blue-deep-80',
    },
  },
  {
    id: 2,
    title: 'Modal slide 2',
    body: `
<p>Some content here Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veritatis numquam nobis suscipit doloremque sit cupiditate fugiat:</p>
<ul>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
`,
    image: {
      src: modalImage,
      alt: 'Two people carrying a massive pencil',
      bgClass: 'bg-blue-deep-80',
    },
  },
  {
    id: 3,
    title: 'Modal slide 3',
    body: `
<p>Some content here Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veritatis numquam nobis suscipit doloremque sit cupiditate fugiat:</p>
<ul>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
`,
    image: {
      src: modalImage,
      alt: 'Two people carrying a massive pencil',
      bgClass: 'bg-blue-deep-80',
    },
  },
  {
    id: 4,
    title: 'Modal slide 4',
    body: `
<p>Some content here Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veritatis numquam nobis suscipit doloremque sit cupiditate fugiat:</p>
<ul>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
`,
    image: {
      src: modalImage,
      alt: 'Two people carrying a massive pencil',
      bgClass: 'bg-blue-deep-80',
    },
  },
]

export const ModalTour_1 = () => {
  return <ModalTour slides={slides} isModalOpen={true} />
}
