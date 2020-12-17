import React from 'react'
import PropTypes from 'prop-types'
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

  // Logic for left or right aligned. Default left.
  const ttPosition = position === 'right' ? 'right' : 'left'

  return (
    <div className={`tooltip ${className}`}>
      <div
        title="Click to view Educational moment"
        className="tooltip__icon"
        onClick={() => setIsComponentVisible(true)}
      >
        <button
          className="button button--small button--only-icon button--tertiary"
          onClick={(e) => e.preventDefault}
        >
          <i className={`fas ${faIcon}`} />
        </button>
      </div>
      {isComponentVisible && (
        <>
          <div
            ref={ref}
            className={`tooltip__text tooltip__text--${ttPosition} bg-white radius radius--small`}
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
            <div
              className="tooltip__content text-blue-deep-80"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
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
