import React from "react";

export default { title: "Card" };

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
          <button className="button button--secondary button--small">
            button label
          </button>
        </div>
      </div>
      <div className="card__section card__section--image">
        <div className="card__image">
          <img src="https://dummyimage.com/150x150/4b426d/fff" alt="" />
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
          <button className="button button--secondary button--small">
            button label
          </button>
        </div>
      </div>
      <div className="card__image">
        <img src="https://dummyimage.com/575x180/e0e0e0/fff" alt="" />
      </div>
    </div>
  </div>
);
