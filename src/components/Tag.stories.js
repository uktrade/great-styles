import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
import tagDocs from "./Tag.mdx";

export default {
  title: "Actions/Tag",
  parameters: {
    // component: Tag,
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    "in-dsm": {
      id: "5f6de8af2e4958dec03e7d04",
      versionFilePath: "../components/versionFile.json",
    },
    docs: {page: tagDocs},
  },
};

const renderTags = (tags, isIcon = false) => {
  return (
    <div>
      {tags.map((classes) => {
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

export const tag_medium = () => {
  return renderTags(["tag", "tag tag--secondary ", "tag tag--tertiary "]);
};

export const tag_medium_with_icon = () => {
  return renderTags(
    ["tag tag--icon", "tag tag--icon tag--secondary ", "tag tag--icon tag--tertiary "],
    true
  );
};

export const tag_small = () => {
  return renderTags([
    "tag tag--small",
    "tag tag--secondary tag--small",
    "tag tag--tertiary tag--small",
  ]);
};

export const tag_small_with_icon = () => {
  return renderTags(
    [
      "tag tag--icon tag--small",
      "tag tag--icon tag--secondary tag--small",
      "tag tag--icon tag--tertiary tag--small",
    ],
    true
  );
};

tag_small.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    "in-dsm": {id: "5f6de8af2e4958dec03e7d04", versionFilePath: "./versionFile.json"},
  },
};

tag_small_with_icon.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    "in-dsm": {id: "5f6de7c5c476164038982c05", versionFilePath: "./versionFile.json"},
  },
};

tag_medium.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    "in-dsm": {id: "5f6de6b09cc293515fe8535b", versionFilePath: "./versionFile.json"},
  },
};

tag_medium_with_icon.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    "in-dsm": {id: "5f6de94bef8559bddd31cb46", versionFilePath: "./versionFile.json"},
  },
};
