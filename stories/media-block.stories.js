import React from "react";

import "../styles/great-styles.css";

export default { title: "Media Block" };

export const MediaBlock = () => (
  <div className="m-s">
    <div className="media-block">
      <img src="https://dummyimage.com/70x70/000/fff" alt="" />
      <div>
        <h3 className="h-l text-blue-deep-80">Heading text</h3>
        <p className="text-blue-deep-80">Paragraph text</p>
      </div>
    </div>
  </div>
);
