import React from "react";
import PropTypes from "prop-types";
import useComponentVisibleHook from "../../hooks/useComponentVisible";

export const Tooltip = ({title, content, position}) => {
  // Init useComponentVisible hook
  const componentVisible = useComponentVisibleHook;
  const {ref, isComponentVisible, setIsComponentVisible} = componentVisible(true);

  // Logic for left or right aligned. Default left.
  const ttPosition = position === "right" ? "right" : "left";

  return (
    <div className="tooltip" ref={ref}>
      <div
        title="Click to view Educational moment"
        class="tooltip__icon"
        onClick={() => setIsComponentVisible(true)}
      >
        <button class="button button--small button--only-icon button--tertiary">
          <i class="fas fa-book"></i>
        </button>
      </div>
      {isComponentVisible && (
        <>
          <div className={`tooltip__text tooltip__text--${ttPosition}`}>
            <span
              className="tooltip__close"
              title="Click or press Escape to close Educational moment"
              onClick={() => setIsComponentVisible(false)}
            >
              <i className="fas fa-times"></i>
            </span>
            <div className="tooltip__title">{title}</div>
            <div
              className="tooltip__content"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
        </>
      )}
      {!isComponentVisible && ""}
    </div>
  );
};

Tooltip.propTypes = {
  position: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  position: "left",
};
