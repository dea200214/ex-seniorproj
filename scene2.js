const tl2 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container2",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});
