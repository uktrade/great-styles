import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import useComponentVisibleHook from '../../hooks/useComponentVisible'

export const Tooltip = ({
  title,
  content,
  position,
  className,
  isVisible,
  faIcon,
  showTitle,
}) => {
  // Init useComponentVisible hook
  const componentVisible = useComponentVisibleHook
  const { ref, isComponentVisible, setIsComponentVisible } = componentVisible(
    isVisible
  )
  const [tooltipPosition, setTooltipPosition] = useState(null)
  const [mount, setMount] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  // Find mobile breakpoint width from CSS var
  const mobileBreakpoint =
    Number(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--breakpoint-mobile')
        .replace('px', '')
    ) || 640

  // Apply negative margin to the left of the element
  const updatePositionOffset = (el) => {
    let { left } = el.current.getClientRects()[0]
    setTooltipPosition({
      marginLeft:
        window.innerWidth <= mobileBreakpoint
          ? `calc(-${left}px + var(--ttpadding))`
          : null,
    })
  }

  const onClickOpen = () => {
    setIsComponentVisible(true)
    setTooltipOpen(true)

    if (window.innerWidth <= mobileBreakpoint && !tooltipOpen) {
      // Provide time for element to render in DOM
      setTimeout(() => {
        updatePositionOffset(ref)
      }, 50)
    }
  }

  const onClickClose = () => {
    setIsComponentVisible(false)
    updatePositionOffset(ref)
    setTooltipOpen(false)
  }

  const onKeyClose = (key) => {
    if (key === 'Enter') {
      onClickClose()
    }
  }

  useEffect(
    () => {
      if (isComponentVisible && !mount) {
        updatePositionOffset(ref)
        setMount(true)
        window.addEventListener('resize', updatePositionOffset(ref))
        return () => {
          window.removeEventListener('resize', updatePositionOffset(ref))
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isComponentVisible, ref, mount]
  )

  // Logic for left or right aligned. Default left.
  const ttPosition = position === 'right' ? 'right' : 'left'

  return (
    <div className={`tooltip ${className}`}>
      <div title="Click to view Educational moment" className="tooltip__icon">
        <button
          className="button button--small button--only-icon button--tertiary"
          onClick={onClickOpen}
          type="button"
          aria-haspopup="dialog"
        >
          <i className={`fas ${faIcon}`} />
          <span className="visually-hidden">{title}</span>
        </button>
      </div>
      {isComponentVisible && (
        <div
          ref={ref}
          className={`tooltip__text tooltip__text--${ttPosition} bg-white radius`}
          style={tooltipPosition}
          role="dialog"
          aria-labelledby="tooltip-title"
        >
          <button
            className="tooltip__close"
            title="Click or press Escape to close Educational moment"
            onClick={onClickClose}
            onKeyUp={(e) => onKeyClose(e.key)}
            tabIndex="0"
          >
            <i className="fas fa-times text-blue-deep-80" />
            <span className="visually-hidden">Click or press Escape to close Educational moment</span>
          </button>
          {<h2 id="tooltip-title" className={`tooltip__title h-xs p-t-0 p-b-0 ${showTitle ? '' : 'visually-hidden'}`}>{title}</h2>}
          <div className="tooltip__content text-blue-deep-80">
            {ReactHtmlParser(content)}
          </div>
        </div>
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
  showTitle: PropTypes.bool,
}

Tooltip.defaultProps = {
  className: '',
  faIcon: 'fa-book',
  isVisible: false,
  position: 'left',
  title: 'Helpful hint',
  showTitle: true,
}
