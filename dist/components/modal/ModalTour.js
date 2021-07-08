"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTour = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = require("./Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const ModalTour = ({
  slides,
  isModalOpen,
  onModalComplete,
  onModalClose,
  children
}) => {
  const _useState = (0, _react.useState)(2),
        _useState2 = _slicedToArray(_useState, 2),
        current = _useState2[0],
        setCurrent = _useState2[1];

  const _useState3 = (0, _react.useState)(isModalOpen),
        _useState4 = _slicedToArray(_useState3, 2),
        modalOpen = _useState4[0],
        setModalOpen = _useState4[1];

  const length = slides.length - 1;

  const onHandleClose = () => {
    setModalOpen(false);
    onModalClose();
  };

  const onHandlePrev = () => {
    if (calcProgress() !== 0) {
      setCurrent(current - 1);
    } else {
      return false;
    }
  };

  const onHandleNext = () => {
    if (calcProgress() !== 100) {
      setCurrent(current + 1);
    } else {
      setModalOpen(false);
      onModalComplete();
    }
  };

  const calcProgress = () => {
    return current / length * 100;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children, slides.length !== 0 && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    isOpen: modalOpen,
    title: slides[current].title,
    body: slides[current].body,
    image: slides[current].image,
    progressPercentage: calcProgress(),
    closeClick: onHandleClose,
    primaryButtonClick: onHandleNext,
    primaryButtonLabel: calcProgress() !== 100 ? 'Next' : 'Finished',
    secondaryButtonClick: onHandlePrev,
    secondaryButtonLabel: "Previous",
    secondaryButtonDisable: calcProgress() === 0 ? true : false
  }));
};

exports.ModalTour = ModalTour;
ModalTour.propTypes = {
  isModalOpen: _propTypes.default.bool.isRequired,
  slides: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.number,
    title: _propTypes.default.string,
    body: _propTypes.default.string
  }).isRequired).isRequired,
  onModalComplete: _propTypes.default.func.isRequired,
  onModalClose: _propTypes.default.func.isRequired,
  children: _propTypes.default.node
};
ModalTour.defaultProps = {
  isModalOpen: false,
  slides: [],
  onModalComplete: () => void 0,
  onModalClose: () => void 0,
  children: null
};