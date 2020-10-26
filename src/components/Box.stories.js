import React from "react";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";

export default {
  title: "Structure/Text-in-a-box",
  parameters: {
    // component: Button,
    decorators: [withKnobs, withA11y],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    // "in-dsm": {
    //   id: "5f6cabef152a65feccf5b29c",
    //   versionFilePath: "../components/versionFile.json",
    // },
    // docs: {page: buttonDocs},
  },
};

export const With_left_arrow = () => (
  <div className="m-s">
    <div className="box">.box</div>
  </div>
);

export const No_arrow = () => (
  <div className="m-s">
    <div className="box box--no-pointer">.box .box--no-pointer</div>
  </div>
);
