"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));
var _useComponentVisible = _interopRequireDefault(require("../../hooks/useComponentVisible"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Tooltip = exports.Tooltip = function Tooltip(_ref) {
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
  }, /*#__PURE__*/_react.default.createElement("span", {
    role: "img",
    className: "great-icon fas ".concat(faIcon)
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
  }, /*#__PURE__*/_react.default.createElement("span", {
    role: "img",
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