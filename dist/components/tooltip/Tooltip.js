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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const Tooltip = ({
  title,
  content,
  position,
  className,
  isVisible,
  faIcon,
  showTitle
}) => {
  // Init useComponentVisible hook
  const componentVisible = _useComponentVisible.default;

  const _componentVisible = componentVisible(isVisible),
        ref = _componentVisible.ref,
        isComponentVisible = _componentVisible.isComponentVisible,
        setIsComponentVisible = _componentVisible.setIsComponentVisible;

  const _useState = (0, _react.useState)(null),
        _useState2 = _slicedToArray(_useState, 2),
        tooltipPosition = _useState2[0],
        setTooltipPosition = _useState2[1];

  const _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        mount = _useState4[0],
        setMount = _useState4[1];

  const _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        tooltipOpen = _useState6[0],
        setTooltipOpen = _useState6[1]; // Find mobile breakpoint width from CSS var


  const mobileBreakpoint = Number(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-mobile').replace('px', '')) || 640; // Apply negative margin to the left of the element

  const updatePositionOffset = el => {
    let left = el.current.getClientRects()[0].left;
    setTooltipPosition({
      marginLeft: window.innerWidth <= mobileBreakpoint ? "calc(-".concat(left, "px + var(--ttpadding))") : null
    });
  };

  const onClickOpen = () => {
    setIsComponentVisible(true);
    setTooltipOpen(true);

    if (window.innerWidth <= mobileBreakpoint && !tooltipOpen) {
      // Provide time for element to render in DOM
      setTimeout(() => {
        updatePositionOffset(ref);
      }, 50);
    }
  };

  const onClickClose = () => {
    setIsComponentVisible(false);
    updatePositionOffset(ref);
    setTooltipOpen(false);
  };

  const onKeyClose = key => {
    if (key === 'Enter') {
      onClickClose();
    }
  };

  (0, _react.useEffect)(() => {
    if (isComponentVisible && !mount) {
      updatePositionOffset(ref);
      setMount(true);
      window.addEventListener('resize', updatePositionOffset(ref));
      return () => {
        window.removeEventListener('resize', updatePositionOffset(ref));
      };
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
    style: tooltipPosition,
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