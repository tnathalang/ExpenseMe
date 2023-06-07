import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Power4, Linear, Back } from "gsap/all";
import imagesLoaded from "imagesloaded";

// import Beach from "../../public/Beach1.jpg";
import Beachgif from "../../public/Beachgif.gif";
import "../css/preloader.scss";
import Collection from "./Collection";

const Preloader: React.FunctionComponent = () => {
  const loadedCountRef = useRef(0);
  const imagesToLoadRef = useRef<Element[] | null>(null);
  const loadingProgressRef = useRef(0);
  const progressTlRef = useRef<gsap.core.Timeline | null>(null);

  const loadProgress = () => {
    loadedCountRef.current++;
    loadingProgressRef.current =
      loadedCountRef.current / (imagesToLoadRef.current?.length ?? 0);
    gsap.to(progressTlRef.current, {
      progress: loadingProgressRef.current,
      ease: Linear.easeNone,
      duration: 0.2,
    });
  };

  const progressUpdate = () => {
    const progress = progressTlRef.current?.progress();

    loadingProgressRef.current = Math.round((progress ?? 0) * 100);
    const loaderText = document.querySelector(".loader-text");
    if (loaderText) {
      loaderText.textContent = loadingProgressRef.current + "%";
    }
  };

  const loadComplete: gsap.Callback = () => {
    const preloaderOutTl = gsap.timeline();

    preloaderOutTl
      .to(".loader-wrapper", {
        duration: 0.4,
        autoAlpha: 0,
        ease: Back.easeOut,
      })
      .set("body", { className: "-=is-loading" })
      .set("html", { className: "+=is-intro-leave" })
      .set("#intro", { className: "+=is-loaded" })
      .to("#site-loader", {
        duration: 2,
        yPercent: 100,
        ease: Power4.easeInOut,
      })
      .set("#site-loader", { className: "+=is-hidden" });

    return;
  };

  useEffect(() => {
    progressTlRef.current = gsap.timeline({
      paused: true,
      onUpdate: progressUpdate,
      onComplete: loadComplete,
    });

    progressTlRef.current.to(".loader-progress span", {
      duration: 1,
      width: 100,
      ease: Linear.easeNone,
    });

    imagesToLoadRef.current = Array.from(
      document.getElementsByClassName("js-img-load")
    );

    const containerElement = document.querySelector(".container") as Element;
    imagesLoaded(containerElement, {}, () => loadProgress());
  }, []);

  return (
    <>
      <div id="intro" className="hero">
        <div className="container">
          <div className="hero-img">
            <img className="js-img-load" src={Beachgif} />
          </div>

          <Collection />
        </div>
        <div id="site-loader" className="loader">
          <div className="loader-wrapper">
            <p className="loader-text">0%</p>
            <div className="loader-bar">
              <span className="loader-progress" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
