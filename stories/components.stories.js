import React from "react";

export default { title: "Components" };

export const Header = () => (
  <div style={{minWidth:'1000px'}}>
    <header class="magna-header bg-blue-deep-80 text-white" id="header" dir="ltr" data-ga-section="header">
      <nav>
        <a id="header-logo-link" className="m-h-s m-v-xxs" href="/">
          <img className="header-logo" src="/images/exporting-is-great.svg" alt="Exporting is Great" id="header-logo-exporting-is-great"/>
        </a>
        <div className="header-links">
          <ul id="services-area" className="services-area">
            <li><a id="header-link-learning" className="link active" href="/learn/categories/">Learn to export</a></li>
            <li><a id="header-link-markets" className="link" href="/find-your-target-market/ ">Target a market</a></li>
            <li><a id="header-link-exporting-plan" className="link" href="/export-plan/dashboard/">Make an export plan</a></li>
            <li id="header-link-user-profile" className="m-v-xs m-l-xs m-r-s">
              <div style={{lineHeight: '0'}}>
                <button className="avatar"><i className="fas fa-user text-blue-deep-80"/></button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
)

export const Personalisation_bar = () => (
  <div className="m-s">
    <div className="m-s p-s bg-black-20">
      <nav className="p-t-xxs p-h-xs p-b-xxs bg-white" id="personalisation-bar">
        <span className="m-f-xs m-r-xxs">I am interested in exporting</span>
        <span id="set-product-button">
          <button className="button button--primary button--round-corner">
            add products
          </button>
        </span>
        <span className="m-f-xxs m-r-xxs">to</span>
        <span id="set-country-button">
          <button className="button button--primary button--round-corner">
            add countries
          </button>
        </span>
      </nav>
      <p></p>
      <nav className="p-t-xxs p-h-xs p-b-xxs bg-white" id="personalisation-bar">
        <span className="m-f-xs m-r-xxs">I am interested in exporting</span>
        <span id="set-product-button">
          <button className="button button--primary button--round-corner">
            Cheese
          </button>
          <button className="button button--primary button--round-corner">
            Wine
          </button>
        </span>
        <span className="m-f-xxs m-r-xxs">to</span>
        <span id="set-country-button">
          <button className="button button--primary button--round-corner">
            France
          </button>
          <button className="button button--primary button--round-corner">
            Spain
          </button>
        </span>
      </nav>
    </div>
  </div>
);

export const Dashboard_card = () => (
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
        </div>
        <div className="c-1-2 m-b-s">
          <section className="g-card" id="your-export-plan-card">
            <div className="g-card-header">
              <h3 className="h-m">Your export plan</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section className="g-card" id="your-export-plan-card">
            <div className="g-card-header">
              <h3 className="h-m">Your favourite colour</h3>
            </div>
            <p>Blue</p>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export const next_lesson_card = () => (
  <div className="m-s">
    <div class="grid">
      <div class="c-1-12">
        <h4 class="h-s">&nbsp;</h4>
      </div>
      <div class="c-10-12">
        <div className="g-card g-card--with-image">
          <div className="g-card--with-image__content">
            <p className="body-l-b m-0">Your next lesson</p>
            <h3 className="h-m p-t-xxs">
              Marketing at events - Attend a trade show
            </h3>
            <p className="text-blue-deep-80 m-t-0 p-t-0 m-b-xs">
              <i className="fas fa-clock m-r-xxs"></i>
              <strong> 12 min read</strong>
            </p>
            <button className="button button--secondary m-b-xs">
              Continue learning
            </button>
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
