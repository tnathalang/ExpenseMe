import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Preloader from "./Preloader";
import createPreloadTimeline from "../animations/createPreloadTimeline";
import NavScreen from "./NavScreen";

const LandingPage: React.FunctionComponent = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();
  const storyRef = useRef<HTMLDivElement>(null);
  const [showStory, setShowStory] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = createPreloadTimeline(setShowStory);
    });

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
          <Preloader />
        </div>
      )}

      {showStory && (
        <>
          <div ref={storyRef}>
            <NavScreen />
          </div>
        </>
      )}
    </>
  );
};

export default LandingPage;
