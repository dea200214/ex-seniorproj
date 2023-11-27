const tl3 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container3",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl3.fromTo(
  "#textdiving",
  {
    y: 0,
    opacity: 0,
    duration: 3,
  },
  {
    y: 20,
    opacity: 1,
    duration: 3,
  }
);

tl3.fromTo(
  "#diving1",
  {
    y: 0,
    opacity: 0,
    duration: 3,
  },
  {
    y: 20,
    opacity: 1,
    duration: 3,
  }
);

tl3.fromTo(
  "#diving2",
  {
    y: 0,
    opacity: 0,
    duration: 3,
  },
  {
    y: 20,
    opacity: 1,
    duration: 3,
  }
);

tl3.fromTo(
  "#diving3",
  {
    y: 0,
    opacity: 0,
    duration: 3,
  },
  {
    y: 20,
    opacity: 1,
    duration: 3,
  }
);

tl3.fromTo(
  "#textdiving, #diving1, #diving2, #diving3",
  {
    y: 0,
    opacity: 1,
    duration: 3,
  },
  {
    y: -30,
    opacity: 0,
    duration: 3,
  }
);
