import React from "react";
import {withKnobs} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";

export default {
  title: "Structure/Text-in-a-box",
  parameters: {
    decorators: [withKnobs, withA11y],
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
