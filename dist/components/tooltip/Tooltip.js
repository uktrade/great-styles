"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useComponentVisible = _interopRequireDefault(require("../../hooks/useComponentVisible"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = ({
  title,
  content,
  position,
  className,
  isVisible,
  faIcon
}) => {
  // Init useComponentVisible hook
  var componentVisible = _useComponentVisible.default;

  var _componentVisible = componentVisible(isVisible),
      ref = _componentVisible.ref,
      isComponentVisible = _componentVisible.isComponentVisible,
      setIsComponentVisible = _componentVisible.setIsComponentVisible; // Logic for left or right aligned. Default left.


  var ttPosition = position === 'right' ? 'right' : 'left';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltip ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    title: "Click to view Educational moment",
    className: "tooltip__icon",
    onClick: () => setIsComponentVisible(true)
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button button--small button--only-icon button--tertiary",
    onClick: e => e.preventDefault
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas ".concat(faIcon)
  }))), isComponentVisible && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: "tooltip__text tooltip__text--".concat(ttPosition, " bg-white radius radius--small")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "tooltip__close",
    title: "Click or press Escape to close Educational moment",
    onClick: () => setIsComponentVisible(false)
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times text-blue-deep-80"
  })), title && /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltip__title h-xs p-t-0 p-b-0"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltip__content text-blue-deep-80",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }))));
};

exports.Tooltip = Tooltip;
Tooltip.propTypes = {
  className: _propTypes.default.string,
  content: _propTypes.default.string.isRequired,
  faIcon: _propTypes.default.string,
  isVisible: _propTypes.default.bool,
  position: _propTypes.default.string,
  title: _propTypes.default.string
};
Tooltip.defaultProps = {
  className: '',
  faIcon: 'fa-book',
  isVisible: false,
  position: 'left',
  title: 'Helpful hint'
};