import React from "react";

export default { title: "Components" };

export const Header_not_signed_in = () => (    
  <div style={{minWidth:'1200px'}}>
    <div>
      <header className="magna-header bg-blue-deep-90 text-white" id="header" dir="ltr" data-ga-section="header">
        <nav>
          <a id="header-logo-link" className="m-h-s m-v-xxs" href="/">
            <img className="header-logo" src="/images/logo.svg" alt="Exporting is Great" id="header-logo-exporting-is-great"/>
          </a>
          <div className="header-links">
            <ul id="services-area" className="services-area">
              <li><a id="header-link-learning" className="button button--secondary active" href="/learn/categories/">Learn to export</a></li>
              <li><a id="header-link-markets" className="button button--secondary" href="/find-your-target-market/ ">Target a market</a></li>
              <li><a id="header-link-exporting-plan" className="button button--secondary" href="/export-plan/dashboard/">Make an export plan</a></li>
              <li><a id="header-sign-up-link" href="/signup/" className="button button--primary">Sign up</a></li>
              <li id="header-link-user-profile" className="m-v-xs m-l-xs m-r-s">
                <div style={{lineHeight:'0'}}>
                  <button className="avatar">
                  <i className="fas fa-caret-down text-blue-deep-80" style={{fontSize: '30px'}}/>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  </div>
)

export const Header_signed_in = () => (
  <div style={{minWidth:'1200px'}}>
    <div className="m-v-m">
      <header className="magna-header bg-blue-deep-90 text-white" id="header" dir="ltr" data-ga-section="header">
        <nav>
          <a id="header-logo-link" className="m-h-s m-v-xxs" href="/">
            <img className="header-logo" src="/images/logo.svg" alt="Exporting is Great" id="header-logo-exporting-is-great"/>
          </a>
          <div className="header-links">
            <ul id="services-area" className="services-area">
              <li><a id="header-link-learning" className="button button--secondary" href="/learn/categories/">Learn to export</a></li>
              <li><a id="header-link-markets" className="button button--secondary" href="/find-your-target-market/ ">Target a market</a></li>
              <li><a id="header-link-exporting-plan" className="button button--secondary" href="/export-plan/dashboard/">Make an export plan</a></li>
             <li id="header-link-user-profile" className="m-v-xs m-l-xs m-r-s">
                <div style={{lineHeight: '0'}}>
                  <button className="avatar"><i className="fas fa-user text-blue-deep-80"/></button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <nav className="p-v-xs p-h-xs bg-blue-deep-80 c-full-width text-white" id="personalisation-bar">
          <span className="m-f-xs m-r-xxs">I want to learn about exporting</span>
          <span id="set-product-button" data-text="{{product_name}}">
            <button className="tag tag--tertiary tag--icon">add product<i className="fas fa-plus"></i></button>
          </span>
          <span className="m-f-xxs m-r-xxs">to</span>
          <span id="set-country-button" data-text="{{market.country_name}}">
            <button className="tag tag--tertiary tag--icon">add country<i className="fas fa-plus"></i></button>
          </span>
      </nav>
    </div>
    <div className="m-v-m">
        <header className="magna-header bg-blue-deep-90 text-white" id="header" dir="ltr" data-ga-section="header">
          <nav>
            <a id="header-logo-link" className="m-h-s m-v-xxs" href="/">
              <img className="header-logo" src="/images/logo.svg" alt="Exporting is Great" id="header-logo-exporting-is-great"/>
            </a>
            <div className="header-links">
              <ul id="services-area" className="services-area">
                <li><a id="header-link-learning" className="button button--secondary" href="/learn/categories/">Learn to export</a></li>
                <li><a id="header-link-markets" className="button button--secondary" href="/find-your-target-market/ ">Target a market</a></li>
                <li><a id="header-link-exporting-plan" className="button button--secondary" href="/export-plan/dashboard/">Make an export plan</a></li>
                <li id="header-link-user-profile" className="m-v-xs m-l-xs m-r-s">
                  <div style={{lineHeight: '0'}}>
                    <button className="avatar"><i className="fas fa-user text-blue-deep-80"/></button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <nav className="p-v-xs p-h-xs bg-blue-deep-80 c-full-width text-white" id="personalisation-bar">
            <span className="m-f-xs m-r-xxs">I want to learn about exporting</span>
            <span id="set-product-button" data-text="{{product_name}}">
              <button className="tag tag--icon">Cheese<i className="fas fa-edit"></i></button>
            </span>
            <span className="m-f-xxs m-r-xxs">to</span>
            <span id="set-country-button" data-text="{{market.country_name}}">
              <button className="tag tag--icon">Italy<i className="fas fa-edit"></i></button>
            </span>
        </nav>
      </div>
  </div>
)

export const Header_with_menu = () => {
  const modalMenu = (
    <div style={{position:'absolute',zIndex:'2', top:'3px', right:'14px'}}>
      <div className="ReactModal__Content ReactModal__Content--after-open modal-menu" tabindex="-1" role="dialog" style={{marginRight: '-29px', marginTop: '15px', top: '60px', right: '65px', opacity: '1'}}>
        <div className="h-xs p-t-xxs">Hi Robert</div>
        <ul className="menu-items">
          <li>
            <a href="/dashboard/" className="link">
              <i className="fa fa-tachometer-alt"/>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/learn/categories/" className="link">
              <i className="fa fa-book"/>
              <span>Learn to export</span>
            </a>
          </li>
          <li>
            <a href="/find-your-target-market/" className="link">
              <i className="fa fa-map-marker-alt"/>
              <span>Target a market</span>
            </a>
          </li>
          <li>
            <a href="/export-plan/dashboard/" className="link">
              <i className="fa fa-folder"/>
              <span>Make an export plan</span>
            </a>
          </li>
          <hr className="m-v-xxs"/>
          <li>
            <a href="https://www.great.gov.uk/contact/feedback/" target="_blank" className="link">
              <i className="fa fa-comment"/>
              <span>Send a feedback email</span>
            </a>
          </li>
          <li>
            <a href="#" className="link"><i className="fa fa-arrow-right"></i><span>Sign out</span></a>
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <div style={{minWidth:'1200px'}}>
      <div style={{position:'relative',paddingBottom:'450px'}}>
        <header className="magna-header bg-blue-deep-90 text-white" id="header" dir="ltr" data-ga-section="header">
          <nav>
            <a id="header-logo-link" className="m-h-s m-v-xxs" href="/">
              <img className="header-logo" src="/images/logo.svg" alt="Exporting is Great" id="header-logo-exporting-is-great"/>
            </a>
            <div className="header-links">
              <ul id="services-area" className="services-area">
                <li><a id="header-link-learning" className="button button--secondary" href="/learn/categories/">Learn to export</a></li>
                <li><a id="header-link-markets" className="button button--secondary" href="/find-your-target-market/ ">Target a market</a></li>
                <li><a id="header-link-exporting-plan" className="button button--secondary" href="/export-plan/dashboard/">Make an export plan</a></li>
                <li id="header-link-user-profile" className="m-v-xs m-l-xs m-r-s">
                  <div style={{lineHeight: '0'}}>
                    <button className="avatar"><i className="fas fa-user text-blue-deep-80"/></button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <nav className="p-v-xs p-h-xs bg-blue-deep-80 c-full-width text-white" id="personalisation-bar">
            <span className="m-f-xs m-r-xxs">I want to learn about exporting</span>
            <span id="set-product-button" data-text="{{product_name}}">
              <button className="tag tag--icon">Cheese<i className="fas fa-edit"></i></button>
            </span>
            <span className="m-f-xxs m-r-xxs">to</span>
            <span id="set-country-button" data-text="{{market.country_name}}">
              <button className="tag tag--icon">Italy<i className="fas fa-edit"></i></button>
            </span>
        </nav>
        {modalMenu}
      </div>

    </div>
  )
};

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
