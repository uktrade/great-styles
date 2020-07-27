import React from "react";

import "../styles/great-styles.css";

export default { title: "Colours" };

export const Text_Colours = () => (
  <div className="m-s">
    <p className="text-blue-deep-80">.text-blue-deep-80</p>
    <p className="text-blue-deep-40">.text-blue-deep-40</p>
    <p className="text-blue-deep-10">.text-blue-deep-10</p>
    <p className="text-aqua-100">.text-aqua-100</p>
    <p className="text-red-80">.text-red-80</p>
    <p className="text-white" style={{ background: "black" }}>
      .text-white
    </p>
  </div>
);

export const BG_Colours = () => (
  <div className="m-s" style={{ color: "white" }}>
    <p className="bg-blue-deep-80">.bg-blue-deep-80</p>
    <p className="bg-blue-deep-40">.bg-blue-deep-40</p>
    <p className="bg-blue-deep-10">.bg-blue-deep-10</p>
    <p className="bg-aqua-100">.bg-aqua-100</p>
    <p className="bg-red-80">.bg-red-80</p>
    <p className="bg-white" style={{ color: "black" }}>
      .bg-white
    </p>
  </div>
);
