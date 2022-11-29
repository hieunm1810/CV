import React from "react";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

import poochCare from "../../assets/imgs/spooch_care.png";
import sass from "../../assets/imgs/sass.png";
import call_api from "../../assets/imgs/call_api.png";
import react_js from "../../assets/imgs/react_js.png";
import { useState } from "react";
const portfolioArr = [
  {
    title: "Pooch Care",
    des: "A template clonning with Bootstrap",
    img: poochCare,
    url: "https://pooch-care-project-alpha.vercel.app/",
    tab: "html-tab-pane",
  },
  {
    title: "Sass project",
    des: "A template clonning using Sass with Bootstrap",
    img: sass,
    url: "https://sass-tawny.vercel.app/",
    tab: "html-tab-pane",
  },
  {
    title: "Basic shoes shop",
    des: "A shoes shop basic template using Javascript to call Api",
    img: call_api,
    url: "https://capstone-api-shoes-shop.vercel.app/",
    tab: "react-tab-pane",
  },
  {
    title: "Upgraded shoes shop",
    des: "A upgraded version of shoes shop using React JS",
    img: react_js,
    url: "https://bc-28-capstone3-react.vercel.app/",
    tab: "react-tab-pane",
  },
];

export default function Porfolio() {
  const [tab, setTab] = useState("");
  return (
    <div className="porfolio">
      <div className="container">
        <div>
          <div className="title__section">
            <span className="title">Portfolio</span>
            <span className="underline"></span>
          </div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="all-tab"
                data-bs-toggle="tab"
                data-bs-target=".all-tab-pane"
                type="button"
                role="tab"
                aria-controls="all-tab-pane"
                aria-selected="true"
                onClick={() => {
                  setTab("all-tab-pane");
                }}
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="html-tab"
                data-bs-toggle="tab"
                data-bs-target=".html-tab-pane"
                type="button"
                role="tab"
                aria-controls="html-tab-pane"
                aria-selected="false"
                onClick={() => {
                  setTab("html-tab-pane");
                }}
              >
                HTML &amp; CSS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="react-tab"
                data-bs-toggle="tab"
                data-bs-target=".react-tab-pane"
                type="button"
                role="tab"
                aria-controls="react-tab-pane"
                aria-selected="false"
                onClick={() => {
                  setTab("react-tab-pane");
                }}
              >
                React JS
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="row">
              {portfolioArr.map((e, index) => {
                return <PortfolioCard portfolio={e} tabPane={tab} key={index} />;
              })}
            </div>
            {/* <div
              class="tab-pane fade show active"
              id="all-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div className="row">
                {portfolioArr.map((e, index) => {
                  return (
                    <div className="col-4">
                      <PortfolioCard portfolio={e} styles={tab === "all" ? styles.zoomIn : styles.zoomOut} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="html-tab-pane"
              role="tabpanel"
              aria-labelledby="html-tab"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="react-tab-pane"
              role="tabpanel"
              aria-labelledby="react-tab"
              tabindex="0"
            >
              ...
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
