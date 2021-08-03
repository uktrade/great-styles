import React from "react";

export default {
  title: "Structure/Text-in-a-box",
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
