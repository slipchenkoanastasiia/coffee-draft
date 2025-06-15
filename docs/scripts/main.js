import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");

  setTimeout(() => {
    splashScreen.classList.add("hidden");
    runIntroAnimation();
  }, 2000);

  function runIntroAnimation() {
    const heroRow = document.querySelector(".hero-row");
    const leftText = document.querySelector(".left-text");
    const rightText = document.querySelector(".right-text");
    const cup = document.querySelector(".coffee-cup");
    const header = document.querySelector(".header");

    const tl = gsap.timeline();

    tl.add(() => {
      heroRow.classList.remove("hidden");
    })
    .to(cup, {
      duration: 1,
      opacity: 1,
      filter: "blur(0px)",
      ease: "power2.out",
    })
    .to(leftText, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    })
    .to(rightText, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    })
    .to(header, {
      duration: 1,
      opacity: 1,
      y: 0,
      onStart: () => header.classList.remove("hidden"),
      ease: "power2.out"
    });
  }
});
