import React from "react";

export default { title: "Tags" };

const renderTags = (tags, isIcon = false) => {
  return (
    <div>
      {tags.map(classes => {
        return (
          <div className="m-b-s">
            <button className={classes}>
              tag label{isIcon && <i className="fas fa-plus" />}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const tag_medium = () =>
  renderTags(["tag", "tag tag--secondary ", "tag tag--tertiary "]);

export const tag_medium_with_icon = () =>
  renderTags(
    [
      "tag tag--icon",
      "tag tag--icon tag--secondary ",
      "tag tag--icon tag--tertiary "
    ],
    true
  );

export const tag_small = () =>
  renderTags([
    "tag tag--small",
    "tag tag--secondary tag--small",
    "tag tag--tertiary tag--small"
  ]);

export const tag_small_with_icon = () =>
  renderTags(
    [
      "tag tag--icon tag--small",
      "tag tag--icon tag--secondary tag--small",
      "tag tag--icon tag--tertiary tag--small"
    ],
    true
  );
