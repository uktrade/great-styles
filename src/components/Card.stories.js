import React from "react";
import cardDocs from "./Card.mdx";

export default {
  title: "Card",
  parameters: {
    // component: Tag,
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    // "in-dsm": {
    //   // id: "5f6de8af2e4958dec03e7d04",
    //   versionFilePath: "../components/versionFile.json",
    // },
    docs: {page: cardDocs},
  },
};

export const Card_image_below = () => (
  <div className="m-s">
    <div className="card">
      <div className="card__section">
        <p className="body-l-b">Title</p>
        <p className="h-m">Title 36/40</p>
        <p className="body-l">Lorem ipsum dolor sit amet</p>
        <div className="card__cta">
          <button className="button button--full-width button--secondary button--small">
            button label
          </button>
        </div>
        <div className="card__image">
          <img src="https://dummyimage.com/150x150/4b426d/fff" alt="" />
        </div>
      </div>
    </div>
  </div>
);

export const Card_Horizontal = () => (
  <div className="m-s">
    <div className="card card--horizontal">
      <div className="card__section">
        <p className="body-l-b">Title</p>
        <p className="h-m">Title 36/40</p>
        <p className="body-l p-b-xs">Lorem ipsum dolor sit amet</p>
        <p className="text-blue-deep-80 m-t-0 p-t-0 m-b-xs">
          <i className="fas fa-clock m-r-xxs"></i>
          <strong> 12 min read</strong>
        </p>
        <div className="card__cta">
          <button className="button button--secondary button--small">button label</button>
        </div>
      </div>
      <div className="card__section card__section--image">
        <div className="card__image">
          <img src="https://dummyimage.com/300x150/4b426d/fff" alt="" />
        </div>
      </div>
    </div>
  </div>
);

export const Card_Full_Width_Image = () => (
  <div className="m-s">
    <div className="card card--full-width-image">
      <div className="card__section">
        <p className="body-l-b">Title</p>
        <p className="h-m p-b-xs">Title 36/40</p>
        <p className="body-l">Lorem ipsum dolor sit amet</p>
        <div className="card__cta">
          <button className="button button--secondary button--small">button label</button>
        </div>
      </div>
      <div className="card__image">
        <img src="https://dummyimage.com/575x180/e0e0e0/fff" alt="" />
      </div>
    </div>
  </div>
);

export const Dashboard = () => (
  <div className="m-s">
    <div className="m-s p-s bg-black-10">
      <div className="grid">
        <div className="c-1-2 m-b-s">
          <section className="g-card">
            <div className="g-card-header">
              <h3 className="h-m">.g-card-header</h3>
            </div>
            .g-card - used for cards in the domestic dashboard
          </section>
          <section className="g-card" id="your-export-plan-card">
            <div className="g-card-header">
              <h3 className="h-m">Your Learning progress</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </section>
        </div>
        <div className="c-1-2 m-b-s">
          <section className="g-card p-b-0" id="your-export-plan-card">
            <div className="g-card-header">
              <h3 className="h-m">No bottom padding p-b-0</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </section>
          <section className="g-card" id="your-export-plan-card">
            <h3 className="h-m">Card without header</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
);
