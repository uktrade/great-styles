import React from "react";

export default { title: "Components" };

export const Personalisation_bar = () => (
  <div className="m-s">
    <div className="m-s p-s bg-black-20">
      <nav className="p-t-xxs p-h-xs p-b-xxs bg-white" id="personalisation-bar">
        <span className="m-f-xs m-r-xxs">I am interested in exporting</span>
        <span id="set-product-button">
          <button className="button button--primary button--round-corner">add products</button>
        </span>
        <span className="m-f-xxs m-r-xxs">to</span>
        <span id="set-country-button">
          <button className="button button--primary button--round-corner">add countries</button>
        </span>
      </nav>
      <p></p>
      <nav className="p-t-xxs p-h-xs p-b-xxs bg-white" id="personalisation-bar">
        <span className="m-f-xs m-r-xxs">I am interested in exporting</span>
        <span id="set-product-button">
          <button className="button button--primary button--round-corner">Cheese</button>
          <button className="button button--primary button--round-corner">Wine</button>
        </span>
        <span className="m-f-xxs m-r-xxs">to</span>
        <span id="set-country-button">
          <button className="button button--primary button--round-corner">France</button>
          <button className="button button--primary button--round-corner">Spain</button>
        </span>
    </nav>
  </div>
</div>
);

export const Dashboard_card = () => (
  <div className="m-s">
    <div className="m-s p-s bg-black-10">
        <div class="grid">
          <div class="c-1-2 m-b-s">
            <section class="g-card">
                <div class="g-card-header">
                    <h3 class="h-m">.g-card-header</h3>
                </div>
                .g-card - used for cards in the domestic dashboard
            </section>
            <section class="g-card" id="your-export-plan-card">
                <div class="g-card-header">
                    <h3 class="h-m">Your Learning progress</h3>
                </div>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </section>
          </div>
          <div class="c-1-2 m-b-s">
            <section class="g-card" id="your-export-plan-card">
                <div class="g-card-header">
                    <h3 class="h-m">Your export plan</h3>
                </div>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </section>
            <section class="g-card" id="your-export-plan-card">
                <div class="g-card-header">
                    <h3 class="h-m">Your favourite colour</h3>
                </div>
                <p>
                   Blue
                </p>
            </section>

          </div>
        </div>
  </div>
</div>
);
