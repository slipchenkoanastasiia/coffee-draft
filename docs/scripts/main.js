import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const introText = document.querySelector(".intro-text");
  const heroRow = document.querySelector(".hero-row");
  const leftText = document.querySelector(".left-text");
  const rightText = document.querySelector(".right-text");
  const cup = document.querySelector(".coffee-cup");
  const steam = document.querySelector(".steam");

  const tl = gsap.timeline();

  tl.to(introText, {
    duration: 1,
    opacity: 1,
    y: -10,
    ease: "power2.out",
  })
    .to(introText, {
      duration: 1,
      opacity: 0,
      delay: 2,
    })
    .add(() => {
      heroRow.classList.remove("hidden");
    })
    .to(cup, {
      duration: 1,
      scale: 1,
      ease: "back.out(1.7)",
    })
    .to(steam, {
      duration: 1.5,
      opacity: 1,
    }, "-=0.5")
    .to(leftText, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    })
    .to(rightText, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    });
});
