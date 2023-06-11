import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

import "../css/navScreen.scss";
import AboutPage from "./AboutPage";

const NavScreen: React.FunctionComponent = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();
  const [navButtonActive, setNavButtonActive] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(".nav-container", {
          duration: 0.2,
          autoAlpha: 1,
          delay: 0.1,
        })
        .to(
          ".site-logo",
          {
            duration: 0.2,
            color: "black",
          },
          "-=0.1"
        )
        .from(".flex > div", {
          duration: 0.4,
          opacity: 0,
          y: 10,
          stagger: {
            amount: 0.04,
          },
        })
        .to(
          ".nav-link > a",
          {
            duration: 0.8,
            top: 0,
            ease: "power2.inOut",
            stagger: {
              amount: 0.1,
            },
          },
          "-=0.4"
        )
        .from(
          ".nav-footer",
          {
            duration: 0.3,
            opacity: 0,
          },
          "-=0.5"
        )
        .reverse();
    });

    const toggleNav = () => {
      setNavButtonActive((prevState) => !prevState);
      if (tl.current?.progress() === 1) {
        tl.current?.reverse();
      } else {
        tl.current?.play();
      }
    };

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
          </div>
        </div>
      </div>
    </>
  );
};

export default NavScreen;
