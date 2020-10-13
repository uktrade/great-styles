import React from "react";
import {storiesOf} from "@storybook/react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
import buttonDocs from "./Button.mdx";

import Button from "./Button";

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: "Actions|Button-medium",
  parameters: {
    component: Button,
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    // "in-dsm": {
    id: "5f6ddcd1258df51e034283b7",
    versionFilePath: "../components/versionFile.json",
    // },
  },
};

const iconOptions = {none: null, "chevron-right": "chevron-right"};

export const button_medium_primary = () => (
  <Button
    onClick={() => action("Button clicked")("Click")}
    icon={select("icon", iconOptions, iconOptions.none)}
    disabled={boolean("disabled", false)}
  >
    {text("children", "TEXT")}
  </Button>
);

// storiesOf("Button", module).add(
//   "Button-medium",
//   () => (
//     <Button
//       onClick={() => action("Button clicked")("Click")}
//       icon={select("icon", iconOptions, iconOptions.none)}
//       disabled={boolean("disabled", false)}
//     >
//       {text("children", "TEXT")}
//     </Button>
//   ),
//   {
//     "in-dsm": {
//       id: "5f6ddcd1258df51e034283b7",
//     },
//   }
// );

button_medium_primary.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    docs: {page: buttonDocs},
    "in-dsm": {id: "5f6ddcd1258df51e034283b7", versionFilePath: "./versionFile.json"},
  },
};
