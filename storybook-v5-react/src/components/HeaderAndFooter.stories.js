import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
// import {action} from "@storybook/addon-actions";
// import cardDocs from "./Card.mdx";

export default {
  title: "Header and Footer",
  parameters: {
    // component: Tag,
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    // "in-dsm": {
    //   // id: "5f6de8af2e4958dec03e7d04",
    //   versionFilePath: "../components/versionFile.json",
    // },
    // docs: {page: cardDocs},
  },
};

export const Header_Signed_Out = () => (
  <div style={{minWidth: "1200px"}}>
    <div>
      <header
        className="magna-header bg-blue-deep-90 text-white"
        id="header"
        dir="ltr"
        data-ga-section="header"
      >
        <nav>
          <a id="header-logo-link" className="m-h-s m-v-xxs" href="/">
            <img
              className="header-logo"
              src="/images/exporting-is-great.svg"
              alt="Exporting is Great"
              id="header-logo-exporting-is-great"
            />
          </a>
          <div className="header-links">
            <ul id="services-area" className="services-area">
              <li>
                <a
                  id="header-link-learning"
                  className="link active"
                  href="/learn/categories/"
                >
                  Learn to export
                </a>
              </li>
              <li>
                <a
                  id="header-link-markets"
                  className="link"
                  href="/find-your-target-market/ "
                >
                  Target a market
                </a>
              </li>
              <li>
                <a
                  id="header-link-exporting-plan"
                  className="link"
                  href="/export-plan/dashboard/"
                >
                  Make an export plan
                </a>
              </li>
              <li>
                <a
                  id="header-sign-up-link"
                  href="/signup/"
                  className="button button--primary"
                >
                  Sign up
                </a>
              </li>
              <li id="header-link-user-profile" className="m-v-xs m-l-xs m-r-s">
                <div style={{lineHeight: "0"}}>
                  <button className="avatar">
                    <i
                      className="fas fa-caret-down text-blue-deep-80"
                      style={{fontSize: "30px"}}
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  </div>
);

export const Header_Signed_In = () => (
  <div style={{minWidth: "1200px"}}>
    <div className="m-v-m">
      <header
        className="magna-header bg-blue-deep-90 text-white"
        id="header"
        dir="ltr"
        data-ga-section="header"
      >
        <nav>
          <a id="header-logo-link" className="m-h-s m-v-xxs" href="/">
            <img
              className="header-logo"
              src="/images/exporting-is-great.svg"
              alt="Exporting is Great"
              id="header-logo-exporting-is-great"
            />
          </a>
          <div className="header-links">
            <ul id="services-area" className="services-area">
              <li>
                <a
                  id="header-link-learning"
                  className="link active"
                  href="/learn/categories/"
                >
                  Learn to export
                </a>
              </li>
              <li>
                <a
                  id="header-link-markets"
                  className="link"
                  href="/find-your-target-market/ "
                >
                  Target a market
                </a>
              </li>
              <li>
                <a
                  id="header-link-exporting-plan"
                  className="link"
                  href="/export-plan/dashboard/"
                >
                  Make an export plan
                </a>
              </li>
              <li id="header-link-user-profile" className="m-v-xs m-l-xs m-r-s">
                <div style={{lineHeight: "0"}}>
                  <button className="avatar">
                    <i className="fas fa-user text-blue-deep-80" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <nav
        className="p-t-xxs p-h-xs p-b-xxs bg-blue-deep-70 c-full-width text-white"
        id="personalisation-bar"
      >
        <span className="m-f-xs m-r-xxs">I want to learn about exporting</span>
        <span id="set-product-button" data-text="{{product_name}}">
          <button className="tag tag--tertiary tag--icon">
            add product<i className="fas fa-plus"></i>
          </button>
        </span>
        <span className="m-f-xxs m-r-xxs">to</span>
        <span id="set-country-button" data-text="{{market.country_name}}">
          <button className="tag tag--tertiary tag--icon">
            add country<i className="fas fa-plus"></i>
          </button>
        </span>
      </nav>
    </div>
    <div className="m-v-m">
      <header
        className="magna-header bg-blue-deep-90 text-white"
        id="header"
        dir="ltr"
        data-ga-section="header"
      >
        <nav>
          <a id="header-logo-link" className="m-h-s m-v-xxs" href="/">
            <img
              className="header-logo"
              src="/images/exporting-is-great.svg"
              alt="Exporting is Great"
              id="header-logo-exporting-is-great"
            />
          </a>
          <div className="header-links">
            <ul id="services-area" className="services-area">
              <li>
                <a
                  id="header-link-learning"
                  className="link active"
                  href="/learn/categories/"
                >
                  Learn to export
                </a>
              </li>
              <li>
                <a
                  id="header-link-markets"
                  className="link"
                  href="/find-your-target-market/ "
                >
                  Target a market
                </a>
              </li>
              <li>
                <a
                  id="header-link-exporting-plan"
                  className="link"
                  href="/export-plan/dashboard/"
                >
                  Make an export plan
                </a>
              </li>
              <li id="header-link-user-profile" className="m-v-xs m-l-xs m-r-s">
                <div style={{lineHeight: "0"}}>
                  <button className="avatar">
                    <i className="fas fa-user text-blue-deep-80" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <nav
        className="p-t-xxs p-h-xs p-b-xxs bg-blue-deep-70 c-full-width text-white"
        id="personalisation-bar"
      >
        <span className="m-f-xs m-r-xxs">I want to learn about exporting</span>
        <span id="set-product-button" data-text="{{product_name}}">
          <button className="tag tag--icon">
            Cheese<i className="fas fa-edit"></i>
          </button>
        </span>
        <span className="m-f-xxs m-r-xxs">to</span>
        <span id="set-country-button" data-text="{{market.country_name}}">
          <button className="tag tag--icon">
            Italy<i className="fas fa-edit"></i>
          </button>
        </span>
      </nav>
    </div>
  </div>
);

export const Header_Menu_Open = () => {
  const modalMenu = (
    <div style={{position: "absolute", zIndex: "2", top: "3px", right: "14px"}}>
      <div
        className="ReactModal__Content ReactModal__Content--after-open modal-menu"
        tabindex="-1"
        role="dialog"
        style={{
          marginRight: "-29px",
          marginTop: "15px",
          top: "60px",
          right: "65px",
          opacity: "1",
        }}
      >
        <div className="h-xs p-t-xxs">Hi Robert</div>
        <ul className="menu-items">
          <li>
            <a href="/dashboard/" className="link">
              <i className="fa fa-tachometer-alt" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/learn/categories/" className="link">
              <i className="fa fa-book" />
              <span>Learn to export</span>
            </a>
          </li>
          <li>
            <a href="/find-your-target-market/" className="link">
              <i className="fa fa-map-marker-alt" />
              <span>Target a market</span>
            </a>
          </li>
          <li>
            <a href="/export-plan/dashboard/" className="link">
              <i className="fa fa-folder" />
              <span>Make an export plan</span>
            </a>
          </li>
          <hr className="m-v-xxs" />
          <li>
            <a
              href="https://www.great.gov.uk/contact/feedback/"
              target="_blank"
              className="link"
            >
              <i className="fa fa-comment" />
              <span>Send a feedback email</span>
            </a>
          </li>
          <li>
            <a href="#" className="link">
              <i className="fa fa-arrow-right"></i>
              <span>Sign out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div style={{minWidth: "1200px"}}>
      <div style={{position: "relative", paddingBottom: "450px"}}>
        <header
          className="magna-header bg-blue-deep-90 text-white"
          id="header"
          dir="ltr"
          data-ga-section="header"
        >
          <nav>
            <a id="header-logo-link" className="m-h-s m-v-xxs" href="/">
              <img
                className="header-logo"
                src="/images/exporting-is-great.svg"
                alt="Exporting is Great"
                id="header-logo-exporting-is-great"
              />
            </a>
            <div className="header-links">
              <ul id="services-area" className="services-area">
                <li>
                  <a
                    id="header-link-learning"
                    className="link active"
                    href="/learn/categories/"
                  >
                    Learn to export
                  </a>
                </li>
                <li>
                  <a
                    id="header-link-markets"
                    className="link"
                    href="/find-your-target-market/ "
                  >
                    Target a market
                  </a>
                </li>
                <li>
                  <a
                    id="header-link-exporting-plan"
                    className="link"
                    href="/export-plan/dashboard/"
                  >
                    Make an export plan
                  </a>
                </li>
                <li id="header-link-user-profile" className="m-v-xs m-l-xs m-r-s">
                  <div style={{lineHeight: "0"}}>
                    <button className="avatar">
                      <i className="fas fa-user text-blue-deep-80" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <nav
          className="p-t-xxs p-h-xs p-b-xxs bg-blue-deep-70 c-full-width text-white"
          id="personalisation-bar"
        >
          <span className="m-f-xs m-r-xxs">I want to learn about exporting</span>
          <span id="set-product-button" data-text="{{product_name}}">
            <button className="tag tag--icon">
              Cheese<i className="fas fa-edit"></i>
            </button>
          </span>
          <span className="m-f-xxs m-r-xxs">to</span>
          <span id="set-country-button" data-text="{{market.country_name}}">
            <button className="tag tag--icon">
              Italy<i className="fas fa-edit"></i>
            </button>
          </span>
        </nav>
        {modalMenu}
      </div>
    </div>
  );
};
