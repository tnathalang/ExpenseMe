import React from "react";

import "../css/landingPage.scss";

const Preloader: React.FunctionComponent = () => {
  return (
    <div className="loader">
      <div className="loader-clip clip-top">
        <div className="marquee">
          <div className="marquee-container">
            <span>Hello</span>
            <span>Hello</span>
            Hello
            <span>Hello</span>
            <span>Hello</span>
          </div>
        </div>
      </div>
      <div className="loader-clip clip-bottom">
        <div className="marquee">
          <div className="marquee-container">
            <span>Hello</span>
            <span>Hello</span>
            Hello
            <span>Hello</span>
            <span>Hello</span>
          </div>
        </div>
      </div>
      <div className="clip-center">
        <div className="marquee">
          <div className="marquee-container">
            <span>Hello</span>
            <span>Hello</span>
            Hello
            <span>Hello</span>
            <span>Hello</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
