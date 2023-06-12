import { useEffect, useRef } from "react";

import beachGif from "../../public/Beachgif.gif";
import Beach2 from "../../public/Beach2.jpg";
import "../css/aboutPage.scss";
import Header from "./Header";

const AboutPage: React.FunctionComponent = () => {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { pageX, pageY } = event;

      if (cursor.current) {
        cursor.current.animate(
          {
            left: `${pageX}px`,
            top: `${pageY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="container-about about-page">
        <div id="mouse-movement" ref={cursor} />
        <div id="blur">
          <div className="hero">
            <div>
              <Header />
            </div>
            <div className="image-wrapper">
              <img src={beachGif} alt="" />
            </div>
          </div>
          <div className="section-0">
            <p>Nothing ventured,</p>
            <p>nothing gained.</p>
            <cite>— Japanese proverb</cite>
          </div>
          <div className="section-1">
            <div>
              <img
                style={{ backgroundImage: `url(${Beach2})` }}
                className="image-mask"
              />
            </div>
            <div className="introduction">
              <p>
                Hey, I'm Akira <br />
                I'm a passionate full-stack developer who loves exploring new
                things. When I'm not coding, you'll find me at the climbing gmm,
                challenging myself, failing and falling multiple times. I love
                travelling, I have a deep appreciation for spicy food and enjoy
                indulging in new flavors wherever I go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
