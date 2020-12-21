import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import useComponentVisibleHook from '../../hooks/useComponentVisible'
import { set } from 'core-js/fn/dict'

export const Tooltip = ({
  title,
  content,
  position,
  className,
  isVisible,
  faIcon,
}) => {
  // Init useComponentVisible hook
  const componentVisible = useComponentVisibleHook
  const { ref, isComponentVisible, setIsComponentVisible } = componentVisible(
    isVisible
  )

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [tooltipPosition, setTooltipPosition] = useState({})

  const updateWidthAndHeight = () => {
    let { left } = ref.current.getClientRects()[0]
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
    setTooltipPosition({
      marginLeft: `calc(-${left}px + var(--ttpadding))`,
    })
  }

  useEffect(() => {
    if (isComponentVisible) {
      updateWidthAndHeight()
      window.addEventListener('resize', updateWidthAndHeight)
      return () => {
        window.removeEventListener('resize', updateWidthAndHeight)
      }
    }
  }, [])

  // Logic for left or right aligned. Default left.
  const ttPosition = position === 'right' ? 'right' : 'left'

  return (
    <div className={`tooltip ${className}`}>
      <div title="Click to view Educational moment" className="tooltip__icon">
        <a
          className="button button--small button--only-icon button--tertiary"
          onClick={() => setIsComponentVisible(true)}
          role="button"
          tabIndex="0"
        >
          <i className={`fas ${faIcon}`} />
        </a>
      </div>
      {isComponentVisible && (
        <>
          <div
            ref={ref}
            className={`tooltip__text tooltip__text--${ttPosition} bg-white radius radius--small`}
            style={tooltipPosition}
          >
            <span
              className="tooltip__close"
              title="Click or press Escape to close Educational moment"
              onClick={() => setIsComponentVisible(false)}
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
        </>
      )}
    </div>
  )
}

Tooltip.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  faIcon: PropTypes.string,
  isVisible: PropTypes.bool,
  position: PropTypes.string,
  title: PropTypes.string,
}

Tooltip.defaultProps = {
  className: '',
  faIcon: 'fa-book',
  isVisible: false,
  position: 'left',
  title: 'Helpful hint',
}
