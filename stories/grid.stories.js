import React from "react";

import "../styles/great-styles.css";

export default { title: "Grid" };

export const Columns = () => (
  <div className="m-s">
    <div className="grid">
      <div className="c-1-2-l">
        <div className="bg-blue-deep-80 text-white p-s">.c-1-2-l</div>
      </div>
      <div className="c-1-2-l">
        <div className="bg-blue-deep-80 text-white p-s">.c-1-2-l</div>
      </div>
    </div>
    <p></p>
    <div className="grid">
      <div className="c-1-3-l">
        <div className="bg-blue-deep-80 text-white p-s">.c-1-3-l</div>
      </div>
      <div className="c-1-3-l">
        <div className="bg-blue-deep-80 text-white p-s">.c-1-3-l</div>
      </div>
      <div className="c-1-3-l">
        <div className="bg-blue-deep-80 text-white p-s">.c-1-3-l</div>
      </div>
    </div>
    <p></p>
    <div className="grid">
      <div className="c-1-4-l">
        <div className="bg-blue-deep-80 text-white p-s">.c-1-4-l</div>
      </div>
      <div className="c-1-4-l">
        <div className="bg-blue-deep-80 text-white p-s">.c-1-4-l</div>
      </div>
      <div className="c-1-4-l">
        <div className="bg-blue-deep-80 text-white p-s">.c-1-4-l</div>
      </div>
      <div className="c-1-4-l">
        <div className="bg-blue-deep-80 text-white p-s">.c-1-4-l</div>
      </div>
    </div>
  </div>
);
