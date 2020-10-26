import React, {Fragment} from "react";
import PropTypes from "prop-types";
import "../../scss/great-styles.scss";

/**
 * Buttons indicate actions on the page that will occur when a user touches them. This button is responsive to screen sizes.
 * We support a very minimal level of variation for the primary button. Custom styling or class names should not be applied to the primary button.
 * It requires text in all cases, but allows for icons as an optional addition.
 * The primary button can also exist as an element within larger molecules and organisms.
 * */
const Button = ({onClick, icon, disabled, children, size, theme}) => {
  return (
    <button
      disabled={disabled}
      onClick={!disabled && onClick}
      className={`button
         ${
           size === "large" ? "button--large" : size === "small" ? "button--small" : null
         } 
         ${
           theme === "secondary"
             ? "button--secondary"
             : theme === "tertiary"
             ? "button--tertiary"
             : null
         }
         ${icon && "button--icon"}
      `}
    >
      {!icon && <div className="button__content">{children}</div>}
      {icon && (
        <Fragment>
          <i className="fas fa-plus" />
          <span>{children}</span>
        </Fragment>
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * Choose button theme
   */
  theme: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  /**
   * Adds an icon to the button
   */
  icon: PropTypes.oneOf(["icon-left"]),
  /**
   * Specify size of the button
   */
  size: PropTypes.oneOf(["large", "small", null]),
  /**
   * The content of the Button
   * */
  children: PropTypes.node,
  /**
   * Disable state of the button
   * */
  disabled: PropTypes.bool,
  /**
   * The function to be called when the button is clicked
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
