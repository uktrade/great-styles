import React from "react";

export default { title: "Text Styles" };

export const Headings = () => (
  <div className="m-s">
    <h1 className="h-xl">.h-xl</h1>
    <h1 className="h-l">.h-l</h1>
    <h1 className="h-m">.h-m</h1>
    <h1 className="h-s">.h-s</h1>
    <h1 className="h-xs">.h-xs</h1>
  </div>
);

export const Body = () => (
  <div className="m-s">
    <p className="body-l">.body-l</p>
    <p className="body-m">.body-m</p>
    <p className="body-s">.body-s</p>
    <p className="body-l-b">.body-l-b</p>
    <p className="body-m-b">.body-m-b</p>
    <p className="body-s-b">.body-s-b</p>
  </div>
);

export const Quote = () => (
  <div className="m-s">
    <p className="quote-text">.quote-text</p>
  </div>
);
