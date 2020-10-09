import React, {Fragment} from "react";
import {storiesOf} from "@storybook/react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import {withInfo} from "@storybook/addon-info";

import Button from "./Button";

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: "Button",
  parameters: {
    component: Button,
    decorators: [withKnobs, withInfo],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    "in-dsm": {
      id: "5f6cabef152a65feccf5b29c",
      versionFilePath: "./versionFile.json",
    },
  },
};

export const CustomSource = () => Template.bind({});

CustomSource.parameters = {
  docs: {
    source: {
      code: "Some custom string here",
    },
  },
};

storiesOf("Actions|Button", module)
  .add("Large Primary", () => (
    <Button
      classes="button--large"
      disabled={boolean("disabled", false)}
      label={text("label", "Button")}
    ></Button>
  ))
  .add("Large Secondary", () => (
    <Button
      classes="button--large button--secondary"
      disabled={boolean("disabled", false)}
      label={text("label", "Button")}
    ></Button>
  ))
  .add("Large Tertiary", () => (
    <Button
      classes="button--large button--tertiary"
      disabled={boolean("disabled", false)}
      label={text("label", "Button")}
    ></Button>
  ));

// simpleButton.story = {
//   parameters: {
//     // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
//     // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
//     // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: './versionFile.json' },
//   },
// };
