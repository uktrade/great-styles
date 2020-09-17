import React from "react";

export default { title: "Box" };

export const Box = () => (
  <div className="m-s">
    <div className="box">.box</div>
    <p></p>
    <div className="box box--no-pointer">.box .box--no-pointer</div>
  </div>
);