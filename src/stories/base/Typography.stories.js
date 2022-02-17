import React from 'react'

export default { title: 'Base/Typography' }

export const Typography = () => (
  <>
    <h1 className='h-xl'>Typography</h1>

    <div className='bg-blue-deep-10 p-s'>
      <h1 className='h-xl'>Extra large heading</h1>
      <h2 className='h-l'>Large heading</h2>
      <h3 className='h-m'>Medium heading</h3>
      <h4 className='h-s'>Small heading</h4>
      <h5 className='h-xs'>Extra small heading</h5>

      <hr className='hr--dark' />

      <p className='body-l'>Large body text</p>
      <p className='body-m'>Medium body text</p>
      <p className='body-s'>Small body text</p>
      <p className='body-l-b'>Large bold body text</p>
      <p className='body-m-b'>Medium bold body text</p>
      <p className='body-s-b'>Small bold body text</p>

      <hr className='hr--dark' />

      <p className='quote-text'>Quote text</p>

      <hr className='hr--dark' />

      <p className='body-l'>Lorem ipsum <span className='italic'>dolor sit amet</span>, consectetur <span
        className='bold'>adipisicing elit</span>. Adipisci <span
        className='uppercase'>alias aspernatur atque debitis</span> eaque error incidunt itaque mollitia, <span
        className='italic bold uppercase'>nostrum perferendis quia</span>, quos repudiandae ullam!</p>
    </div>
  </>
)
