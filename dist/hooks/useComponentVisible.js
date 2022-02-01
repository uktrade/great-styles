"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function useComponentVisibleHook(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = (0, _react.useState)(initialIsVisible);
  const ref = (0, _react.useRef)(null);

  const handleKeydown = event => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  (0, _react.useEffect)(() => {
    document.addEventListener("keydown", handleKeydown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleKeydown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return {
    ref,
    isComponentVisible,
    setIsComponentVisible
  };
}

var _default = useComponentVisibleHook;
exports.default = _default;