import React from "react";

import "../css/landingPage.scss";

const NavContainer: React.FunctionComponent = () => {
  return (
    <>
      <div className="nav">
        <div className="col flex">
          <div className="nav-logo">c/</div>
          <div className="nav-socials">
            <a href="#">Behance</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Medium</a>
          </div>
        </div>
        <div className="col">
          <div className="nav-link">
            <a href="#">Work</a>
            <div className="nav-item-wrapper"></div>
          </div>
          <div className="nav-link">
            <a href="#">About</a>
            <div className="nav-item-wrapper"></div>
          </div>
          <div className="nav-link">
            <a href="#">Contact</a>
            <div className="nav-item-wrapper"></div>
          </div>
        </div>
      </div>

      <div className="nav-footer">
        <div className="legal">
          <h5>Made with a lot of coffee in 2023</h5>
        </div>
        <div className="contact">
          <a href="#">atnathalang@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default NavContainer;
