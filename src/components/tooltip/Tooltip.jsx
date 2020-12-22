/* eslint-disable jsx-a11y/anchor-is-valid */
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
}) => {
  // Init useComponentVisible hook
  const componentVisible = useComponentVisibleHook
  const { ref, isComponentVisible, setIsComponentVisible } = componentVisible(
    isVisible
  )
  const [tooltipPosition, setTooltipPosition] = useState(null)
  // Find mobile breakpoint width from CSS var
  const mobileBreakpoint =
    Number(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--breakpoint-mobile')
        .replace('px', '')
    ) || 640

  // Apply negative margin to the left of the element
  const updatePositionOffset = (el) => {
    let { left, right } = el.current.getClientRects()[0]

    if (el.current.classList.contains('tooltip__text--left')) {
      setTooltipPosition({
        marginLeft:
          window.innerWidth <= mobileBreakpoint
            ? `calc(-${left}px + var(--ttpadding))`
            : null,
      })
    } else {
      setTooltipPosition({
        marginLeft:
          window.innerWidth <= mobileBreakpoint
            ? `calc(-${right}px + var(--ttpadding))`
            : null,
      })
    }
  }

  const onClickOpen = () => {
    setIsComponentVisible(true)
    // Provide time for element to render in DOM
    if (window.innerWidth <= mobileBreakpoint) {
      setTimeout(() => {
        updatePositionOffset(ref)
      }, 50)
    }
  }

  const onClickClose = () => {
    setIsComponentVisible(false)
    updatePositionOffset(ref)
  }

  useEffect(() => {
    if (isComponentVisible) {
      updatePositionOffset(ref)
      window.addEventListener('resize', updatePositionOffset(ref))
      return () => {
        window.removeEventListener('resize', updatePositionOffset(ref))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth])

  // Logic for left or right aligned. Default left.
  const ttPosition = position === 'right' ? 'right' : 'left'

  return (
    <div className={`tooltip ${className}`}>
      <div title="Click to view Educational moment" className="tooltip__icon">
        <a
          className="button button--small button--only-icon button--tertiary"
          onClick={() => onClickOpen()}
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
              onClick={() => onClickClose()}
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
