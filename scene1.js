const tl1 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container1",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});
