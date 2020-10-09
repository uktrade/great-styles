import React from "react";

/**
 * Buttons indicate actions on the page that will occur when a user touches them. This button is responsive to screen sizes.
 * We support a very minimal level of variation for the primary button. Custom styling or class names should not be applied to the primary button.
 * It requires text in all cases, but allows for icons as an optional addition.
 * The primary button can also exist as an element within larger molecules and organisms.
 * */
const Button = ({classes, label, href, onClick, disabled = false}) => {
  if (!href)
    return (
      <button className={`button ${classes}`} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    );
  return (
    <a className={`button ${classes}`} disabled={disabled} href={href} onClick={onClick}>
      {label}
    </a>
  );
};

export default Button;
