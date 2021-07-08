"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _reactModal = _interopRequireDefault(require("react-modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = ({
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
  isOpen
}) => {
  const onKeyClose = key => {
    if (key === 'Enter' || key === ' ') {
      closeClick();
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactModal.default, {
    isOpen: isOpen,
    onRequestClose: closeClick,
    className: "modal modal--new modal--".concat(modalSize),
    overlayClassName: "modal-overlay center",
    shouldCloseOnOverlayClick: false,
    style: {
      content: {
        minHeight: "".concat(minHeight === 'auto' ? 'auto' : minHeight + 'px')
      }
    }
  }, closeClick && /*#__PURE__*/_react.default.createElement("button", {
    id: "dialog-close",
    type: "button",
    "aria-label": "Close",
    className: "modal__close",
    onClick: closeClick,
    onKeyUp: e => onKeyClose(e.key),
    tabIndex: "0"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__content"
  }, image.src && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__image ".concat(image.bgClass)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image.src,
    alt: image.alt
  })), title && /*#__PURE__*/_react.default.createElement("h3", {
    className: "h-s"
  }, title), body && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__body body-l m-b-xs text-blue-deep-60"
  }, (0, _reactHtmlParser.default)(body)), children), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__footer"
  }, progressPercentage !== null && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__footer-progress progress-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar"
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      width: "".concat(progressPercentage, "%")
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__footer-actions"
  }, secondaryButtonClick && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "button button--tertiary",
    disabled: secondaryButtonDisable,
    onClick: secondaryButtonClick
  }, secondaryButtonLabel || 'Exit'), primaryButtonClick && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "button button--primary",
    disabled: primaryButtonDisable,
    onClick: primaryButtonClick
  }, primaryButtonLabel || 'Continue')))));
};

exports.Modal = Modal;
Modal.propTypes = {
  body: _propTypes.default.string,
  image: _propTypes.default.shape({
    src: _propTypes.default.string,
    alt: _propTypes.default.string,
    bgClass: _propTypes.default.string
  }),
  title: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  closeClick: _propTypes.default.func,
  minHeight: _propTypes.default.oneOfType(_propTypes.default.string, _propTypes.default.number),
  modalSize: _propTypes.default.string.isRequired,
  primaryButtonLabel: _propTypes.default.string,
  primaryButtonClick: _propTypes.default.func,
  primaryButtonDisable: _propTypes.default.bool,
  secondaryButtonLabel: _propTypes.default.string,
  secondaryButtonClick: _propTypes.default.func,
  secondaryButtonDisable: _propTypes.default.bool,
  isOpen: _propTypes.default.bool.isRequired,
  progressPercentage: _propTypes.default.number
};
Modal.defaultProps = {
  title: '<Modal title>',
  minHeight: 105,
  image: {
    src: '',
    alt: 'Modal image',
    bgClass: ''
  },
  modalSize: 'medium',
  primaryButtonLabel: '<Primary>',
  secondaryButtonLabel: '<Secondary>',
  progressPercentage: null,
  isOpen: true
};