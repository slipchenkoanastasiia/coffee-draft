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
    const wrapper = document.querySelector(".cup-wrapper");

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

    // === Інтерактивне обертання чашки ===
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", (event) => {
        const { beta, gamma } = event;

        const rotateX = Math.max(Math.min(beta - 90, 30), -30);
        const rotateY = Math.max(Math.min(gamma, 30), -30);

        gsap.to(cup, {
          rotateX: -rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    } else {
      wrapper.addEventListener("mousemove", (e) => {
        const rect = wrapper.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const percentX = (offsetX / rect.width - 0.5) * 2;
        const percentY = (offsetY / rect.height - 0.5) * 2;

        const rotateY = percentX * 30;
        const rotateX = -percentY * 30;

        gsap.to(cup, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      wrapper.addEventListener("mouseleave", () => {
        gsap.to(cup, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    }
  }
});
