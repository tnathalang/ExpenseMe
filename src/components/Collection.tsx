import React, { useEffect, useRef } from "react";
import Beach2 from "../../public/Beach2.jpg";
import "../css/preloader.scss";
import HeroText from "./HeroText";
import { gsap } from "gsap";

const Collection: React.FunctionComponent = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  return (
    <div className="cols" ref={app}>
      <div className="col col-left">
        <div className="copy">
          <div className="header">Website 2023</div>
          <div className="sub-header">
            Building collection of portfolio websites
          </div>
          <div className="img-wrapper">
            <img src={Beach2} />
          </div>
          <div className="info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
            aspernatur debitis asperiores. Ea sunt eos, dolor nam cumque unde
            nemo itaque nihil temporibus laborum corporis, natus magnam libero
            fuga harum.
          </div>
          <div className="footer">
            <div className="footer-item">Brand new</div>
            <div className="footer-item">----------</div>
            <div className="footer-item">World</div>
          </div>
        </div>
      </div>
      <div className="col col-right">
        <div className="header">
          <HeroText />
        </div>
      </div>
    </div>
  );
};

export default Collection;
