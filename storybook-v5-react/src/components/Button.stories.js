import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
import buttonDocs from "./Button.mdx";

import Button from "./Button";

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: "Actions/Button",
  parameters: {
    component: Button,
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    "in-dsm": {
      id: "5f6cabef152a65feccf5b29c",
      versionFilePath: "../components/versionFile.json",
    },
    docs: {page: buttonDocs},
  },
};

const iconOptions = {none: null, "icon-left": "icon-left"};
const sizeOptions = {medium: null, large: "large", small: "small"};
const themeOptions = {primary: null, secondary: "secondary", tertiary: "tertiary"};

export const button_large = () => (
  <Button
    onClick={() => action("Button clicked")("Click")}
    icon={select("icon", iconOptions, iconOptions.none)}
    size={select("size", sizeOptions, sizeOptions.large)}
    disabled={boolean("disabled", false)}
    theme={select("theme", themeOptions, themeOptions.primary)}
  >
    {text("children", "TEXT")}
  </Button>
);

export const button_medium = () => (
  <Button
    onClick={() => action("Button clicked")("Click")}
    icon={select("icon", iconOptions, iconOptions.none)}
    size={select("size", sizeOptions, sizeOptions.medium)}
    disabled={boolean("disabled", false)}
    theme={select("theme", themeOptions, themeOptions.primary)}
  >
    {text("children", "TEXT")}
  </Button>
);

export const button_small = () => (
  <Button
    onClick={() => action("Button clicked")("Click")}
    icon={select("icon", iconOptions, iconOptions.none)}
    size={select("size", sizeOptions, sizeOptions.small)}
    disabled={boolean("disabled", false)}
    theme={select("theme", themeOptions, themeOptions.primary)}
  >
    {text("children", "TEXT")}
  </Button>
);

button_large.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    "in-dsm": {id: "5f6cabef152a65feccf5b29c", versionFilePath: "./versionFile.json"},
  },
};

button_medium.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    "in-dsm": {id: "5f6ddcd1258df51e034283b7", versionFilePath: "./versionFile.json"},
  },
};

button_small.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    "in-dsm": {id: "5f6ddddf7780ce06e6eab639", versionFilePath: "./versionFile.json"},
  },
};
