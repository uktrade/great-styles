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
  primaryButtonLabel,
  primaryButtonClick,
  primaryButtonDisable,
  secondaryButtonLabel,
  secondaryButtonClick,
  closeClick,
  progressPercentage,
  isOpen,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeClick}
      className="modal modal--new"
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
          className="pull-right m-r-0 dialog-close"
          onClick={closeClick}
        />
      )}
      <div className="modal__container">
        <div className="modal__content">
          {image && (
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
          {progressPercentage != null ? (
            <div className="progress-section modal__footer-item">
              <div className="progress-bar">
                <span style={{ width: `${progressPercentage}%` }} />
              </div>
            </div>
          ) : (
            ''
          )}
          {secondaryButtonClick && (
            <button
              type="button"
              className="button button--tertiary modal__footer-item"
              onClick={secondaryButtonClick}
            >
              {secondaryButtonLabel || 'Exit'}
            </button>
          )}
          {primaryButtonClick && (
            <button
              type="button"
              className="button button--primary modal__footer-item"
              disabled={primaryButtonDisable}
              onClick={primaryButtonClick}
            >
              {primaryButtonLabel || 'Continue'}
            </button>
          )}
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
  primaryButtonLabel: PropTypes.string,
  primaryButtonClick: PropTypes.func,
  primaryButtonDisable: PropTypes.bool,
  secondaryButtonLabel: PropTypes.string,
  secondaryButtonClick: PropTypes.func,
  isOpen: PropTypes.bool,
  progressPercentage: PropTypes.number,
}
Modal.defaultProps = {
  title: '<Modal title>',
  closeClick: null,
  minHeight: 105,
  primaryButtonLabel: '<Primary>',
  primaryButtonClick: null,
  primaryButtonDisable: false,
  secondaryButtonLabel: '<Secondary>',
  secondaryButtonClick: null,
  progressPercentage: null,
  isOpen: true,
}
