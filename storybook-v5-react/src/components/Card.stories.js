import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
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

export const Card = () => (
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

// Card.story = {
//   parameters: {
//     // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
//     // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
//     // "in-dsm": {id: "5f6de8af2e4958dec03e7d04", versionFilePath: "./versionFile.json"},
//   },
// };
// Card_Horizontal.story = {
//   parameters: {
//     // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
//     // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
//     // "in-dsm": {id: "5f6de8af2e4958dec03e7d04", versionFilePath: "./versionFile.json"},
//   },
// };
// Card_Full_Width_Image.story = {
//   parameters: {
//     // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
//     // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
//     // "in-dsm": {id: "5f6de8af2e4958dec03e7d04", versionFilePath: "./versionFile.json"},
//   },
// };
