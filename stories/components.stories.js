import React from "react";

import "../styles/great-styles.css";

export default { title: "Components" };

export const Personalisation_bar = () => (
  <div class="m-s">
    <div class="m-s p-s bg-black-20">
      <nav class="p-t-xxs p-h-xs p-b-xxs bg-white" id="personalisation-bar">
        <span class="m-f-xs m-r-xxs">I am interested in exporting</span>
        <span id="set-product-button">
          <button class="button button--primary button--round-corner">add products</button>
        </span>
        <span class="m-f-xxs m-r-xxs">to</span>
        <span id="set-country-button">
          <button class="button button--primary button--round-corner">add countries</button>
        </span>
      </nav>
      <p></p>
      <nav class="p-t-xxs p-h-xs p-b-xxs bg-white" id="personalisation-bar">
        <span class="m-f-xs m-r-xxs">I am interested in exporting</span>
        <span id="set-product-button">
          <button class="button button--primary button--round-corner">Cheese</button>
          <button class="button button--primary button--round-corner">Wine</button>
        </span>
        <span class="m-f-xxs m-r-xxs">to</span>
        <span id="set-country-button">
          <button class="button button--primary button--round-corner">France</button>
          <button class="button button--primary button--round-corner">Spain</button>
        </span>
    </nav>
  </div>
</div>
);
