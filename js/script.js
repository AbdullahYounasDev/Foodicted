const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const cardsContainer = document.querySelector(".cards");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > 6) {
    currentIndex = 0;
  }
  updateSlider();
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 6;
  }
  updateSlider();
});

function updateSlider() {
  const cardWidth = document.querySelector(".card").offsetWidth;
  const newPosition = -currentIndex * cardWidth;
  console.log(-currentIndex);
  console.log(newPosition);
  cardsContainer.style.transform = `translateX(${newPosition}px)`;
}

updateSlider();

// Gsap Animations
const tl = gsap.timeline();
tl.from(".hero-top", {
  opacity: 0,
  y: -20,
  duration: 0.4,
  stagger: 0.2,
});
tl.from(".hero-left", {
  opacity: 0,
  x: -20,
  duration: 0.4,
  stagger: 0.2,
});
tl.from(".main-img", {
  opacity: 0,
  duration: 0.4,
});
tl.from(".hero-sub-img", {
  opacity: 0,
  x: 20,
  duration: 0.4,
  stagger: 0.2,
});

tl.from(".main-btn", {
  x: -30,
  duration: 0.5,
  yoyo: true,
  repeat: -1,
  ease: "power1",
});
tl.from(".hero-sub-img1", {
  scale: 0.9,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  ease: "power1",
});
// Seconde Sec
tl.from(".seconde-sec-text", {
  opacity: 0,
  duration: 0.1,
  scrollTrigger: {
    trigger: "#second-section",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});

tl.from(".seconde-sec", {
  opacity: 0,
  y: -400,
  duration: 3,
  stagger: 1,
  scrollTrigger: {
    trigger: "#second-section",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
// Third Sec
tl.from(".third-sec-img", {
  x: -100,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#third-sec",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
tl.from(".third-sec-content", {
  opacity: 0,
  x: 100,
  duration: 3,
  stagger: 1,
  scrollTrigger: {
    trigger: "#third-sec",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
// Fourth Sec
tl.from(".fourth-sec-content", {
  x: -100,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#fourth-sec",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
tl.from(".fourth-sec-img", {
  opacity: 0,
  x: 100,
  duration: 3,
  stagger: 1,
  scrollTrigger: {
    trigger: "#fourth-sec",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
// fifth sec
tl.from(".fifth-sec-img", {
  x: 100,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#fifth-sec",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
tl.from(".fifth-sec-content", {
  opacity: 0,
  x: -100,
  duration: 3,
  stagger: 1,
  scrollTrigger: {
    trigger: "#fifth-sec",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
// footer sec
tl.from(".foot-top", {
  opacity: 0,
  y: -100,
  duration: 3,
  stagger: 1,
  scrollTrigger: {
    trigger: "#footer-sec",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 3,
  },
});
tl.from(".foot-left", {
  opacity: 0,
  x: -100,
  duration: 5,
  stagger: 5,
  scrollTrigger: {
    trigger: "#footer-sec",
    scroller: "body",
    start: "top 0%",
    end: "top 0%",
    scrub: 5,
  },
});
tl.from(".foot-right", {
  opacity: 0,
  x: 100,
  duration: 5,
  stagger: 5,
  scrollTrigger: {
    trigger: "#footer-sec",
    scroller: "body",
    start: "top 0%",
    end: "top 0%",
    scrub: 5,
  },
});
tl.from(".foot-end", {
  opacity: 0,
  y: 100,
  duration: 3,
  stagger: 5,
  scrollTrigger: {
    trigger: "#footer-sec",
    scroller: "body",
    start: "top 0%",
    end: "top 0%",
    scrub: 5,
  },
});
