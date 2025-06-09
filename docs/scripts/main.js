import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");

  setTimeout(() => {
    splashScreen.classList.add("hidden");

    runIntroAnimation();
  }, 2000);

  function runIntroAnimation() {
    const introText = document.querySelector(".intro-text");
    const heroRow = document.querySelector(".hero-row");
    const leftText = document.querySelector(".left-text");
    const rightText = document.querySelector(".right-text");
    const cup = document.querySelector(".coffee-cup");
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

    cup.style.cursor = "pointer";

    cup.addEventListener("mousemove", (e) => {
      const rect = cup.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const relativeX = e.clientX - centerX;
      const normalizedX = relativeX / (rect.width / 2);
      const targetRotateY = normalizedX * 180;

      gsap.to(cup, {
        rotateY: targetRotateY,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    cup.addEventListener("mouseleave", () => {
      gsap.to(cup, {
        rotateY: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  }
});
