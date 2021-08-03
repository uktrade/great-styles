import React from "react";
import cardDocs from "./Card.mdx";

export default {
  title: "Structure",
  parameters: {
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
