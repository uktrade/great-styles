import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
// import {action} from "@storybook/addon-actions";
import cardDocs from "./Card.mdx";

export default {
  title: "Structure",
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

export const next_step = () => (
  <div className="m-s">
    <div class="grid">
      <div class="c-1-12">
        <h4 class="h-s">&nbsp;</h4>
      </div>
      <div class="c-10-12">
        <div className="g-card g-card--with-image">
          <div className="g-card--with-image__content">
            <p className="body-l-b m-0">Your next lesson</p>
            <h3 className="h-m p-t-xxs">Marketing at events - Attend a trade show</h3>
            <p className="text-blue-deep-80 m-t-0 p-t-0 m-b-xs">
              <i className="fas fa-clock m-r-xxs"></i>
              <strong> 12 min read</strong>
            </p>
            <button className="button button--secondary m-b-xs">Continue learning</button>
          </div>
          <div className="g-card--with-image__image">
            <img src="https://dummyimage.com/443x248/000/fff" alt="" />
          </div>
        </div>
      </div>
      <div class="c-1-12">
        <h4 class="h-s">&nbsp;</h4>
      </div>
    </div>
  </div>
);
