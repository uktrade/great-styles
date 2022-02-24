import React from 'react'

export default { title: 'Base/Grid' }

const lorems = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis distinctio et ex illum ipsa minima non nostrum officia perferendis quam ratione, repellat similique vel velit. Amet ea eligendi exercitationem, impedit iure maiores, nesciunt odit omnis quae quo repudiandae sapiente.'.split(' ')

let currentIndex = 0

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const nextLorem = (length = 3) => {
  currentIndex += length
  if (currentIndex >= lorems.length) {
    currentIndex = length
  }
  return capitalizeFirstLetter(lorems.slice(currentIndex - length, currentIndex)
    .join(' ')
    .replace(/(,|\.)?$/, '.'))
}

export const Grid = () => {
  currentIndex = 0

  return (
    <>
      <h1 className='h-l'>Grid</h1>

      <div className='grid'>
        <div className='c-1-2 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem(10)}</div>
        </div>
        <div className='c-1-2 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
      </div>

      <div className='grid'>
        <div className='c-1-3 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-3 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-3 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
      </div>

      <div className='grid'>
        <div className='c-1-4 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-4 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-4 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-4 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
      </div>
    </>
  )
}
export const Flex_Grid = () => {
  currentIndex = 0

  return (
    <>
      <h2 className='h-l'>Flex grid</h2>

      <div className='flex-grid'>
        <div className='c-1-2 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem(10)}</div>
        </div>
        <div className='c-1-2 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
      </div>

      <div className='flex-grid'>
        <div className='c-1-3 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-3 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-3 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
      </div>

      <div className='flex-grid'>
        <div className='c-1-4 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-4 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-4 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
        <div className='c-1-4 m-t-xs'>
          <div className='bg-blue-deep-10 p-s'>{nextLorem()}</div>
        </div>
      </div>
    </>
  )
}
