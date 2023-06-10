import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import "../css/landingPage.scss";
import AboutPage from "./AboutPage";

const LandingPage: React.FunctionComponent = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();
  const storyRef = useRef<HTMLDivElement>(null);
  const [showStory, setShowStory] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(".clip-top, .clip-bottom", {
          duration: 2,
          height: "50vh",
          ease: "power4.inOut",
        })
        .from(
          ".clip-top .marquee, .clip-bottom .marquee",
          {
            duration: 5,
            left: "100%",
            ease: "power3.inOut",
          },
          "<"
        )
        .from(
          ".clip-center .marquee",
          {
            duration: 5,
            left: "-50%",
            ease: "power3.inOut",
          },
          "<"
        )
        .to(
          ".marquee",
          {
            duration: 3.5,
            top: "50%",
            ease: "power4.inOut",
          },
          "<"
        )
        .to(
          ".clip-top",
          {
            duration: 2,
            delay: 3,
            clipPath: "inset(0 0 100% 0)",
            ease: "power4.inOut",
          },
          "<"
        )
        .to(
          ".clip-bottom",
          {
            duration: 2,
            clipPath: "inset(100% 0 0 0)",
            ease: "power4.inOut",
          },
          "<"
        )
        .call(() => {
          setShowStory(true);
        });
    }, app);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showStory) {
      gsap.from(storyRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [showStory]);

  return (
    <>
      {!showStory && (
        <div className="main loading" ref={app}>
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
        </div>
      )}

      {showStory && (
        <>
          <div ref={storyRef}>
            <AboutPage />
          </div>
        </>
      )}
    </>
  );
};

export default LandingPage;
