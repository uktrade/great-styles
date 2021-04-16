import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import ReactModal from 'react-modal'

export const Modal = ({
  title,
  body,
  image,
  children,
  minHeight,
  modalSize,
  primaryButtonLabel,
  primaryButtonClick,
  primaryButtonDisable,
  secondaryButtonLabel,
  secondaryButtonClick,
  secondaryButtonDisable,
  closeClick,
  progressPercentage,
  isOpen,
}) => {
  const onKeyClose = (key) => {
    if (key === 'Enter' || key === ' ') {
      closeClick()
    }
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeClick}
      className={`modal modal--new modal--${modalSize}`}
      overlayClassName="modal-overlay center"
      shouldCloseOnOverlayClick={false}
      style={{
        content: {
          minHeight: `${minHeight === 'auto' ? 'auto' : minHeight + 'px'}`,
        },
      }}
    >
      {closeClick && (
        <button
          id="dialog-close"
          type="button"
          aria-label="Close"
          className="modal__close"
          onClick={closeClick}
          onKeyUp={(e) => onKeyClose(e.key)}
          tabIndex="0"
        >
          <i className="fas fa-times text-blue-deep-80" />
        </button>
      )}
      <div className="modal__container">
        <div className="modal__content">
          {image.src && (
            <div className={`modal__image ${image.bgClass}`}>
              <img src={image.src} alt={image.alt} />
            </div>
          )}
          {title && <h3 className="h-s">{title}</h3>}
          {body && (
            <div className="modal__body body-l m-b-xs text-blue-deep-60">
              {ReactHtmlParser(body)}
            </div>
          )}
          {children}
        </div>
        <div className="modal__footer">
          {progressPercentage !== null && (
            <div className="modal__footer-progress progress-section">
              <div className="progress-bar">
                <span style={{ width: `${progressPercentage}%` }} />
              </div>
            </div>
          )}
          <div className="modal__footer-actions">
            {secondaryButtonClick && (
              <button
                type="button"
                className="button button--tertiary"
                disabled={secondaryButtonDisable}
                onClick={secondaryButtonClick}
              >
                {secondaryButtonLabel || 'Exit'}
              </button>
            )}
            {primaryButtonClick && (
              <button
                type="button"
                className="button button--primary"
                disabled={primaryButtonDisable}
                onClick={primaryButtonClick}
              >
                {primaryButtonLabel || 'Continue'}
              </button>
            )}
          </div>
        </div>
      </div>
    </ReactModal>
  )
}

Modal.propTypes = {
  body: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    bgClass: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  closeClick: PropTypes.func,
  minHeight: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  modalSize: PropTypes.string.isRequired,
  primaryButtonLabel: PropTypes.string,
  primaryButtonClick: PropTypes.func,
  primaryButtonDisable: PropTypes.bool,
  secondaryButtonLabel: PropTypes.string,
  secondaryButtonClick: PropTypes.func,
  secondaryButtonDisable: PropTypes.bool,
  isOpen: PropTypes.bool,
  progressPercentage: PropTypes.number,
}
Modal.defaultProps = {
  title: '<Modal title>',
  minHeight: 105,
  image: {
    src: '',
    alt: 'Modal image',
    bgClass: '',
  },
  modalSize: 'medium',
  primaryButtonLabel: '<Primary>',
  secondaryButtonLabel: '<Secondary>',
  progressPercentage: null,
  isOpen: true,
}
