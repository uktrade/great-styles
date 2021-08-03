import React from "react";

export default {
  title: "Card",
};

export const Learn_linking = () => (
  <a className="text-white link inline-block m-r-m" href="/back" title="back">
    <h3 className="text-blue-deep-80 body-l-b m-b-xs">Learn</h3>
    <div className="bg-blue-deep-80 p-s radius">
      <h4 className="body-m text-white">About to your Business</h4>
      <p className="text-white h-s m-t-0">
        Dove Gin was founded in 2012 when Simon Dove started.
      </p>
      <div className="text-white">
        <i className="fa fa-clock text-blue-deep-40 m-r-xs" />
        <span className="body-m text-white">2 min read</span>
      </div>
    </div>
  </a>
);
