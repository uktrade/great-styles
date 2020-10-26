import React from "react";

export default {title: "Structure/Media-block"};

export const Default = () => (
  <div className="m-s">
    <div className="media-block m-b-s m-h-s">
      <img src="https://dummyimage.com/70x70/000/fff" alt="" />
      <div>
        <h3 className="h-l text-blue-deep-80">Heading text</h3>
        <p className="text-blue-deep-80">Paragraph text</p>
      </div>
    </div>
  </div>
);
export const Round_image = () => (
  <div className="m-s">
    <div className="media-block media-block--round-image m-b-s m-h-s">
      <img src="https://dummyimage.com/70x70/000/fff" alt="" />
      <div>
        <h3 className="h-l text-blue-deep-80">Heading text</h3>
        <p className="text-blue-deep-80">Paragraph text</p>
      </div>
    </div>
  </div>
);
export const Border_left = () => (
  <div className="m-s">
    <div className="media-block media-block--round-image m-b-s m-h-s">
      <i className="fas fa-ban"></i>
      <div className="g-panel g-panel--horizontal-mobile">
        <h3 className="h-l text-blue-deep-80">Heading text</h3>
        <p className="text-blue-deep-80">Paragraph text</p>
      </div>
    </div>
  </div>
);
