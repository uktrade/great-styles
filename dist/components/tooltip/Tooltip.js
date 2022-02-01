"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _useComponentVisible = _interopRequireDefault(require("../../hooks/useComponentVisible"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Tooltip = _ref => {
  let {
    title,
    content,
    position,
    className,
    isVisible,
    faIcon,
    showTitle
  } = _ref;
  // Init useComponentVisible hook
  const componentVisible = _useComponentVisible.default;
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = componentVisible(isVisible);
  const [mount, setMount] = (0, _react.useState)(false);

  const onClickOpen = () => {
    setIsComponentVisible(true);
  };

  const onClickClose = () => {
    setIsComponentVisible(false);
  };

  const onKeyClose = key => {
    if (key === 'Enter') {
      onClickClose();
    }
  };

  (0, _react.useEffect)(() => {
    if (isComponentVisible && !mount) {
      setMount(true);
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [isComponentVisible, ref, mount]); // Logic for left or right aligned. Default left.

  const ttPosition = position === 'right' ? 'right' : 'left';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltip ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    title: "Click to view Educational moment",
    className: "tooltip__icon"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button button--small button--only-icon button--tertiary",
    onClick: onClickOpen,
    type: "button",
    "aria-haspopup": "dialog"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas ".concat(faIcon)
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "visually-hidden"
  }, title))), isComponentVisible && /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: "tooltip__text tooltip__text--".concat(ttPosition, " bg-white radius"),
    role: "dialog",
    "aria-labelledby": "tooltip-title"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "tooltip__close",
    title: "Click or press Escape to close Educational moment",
    onClick: onClickClose,
    onKeyUp: e => onKeyClose(e.key),
    tabIndex: "0"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times text-blue-deep-80"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "visually-hidden"
  }, "Click or press Escape to close Educational moment")), /*#__PURE__*/_react.default.createElement("h2", {
    id: "tooltip-title",
    className: "tooltip__title h-xs p-t-0 p-b-0 ".concat(showTitle ? '' : 'visually-hidden')
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltip__content text-blue-deep-80"
  }, (0, _reactHtmlParser.default)(content))));
};

exports.Tooltip = Tooltip;
Tooltip.propTypes = {
  className: _propTypes.default.string,
  content: _propTypes.default.string.isRequired,
  faIcon: _propTypes.default.string,
  isVisible: _propTypes.default.bool,
  position: _propTypes.default.string,
  title: _propTypes.default.string,
  showTitle: _propTypes.default.bool
};
Tooltip.defaultProps = {
  className: '',
  faIcon: 'fa-book',
  isVisible: false,
  position: 'left',
  title: 'Helpful hint',
  showTitle: true
};