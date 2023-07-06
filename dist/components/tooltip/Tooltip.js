"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));
var _useComponentVisible = _interopRequireDefault(require("../../hooks/useComponentVisible"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Tooltip = function Tooltip(_ref) {
  var title = _ref.title,
    content = _ref.content,
    position = _ref.position,
    className = _ref.className,
    isVisible = _ref.isVisible,
    faIcon = _ref.faIcon,
    showTitle = _ref.showTitle;
  // Init useComponentVisible hook
  var componentVisible = _useComponentVisible.default;
  var _componentVisible = componentVisible(isVisible),
    ref = _componentVisible.ref,
    isComponentVisible = _componentVisible.isComponentVisible,
    setIsComponentVisible = _componentVisible.setIsComponentVisible;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    mount = _useState2[0],
    setMount = _useState2[1];
  var onClickOpen = function onClickOpen() {
    setIsComponentVisible(true);
  };
  var onClickClose = function onClickClose() {
    setIsComponentVisible(false);
  };
  var onKeyClose = function onKeyClose(key) {
    if (key === 'Enter') {
      onClickClose();
    }
  };
  (0, _react.useEffect)(function () {
    if (isComponentVisible && !mount) {
      setMount(true);
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isComponentVisible, ref, mount]);

  // Logic for left or right aligned. Default left.
  var ttPosition = position === 'right' ? 'right' : 'left';
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
    onKeyUp: function onKeyUp(e) {
      return onKeyClose(e.key);
    },
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