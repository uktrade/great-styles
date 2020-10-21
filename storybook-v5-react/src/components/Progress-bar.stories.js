import React from "react";

export default {title: "Feedback"};

export const ProgressBar = () => (
  <div className="m-s">
    <div className="progress-bar">
      <span style={{width: "50%"}}></span>
    </div>
    <p className="body-m-b m-t-xxs m-b-0">1 / 23 lessons complete</p>
  </div>
);
