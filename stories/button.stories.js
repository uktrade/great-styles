import React from "react";

export default { title: "Buttons" };

const renderButtons = (buttons, isDisabled = false, isIconOnly = false) => {
  return (
    <div>
      {buttons.map(classes => {
        return (
          <div className="m-b-s">
            <button className={classes} disabled={isDisabled}>
              {classes.split().map(c => {
                if (c.includes("loading")) {
                  return <div class="button--loading__spinner">Loading...</div>;
                } else if (c.includes("icon")) {
                  return (
                    <>
                      <i className="fas fa-plus" />
                      {!isIconOnly && <span>{`.${c}`}</span>}
                    </>
                  );
                } else {
                  return `.${c}`;
                }
              })}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const button_large = () =>
  renderButtons([
    "button button--large",
    "button button--large button--secondary ",
    "button button--large button--tertiary "
  ]);

export const button_medium = () =>
  renderButtons([
    "button",
    "button button--secondary ",
    "button button--tertiary "
  ]);

export const button_small = () =>
  renderButtons([
    "button button--small",
    "button button--small button--secondary ",
    "button button--small button--tertiary "
  ]);

export const button_large_icon = () =>
  renderButtons([
    "button button--large button--icon",
    "button button--large button--secondary button--icon",
    "button button--large button--tertiary button--icon"
  ]);

export const button_medium_icon = () =>
  renderButtons([
    "button button--icon",
    "button button--secondary button--icon",
    "button button--tertiary button--icon"
  ]);

export const button_disabled = () =>
  renderButtons(
    ["button", "button button--secondary ", "button button--tertiary "],
    true
  );

export const button_loading = () =>
  renderButtons([
    "button button--small button--loading",
    "button button--small button--loading button--secondary",
    "button button--small button--loading button--tertiary",
    "button button--loading",
    "button button--loading button--secondary",
    "button button--loading button--tertiary",
    "button button--large button--loading",
    "button button--large button--loading button--secondary",
    "button button--large button--loading button--tertiary"
  ]);

export const button_small_only_icon = () =>
  renderButtons(
    [
      "button button--small button--only-icon",
      "button button--small button--only-icon button--secondary",
      "button button--small button--only-icon button--tertiary",
      "button button--small button--only-icon button--loading",
      "button button--small button--only-icon button--loading button--secondary",
      "button button--small button--only-icon button--loading button--tertiary"
    ],
    false,
    true
  );
