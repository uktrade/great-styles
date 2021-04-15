import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import useComponentVisibleHook from '../../hooks/useComponentVisible'

export const Modal = ({ title, content, className, isOpen, faIcon }) => {
  // Init useComponentVisible hook
  const componentVisible = useComponentVisibleHook
  const { ref, isComponentVisible, setIsComponentVisible } = componentVisible(
    isOpen
  )

  const onHandleOpen = () => {
    setIsComponentVisible(true)
  }

  const onHandleClose = () => {
    setIsComponentVisible(false)
  }

  const onKeyClose = (key) => {
    if (key === 'Enter') {
      onHandleClose()
    }
  }

  return (
    <div className={`tooltip ${className}`}>
      <div title="Click to view modal moment" className="tooltip__icon">
        <button
          className="button button--small button--only-icon button--tertiary"
          onClick={onHandleOpen}
          type="button"
        >
          <i className={`fas ${faIcon}`} />
        </button>
      </div>
      {isComponentVisible && (
        <div
          ref={ref}
          className={`tooltip__text bg-white radius radius--small`}
        >
          <span
            className="tooltip__close"
            title="Click or press Escape to close Educational moment"
            onClick={onHandleClose}
            onKeyUp={(e) => onKeyClose(e.key)}
            tabIndex="0"
          >
            <i className="fas fa-times text-blue-deep-80" />
          </span>
          {title && (
            <div className="tooltip__title h-xs p-t-0 p-b-0">{title}</div>
          )}
          <div className="tooltip__content text-blue-deep-80">
            {ReactHtmlParser(content)}
          </div>
        </div>
      )}
    </div>
  )
}

Modal.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  faIcon: PropTypes.string,
  isOpen: PropTypes.bool,
  position: PropTypes.string,
  title: PropTypes.string,
}

Modal.defaultProps = {
  className: '',
  faIcon: 'fa-book',
  isOpen: true,
  position: 'left',
  title: 'Helpful hint',
}
