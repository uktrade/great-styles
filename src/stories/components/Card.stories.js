import React from 'react'

export default {
  title: 'Components/Card',
}

// FIXME: why have both .g-card and .card styles?

// TODO: Implement story wrapper for background
// FIXME: is this used?
export const Card_image_below = () => (
  <div className='bg-blue-deep-10 p-m'>
    <div className='card'>
      <div className='card__section'>
        <p className='body-l-b'>Title</p>
        <p className='h-m'>Title 36/40</p>
        <p className='body-l'>Lorem ipsum dolor sit amet</p>
        <div className='card__cta'>
          <button className='button button--full-width button--secondary button--small'>
            button label
          </button>
        </div>
        <div className='card__image'>
          <img src='https://dummyimage.com/150x150/4b426d/fff' alt='' />
        </div>
      </div>
    </div>
  </div>
)

// FIXME: is this meant to only ever be used with illustrations, i.e. with
//  white space to the left?
export const Card_Horizontal = () => (
  <div className='bg-blue-deep-10 p-m'>
    <div className='card card--horizontal'>
      <div className='card__section'>
        <p className='body-l-b'>Title</p>
        <p className='h-m'>Title 36/40</p>
        <p className='body-l p-b-xs'>Lorem ipsum dolor sit amet</p>
        <p className='text-blue-deep-80 m-t-0 p-t-0 m-b-xs'>
          <i className='fas fa-clock m-r-xxs' />
          <strong> 12 min read</strong>
        </p>
        <div className='card__cta'>
          <button className='button button--secondary button--small'>button label</button>
        </div>
      </div>
      <div className='card__section card__section--image'>
        <div className='card__image'>
          <img src='https://dummyimage.com/300x150/4b426d/fff' alt='' />
        </div>
      </div>
    </div>
  </div>
)

// FIXME: Is this used? Is the image meant to be rounded at the bottom?
export const Card_Full_Width_Image = () => (
  <div className='bg-blue-deep-10 p-m'>
    <div className='card card--full-width-image'>
      <div className='card__section'>
        <p className='body-l-b'>Title</p>
        <p className='h-m p-b-xs'>Title 36/40</p>
        <p className='body-l'>Lorem ipsum dolor sit amet</p>
        <div className='card__cta'>
          <button className='button button--secondary button--small'>button label</button>
        </div>
      </div>
      <div className='card__image'>
        <img src='https://dummyimage.com/575x180/e0e0e0/fff' alt='' />
      </div>
    </div>
  </div>
)

export const Dashboard = () => (
  <div className='bg-blue-deep-10 p-m'>
    <div className='grid'>
      <div className='c-1-2 m-b-s'>
        <section className='g-card'>
          <div className='g-card-header'>
            <h3 className='h-m'>Your Learning progress</h3>
          </div>
          <p className='m-b-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </section>
      </div>
      <div className='c-1-2 m-b-s'>
        <section className='g-card'>
          <h3 className='h-m'>Card without header</h3>
          <p className='m-b-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </section>
      </div>
    </div>
  </div>
)
