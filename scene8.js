const tl8 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container8",
    pin: true,
    start: "top top",
    end: "max",
    scrub: true,
    pinSpacing: false,
  },
});

console.clear();

function moveSatellites(whichDot, whichLine, x1, cx, y1, cy, dur) {
  var action = gsap
    .timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
    .to(whichLine, { attr: { x1: x1 }, duration: dur, ease: "none" })
    .to(whichDot, { attr: { cx: cx }, duration: dur, ease: "none" }, 0)
    .to(whichLine, { attr: { y1: y1 }, duration: dur, ease: "power2.out" }, 0)
    .to(whichDot, { attr: { cy: cy }, duration: dur, ease: "power2.out" }, 0);

  return action;
}

function moveCenter(whichDot, whichLineA, whichLineB, x2A, cx, y2A, cy, dur) {
  var action = gsap
    .timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
    .to(whichLineA, { attr: { x2: x2A }, duration: dur, ease: "none" })
    .to(whichLineA, { attr: { x2: x2A }, duration: dur, ease: "none" }, 0)
    .to(whichLineB, { attr: { x2: x2A }, duration: dur, ease: "none" }, 0)
    .to(whichLineB, { attr: { x2: x2A }, duration: dur, ease: "none" }, 0)
    .to(whichDot, { attr: { cx: cx }, duration: dur, ease: "none" }, 0)
    .to(whichLineA, { attr: { y2: y2A }, duration: dur, ease: "power2.out" }, 0)
    .to(whichLineA, { attr: { y2: y2A }, duration: dur, ease: "power2.out" }, 0)
    .to(whichLineB, { attr: { y2: y2A }, duration: dur, ease: "power2.out" }, 0)
    .to(whichLineB, { attr: { y2: y2A }, duration: dur, ease: "power2.out" }, 0)
    .to(whichDot, { attr: { cy: cy }, duration: dur, ease: "power2.out" }, 0);

  return action;
}

var master = gsap
  .timeline({ delay: 1, repeat: 3, yoyo: true, repeatDelay: 1 })
  .add(moveCenter(dot03, line01, line02, 300, 300, 300, 300, 3))
  .add(moveSatellites(dot01, line01, 500, 500, 60, 60, 2), 0.5)
  .add(moveSatellites(dot02, line02, 150, 150, 150, 150, 3), 1);
