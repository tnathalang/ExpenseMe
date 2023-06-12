import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

import "../css/navScreen.scss";
import AboutPage from "./AboutPage";
import { createNavScreenTimeline } from "../animations/createNavScreenTimeline";
import NavContainer from "./NavContainer";

const NavScreen: React.FunctionComponent = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();
  const [navButtonActive, setNavButtonActive] = useState(false);

  const toggleNav = () => {
    setNavButtonActive((prevState) => !prevState);
    if (tl.current?.progress() === 1) {
      tl.current?.reverse();
      document.documentElement.style.overflow = "visible";
    } else {
      tl.current?.play();
      document.documentElement.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = createNavScreenTimeline();
    });

    const navBtn = document.getElementById("menu-toggle-btn");

    if (navBtn) {
      navBtn.addEventListener("click", toggleNav);
    }

    return () => {
      ctx.revert();
      if (navBtn) {
        navBtn.removeEventListener("click", toggleNav);
      }
    };
  }, []);

  return (
    <>
      <div className="navscreen" ref={app}>
        <div className="navscreen-container">
          <div className="navbar">
            <div className="site-logo">
              Coder | Spice Lover | Bouldering enthusiast
            </div>
            <div className="menu-toggle">
              <div
                id="menu-toggle-btn"
                className={navButtonActive ? "active" : ""}
              >
                <span></span>
              </div>
            </div>
          </div>

          <AboutPage />

          <div className="nav-container">
            <NavContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavScreen;
