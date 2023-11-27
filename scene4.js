const tl4 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container4",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl4.fromTo(
  "#black",
  {
    opacity: 1,
    duration: 3,
  },
  {
    opacity: 0,
    duration: 3,
  }
);

tl4.fromTo(
  "#goodluck",
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

tl4.fromTo(
  "#goodluck",
  {
    y: 0,
    opacity: 1,
    duration: 3,
  },
  {
    y: -20,
    opacity: 0,
    duration: 3,
  }
);

tl4.fromTo(
  "#black",
  {
    opacity: 0.1,
    duration: 4,
  },
  {
    opacity: 0.4,
    duration: 4,
  },
  "<+=1"
);

tl4.fromTo(
  "#ten",
  {
    opacity: 0,
    duration: 3,
  },
  {
    opacity: 1,
    duration: 3,
  }
);

tl4.fromTo(
  "#fish1",
  {
    x: -100,
    opacity: 0,
    duration: 3,
  },
  {
    x: 0,
    opacity: 1,
    duration: 3,
  },
  "<+=1"
);

tl4.fromTo(
  "#fish4",
  {
    x: 100,
    opacity: 0,
    duration: 3,
  },
  {
    x: 0,
    opacity: 1,
    duration: 3,
  },
  "<+=1"
);

tl4.fromTo(
  "#fish5",
  {
    x: 100,
    opacity: 0,
    duration: 3,
  },
  {
    x: 0,
    opacity: 1,
    duration: 3,
  },
  "<+=1"
);

tl4.fromTo(
  "#ten",
  {
    opacity: 1,
    duration: 3,
  },
  {
    opacity: 0,
    duration: 3,
  }
);

tl4.fromTo(
  "#twenty",
  {
    opacity: 0,
    duration: 3,
  },
  {
    opacity: 1,
    duration: 3,
  }
);

tl4.fromTo(
  "#twenty",
  {
    opacity: 1,
    duration: 3,
  },
  {
    opacity: 0,
    duration: 3,
  }
);

tl4.fromTo(
  "#thirty",
  {
    opacity: 0,
    duration: 3,
  },
  {
    opacity: 1,
    duration: 3,
  }
);

tl4.fromTo(
  "#fish2",
  {
    x: -100,
    opacity: 0,
    duration: 3,
  },
  {
    x: 0,
    opacity: 1,
    duration: 3,
  },
  "<+=1"
);

tl4.fromTo(
  "#fish3",
  {
    x: -100,
    opacity: 0,
    duration: 3,
  },
  {
    x: 0,
    opacity: 1,
    duration: 3,
  },
  "<+=1"
);

tl4.fromTo(
  "#thirty",
  {
    opacity: 1,
    duration: 3,
  },
  {
    opacity: 0,
    duration: 3,
  }
);

tl4.fromTo(
  "#thirtyone",
  {
    opacity: 0,
    duration: 3,
  },
  {
    opacity: 1,
    duration: 3,
  }
);

tl4.fromTo(
  "#thirtyone",
  {
    opacity: 1,
    duration: 3,
  },
  {
    opacity: 0,
    duration: 3,
  },
  "<+=1"
);

console.clear();
const fish1 = document.querySelector("#fish1");
const target1 = document.querySelector("#fish1");

fish1.addEventListener("click", () => gsap.set(target1, { opacity: 0 }));

const fish2 = document.querySelector("#fish2");
const target2 = document.querySelector("#fish2");

fish2.addEventListener("click", () => gsap.set(target2, { opacity: 0 }));

const fish3 = document.querySelector("#fish3");
const target3 = document.querySelector("#fish3");

fish3.addEventListener("click", () => gsap.set(target3, { opacity: 0 }));

const fish4 = document.querySelector("#fish4");
const target4 = document.querySelector("#fish4");

fish4.addEventListener("click", () => gsap.set(target4, { opacity: 0 }));

const fish5 = document.querySelector("#fish5");
const target5 = document.querySelector("#fish5");

fish5.addEventListener("click", () => gsap.set(target5, { opacity: 0 }));
