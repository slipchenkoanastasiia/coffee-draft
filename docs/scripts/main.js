import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const introText = document.querySelector(".intro-text");
  const heroRow = document.querySelector(".hero-row");
  const leftText = document.querySelector(".left-text");
  const rightText = document.querySelector(".right-text");
  const cup = document.querySelector(".coffee-cup");
  const steam = document.querySelector(".steam");
  const header = document.querySelector(".header");

  const tl = gsap.timeline();

  tl.to(introText, {
    duration: 1,
    opacity: 1,
    y: -10,
    ease: "power2.out",
  })
.to(introText, {
  duration: 1.2,
  opacity: 0,
  y: 15,
  delay: 0.5,
  ease: "back.in(2)",  
})

    .add(() => {
      heroRow.classList.remove("hidden");
    })
    .to(cup, {
      duration: 1,
      opacity: 1,
      filter: "blur(0px)",
      ease: "power2.out",
    })
    .to(steam, {
      duration: 1.5,
      opacity: 1,
    }, "-=1.5")
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
});
