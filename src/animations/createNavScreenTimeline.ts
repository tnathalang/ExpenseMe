import gsap from "gsap";

export const createNavScreenTimeline = () => {
  const tl = gsap.timeline({ paused: true });

  tl.to(".nav-container", {
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

  return tl;
};
