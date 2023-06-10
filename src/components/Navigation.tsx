import React, { useEffect, useRef, useState } from "react";
import Beach2 from "../../public/Beach2.jpg";
import { gsap } from "gsap";

import "../css/navigation.scss";
import AboutPage from "./AboutPage";

const Navigation: React.FunctionComponent = () => {
  const nav = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  //   useEffect(() => {
  //     const ctx = gsap.context(() => {
  //       tl.current = gsap
  //         .timeline()
  //         .to(".nav-container", { left: 0, ease: "Expo.easeInOut", duration: 1 })
  //         .from(
  //           ".menu > div",
  //           {
  //             duration: 0.8,
  //             y: 100,
  //             opacity: 0,
  //             ease: "Expo.easeInOut",
  //             stagger: 0.1,
  //           },
  //           "-=0.4"
  //         )
  //         .from(
  //           ".socials",
  //           {
  //             duration: 0.8,
  //             y: 100,
  //             opacity: 0,
  //             ease: "Expo.easeOut",
  //             stagger: 0.4,
  //           },
  //           "-=0.6"
  //         );
  //     }, nav);

  //     const toggleMenu = () => {
  //       setMenuOpen((prevState) => !prevState);
  //       tl.current?.reversed(!tl.current?.reversed());
  //     };

  //     const menuOpenElement = document.querySelector<HTMLElement>(".menu-open");
  //     const menuCloseElement = document.querySelector<HTMLElement>(".menu-close");

  //     if (menuOpenElement) {
  //       menuOpenElement.addEventListener("click", toggleMenu);
  //     }

  //     if (menuCloseElement) {
  //       menuCloseElement.addEventListener("click", toggleMenu);
  //     }

  //     return () => {
  //       if (menuOpenElement) {
  //         menuOpenElement.removeEventListener("click", toggleMenu);
  //       }

  //       if (menuCloseElement) {
  //         menuCloseElement.removeEventListener("click", toggleMenu);
  //       }

  //       ctx.revert();
  //     };
  //   }, []);

  return (
    <div className="navigation" ref={nav}>
      <div className="menu-open">menu</div>
      <div className={`nav-container ${menuOpen ? "open" : ""}`}>
        {menuOpen && <div className="menu-close">close</div>}
        <div className="socials">
          <span>facebook</span>
          <span>instagram</span>
        </div>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <div className="menu__item">
            <a href="" className="menu__item-link">
              Home
            </a>
            <img src={Beach2} alt="" className="menu__item-img" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>Home - Home - Home - Home</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a href="" className="menu__item-link">
              Showcase
            </a>
            <img src={Beach2} alt="" className="menu__item-img" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>Showcase - Showcase - Showcase - Showcase</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a href="" className="menu__item-link">
              About
            </a>
            <img src={Beach2} alt="" className="menu__item-img" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>About - About - About - About</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a href="" className="menu__item-link">
              Contact
            </a>
            <img src={Beach2} alt="" className="menu__item-img" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>Contact - Contact - Contact - Contact</span>
              </div>
            </div>
          </div>
        </div>
        {menuOpen && <h1>hello</h1>}
      </div>
    </div>
  );
};

export default Navigation;
