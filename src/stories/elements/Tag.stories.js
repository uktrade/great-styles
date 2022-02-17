import React from 'react'

export default {
  title: 'Elements/Tag',
}

const tags = [
  { label: 'Primary', classes: 'tag' },
  { label: 'Secondary', classes: 'tag tag--secondary' },
  { label: 'Tertiary', classes: 'tag tag--tertiary' },
]

const renderTags = (extra_classes = '') => {
  const icon = extra_classes.includes('--icon')

  return (
    <div>
      {tags.map(tag => (
          <div className='m-b-s'>
            <button className={`${tag.classes} ${extra_classes}`}>
              {tag.label}
              {icon && <i className='fas fa-plus' />}
            </button>
          </div>
        ),
      )}
    </div>
  )
}

export const tag_medium = () => {
  return renderTags()
}

export const tag_medium_with_icon = () => {
  return renderTags('tag--icon')
}

export const tag_small = () => {
  return renderTags('tag--small')
}

export const tag_small_with_icon = () => {
  return renderTags('tag--icon tag--small')
}
