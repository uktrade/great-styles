import {useEffect, useState, useRef} from "react";

function useComponentVisibleHook(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleKeydown = (event) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleKeydown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return {ref, isComponentVisible, setIsComponentVisible};
}

export default useComponentVisibleHook;
