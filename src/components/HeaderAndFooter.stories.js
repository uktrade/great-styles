import React from "react";
import {withKnobs} from "@storybook/addon-knobs";

export default {
  title: "Header and Footer",
  parameters: {
    decorators: [withKnobs],
  },
};

export const Footer_Global = () => (
  <div style={{minWidth: "1200px"}}>
    <footer className="magna-footer p-t-l" id="footer">
      <nav className="magna-footer__nav bg-blue-deep-90 text-white p-h-l">
        <ul className="magna-footer__links footer-links">
          <li>
            <a href="#">Privacy notice</a>
          </li>
          <li>
            <a href="#">Terms and conditions</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <div className="magna-footer__great-logo">
          <a href="#">
            <img
              className="footer-logo m-t-s"
              src="/images/logo.svg"
              alt="Exporting is Great"
            />
          </a>
        </div>
      </nav>
      <div className="magna-footer__copyright bg-blue-white p-h-l">
        <div className="magna-footer__dit-logo">
          <img
            className="header-logo"
            src="/images/dit-crest-and-text-landscape.svg"
            alt="Department for International Trade"
          />
        </div>
        <div className="magna-footer__copy">
          <p className="text-black-100 body-m m-0">
            &copy; Crown copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
);

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
          <a id="header-logo-link" href="/">
            <img
              className="header-logo"
              src="/images/logo.svg"
              alt="Exporting is Great"
              id="header-logo-exporting-is-great"
            />
          </a>
          <div className="header-links">
            <ul id="services-area" className="services-area">
              <li>
                <a
                  id="header-link-learning"
                  className="button button--secondary active"
                  href="/learn/categories/"
                >
                  Learn to export
                </a>
              </li>
              <li>
                <a
                  id="header-link-markets"
                  className="button button--secondary"
                  href="/find-your-target-market/ "
                >
                  Target a market
                </a>
              </li>
              <li>
                <a
                  id="header-link-exporting-plan"
                  className="button button--secondary"
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
              <li id="header-link-user-profile">
                <div style={{lineHeight: "0"}}>
                  <button className="avatar">
                    <i
                      className="fas fa-caret-down text-blue-deep-80"
                      style={{fontSize: "30px"}}
                    />
                    <span className="visually-hidden">User menu</span>
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
          <a id="header-logo-link" href="/">
            <img
              className="header-logo"
              src="/images/logo.svg"
              alt="Exporting is Great"
              id="header-logo-exporting-is-great"
            />
          </a>
          <div className="header-links">
            <ul id="services-area" className="services-area">
              <li>
                <a
                  id="header-link-learning"
                  className="button button--secondary"
                  href="/learn/categories/"
                >
                  Learn to export
                </a>
              </li>
              <li>
                <a
                  id="header-link-markets"
                  className="button button--secondary"
                  href="/find-your-target-market/ "
                >
                  Target a market
                </a>
              </li>
              <li>
                <a
                  id="header-link-exporting-plan"
                  className="button button--secondary"
                  href="/export-plan/dashboard/"
                >
                  Make an export plan
                </a>
              </li>
              <li id="header-link-user-profile">
                <div style={{lineHeight: "0"}}>
                  <button className="avatar">
                    <i className="fas fa-user text-blue-deep-80" />
                    <span className="visually-hidden">User menu</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <nav
        className="p-v-xs p-h-xs bg-blue-deep-80 c-full-width text-white"
        id="personalisation-bar"
      >
        <span className="m-f-xs m-r-xxs">I want to export</span>
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
          <a id="header-logo-link" href="/">
            <img
              className="header-logo"
              src="/images/logo.svg"
              alt="Exporting is Great"
              id="header-logo-exporting-is-great"
            />
          </a>
          <div className="header-links">
            <ul id="services-area" className="services-area">
              <li>
                <a
                  id="header-link-learning"
                  className="button button--secondary"
                  href="/learn/categories/"
                >
                  Learn to export
                </a>
              </li>
              <li>
                <a
                  id="header-link-markets"
                  className="button button--secondary"
                  href="/find-your-target-market/ "
                >
                  Target a market
                </a>
              </li>
              <li>
                <a
                  id="header-link-exporting-plan"
                  className="button button--secondary"
                  href="/export-plan/dashboard/"
                >
                  Make an export plan
                </a>
              </li>
              <li id="header-link-user-profile">
                <div style={{lineHeight: "0"}}>
                  <button className="avatar">
                    <i className="fas fa-user text-blue-deep-80" />
                    <span className="visually-hidden">User menu</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <nav
        className="p-v-xs p-h-xs bg-blue-deep-80 c-full-width text-white"
        id="personalisation-bar"
      >
        <span className="m-f-xs m-r-xxs">I want to export</span>
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
    <div style={{position: "absolute", zIndex: "2", top: "3px", right: "-14px"}}>
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
            <a id="header-logo-link" href="/">
              <img
                className="header-logo"
                src="/images/logo.svg"
                alt="Exporting is Great"
                id="header-logo-exporting-is-great"
              />
            </a>
            <div className="header-links">
              <ul id="services-area" className="services-area">
                <li>
                  <a
                    id="header-link-learning"
                    className="button button--secondary"
                    href="/learn/categories/"
                  >
                    Learn to export
                  </a>
                </li>
                <li>
                  <a
                    id="header-link-markets"
                    className="button button--secondary"
                    href="/find-your-target-market/ "
                  >
                    Target a market
                  </a>
                </li>
                <li>
                  <a
                    id="header-link-exporting-plan"
                    className="button button--secondary"
                    href="/export-plan/dashboard/"
                  >
                    Make an export plan
                  </a>
                </li>
                <li id="header-link-user-profile">
                  <div style={{lineHeight: "0"}}>
                    <button className="avatar">
                      <i className="fas fa-user text-blue-deep-80" />
                      <span className="visually-hidden">User menu</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <nav
          className="p-v-xs p-h-xs bg-blue-deep-80 c-full-width text-white"
          id="personalisation-bar"
        >
          <span className="m-f-xs m-r-xxs">I want to export</span>
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
