import React from "react";

export default {
  title: "Tables",
};

export const Tabbed_table = () => (
  <div className="m-v-l bg-black-10 p-s">
    <div class="tabs">
      <ol class="tab-list body-m m-f-m">
        <button type="button" class="tab-list-item m-r-s tab-list-active">
          POPULATION
        </button>
        <button type="button" class="tab-list-item m-r-s ">
          ECONOMY
        </button>
      </ol>
      <div class="tab-content">
        <div class="table market-details m-h-m bg-white p-v-s p-b-s p-h-s radius">
          <div>
            <span>
              <table class="m-v-0 border-blue-deep-20 valign-middle">
                <thead>
                  <tr>
                    <th class="body-s-b">&nbsp;</th>
                    <th class="body-s-b">Total Population </th>
                    <th class="body-s-b">Access to internet</th>
                    <th class="body-s-b">Living in urban areas</th>
                    <th class="body-s-b">Living in rural areas</th>
                    <th class="body-s-b">Consumer Price Index</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="market-Canada">
                    <td class="p-v-xs name">
                      <div style={{ whiteSpace: "nowrap" }}>
                        <button
                          type="button"
                          class="button button--only-icon button--tertiary button--small m-r-xxs"
                          data-id="CA"
                          aria-label="Remove Canada"
                        >
                          <i class="fa fa-trash-alt icon--border"></i>
                        </button>
                        <span class="body-l-b" id="market-Canada">
                          Canada
                        </span>
                      </div>
                    </td>
                    <td class="total-population">38.1 million</td>
                    <td class="internet-usage">91%</td>
                    <td class="urban-population">
                      <h1>81% </h1>
                      <span class="body-m">31 million</span>
                    </td>
                    <td class="rural-population">
                      <h1>18% </h1>
                      <span class="body-m">7 million</span>
                    </td>
                    <td>116.76</td>
                  </tr>
                  <tr id="market-Netherlands">
                    <td class="p-v-xs name">
                      <div style={{ whiteSpace: "nowrap" }}>
                        <button
                          type="button"
                          class="button button--only-icon button--tertiary button--small m-r-xxs"
                          data-id="NL"
                          aria-label="Remove Netherlands"
                        >
                          <i class="fa fa-trash-alt icon--border"></i>
                        </button>
                        <span class="body-l-b" id="market-Netherlands">
                          Netherlands
                        </span>
                      </div>
                    </td>
                    <td class="total-population">17.2 million</td>
                    <td class="internet-usage">95%</td>
                    <td class="urban-population">
                      <h1>93% </h1>
                      <span class="body-m">16 million</span>
                    </td>
                    <td class="rural-population">
                      <h1>8% </h1>
                      <span class="body-m">1.3 million</span>
                    </td>
                    <td>115.91</td>
                  </tr>
                </tbody>
              </table>
              <p class="source-attribution body-s m-r-s">
                <strong class="body-s-b">Population data</strong>:&nbsp;
                <a
                  href="https://population.un.org/wpp/Download/Standard/Population/"
                  target="_blank"
                >
                  United Nations
                </a>
                &nbsp;CC BY 3.0 IGO.&nbsp;
                <strong class="body-s-b">Urban and Rural Populations</strong>
                :&nbsp;
                <a
                  href="https://population.un.org/wup/Download/"
                  target="_blank"
                >
                  United Nations
                </a>
                &nbsp;CC BY 3.0 IGO.&nbsp;
                <strong class="body-s-b">Access to internet</strong>:&nbsp;
                <a
                  href="https://www.itu-ilibrary.org/science-and-technology/data/world-telecommunication-ict-indicators-database_pub_series/database/2a8478f7-en"
                  target="_blank"
                >
                  International Telecommunications Union
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
