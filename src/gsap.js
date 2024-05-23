
// Preloader Screen
gsap.to(".preloader", {
  x: -5000
  duration: 3,
  delay: 3.6,
});

// Hero Title
gsap.fromTo(
  ".hero__title__container",
  {
    opacity: 0,
  },
  { opacity: 1,
    duration: 1,
    delay: 3.8
  }
);

// Hero Box Animation
gsap.fromTo(
  ".hero__box",
  {
    y: 200,
  },
  {
    y: 0,
    duration: 1.5,
    delay: 3.9, 
  }
)
