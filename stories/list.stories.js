import React from "react";

import "../styles/great-styles.css";

export default { title: "List" };

export const DotList = () => (
  <div className="m-s">
    <ul className="list-dot text-blue-deep-80">
      <li>list item 1</li>
      <li>list item 2</li>
      <li>list item 3</li>
    </ul>
  </div>
);
