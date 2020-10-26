import React from "react";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";

export default {
  title: "Structure/Beta",
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

export const Beta = () => (
  <span className="beta bg-blue-deep-10 text-blue-deep-80">
    <strong disabled={boolean("Disabled", false)}>BETA</strong>
  </span>
);
