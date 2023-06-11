import gsap from "gsap";

const createPreloadTimeline = (
  setShowStory: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const tl = gsap.timeline();

  tl.from(".clip-top, .clip-bottom", {
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

  return tl;
};

export default createPreloadTimeline;
