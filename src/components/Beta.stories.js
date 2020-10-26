import React from "react";
import {withKnobs, boolean} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";

export default {
  title: "Structure/Beta",
  parameters: {
    decorators: [withKnobs, withA11y],
  },
};

export const Beta = () => (
  <span className="beta bg-blue-deep-10 text-blue-deep-80">
    <strong disabled={boolean("Disabled", false)}>BETA</strong>
  </span>
);
