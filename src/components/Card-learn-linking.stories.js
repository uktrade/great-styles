import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
// import {action} from "@storybook/addon-actions";
import cardDocs from "./Card.mdx";

export default {
  title: "Card",
  parameters: {
    // component: Tag,
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    // "in-dsm": {
    //   // id: "5f6de8af2e4958dec03e7d04",
    //   versionFilePath: "../components/versionFile.json",
    // },
    docs: {page: cardDocs},
  },
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
