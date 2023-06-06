import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Power4, Linear, Back } from "gsap/all";
import imagesLoaded from "imagesloaded";

import Beach from "../../public/IMG_3400.jpg";
import Beach2 from "../../public/IMG_3071.jpg";
import "../css/preloader.scss";

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
      duration: 2,
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
        duration: 1.2,
        autoAlpha: 0,
        ease: Back.easeInOut,
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
            <img className="js-img-load" src={Beach} />
          </div>

          <div className="cols">
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
                  aspernatur debitis asperiores. Ea sunt eos, dolor nam cumque
                  unde nemo itaque nihil temporibus laborum corporis, natus
                  magnam libero fuga harum.
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
                Trying <br />
                New <br /> things <br />
                trial 1
              </div>
            </div>
          </div>
        </div>
        <div id="site-loader" className="loader">
          <div className="loader-wrapper">
            <p className="loader-text">0%</p>
            <div className="loader-bar">
              <span className="loader-progress" />
            </div>
          </div>
          <div className="loader-overlay u-absolute u-pos-tl u-fit" />
        </div>
      </div>
    </>
  );
};

export default Preloader;
