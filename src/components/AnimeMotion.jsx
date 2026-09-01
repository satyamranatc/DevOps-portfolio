import { useEffect } from "react";
import { animate, stagger } from "animejs";

export default function AnimeMotion() {
  useEffect(() => {
    // 1. Staggered Hero Headline & Badges Animation
    animate("#hero h1, #hero p, #hero .inline-flex", {
      translateY: [25, 0],
      opacity: [0, 1],
      ease: "outExpo",
      duration: 1200,
      delay: stagger(150),
    });

    // 2. Subtle Floating Animation on Decorative Badges
    animate(".animate-float-anime", {
      translateY: [-6, 6],
      direction: "alternate",
      loop: true,
      ease: "inOutSine",
      duration: 3000,
      delay: stagger(200),
    });

    // 3. Magnetic Hover & Scale on Primary Buttons
    const buttons = document.querySelectorAll(".btn-anime");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        animate(btn, {
          scale: 1.04,
          duration: 300,
          ease: "outQuad",
        });
      });
      btn.addEventListener("mouseleave", () => {
        animate(btn, {
          scale: 1,
          duration: 300,
          ease: "outQuad",
        });
      });
    });

    // 4. Interactive Intersection Observer for Scroll Reveals
    const cards = document.querySelectorAll(".glass-panel");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              translateY: [20, 0],
              opacity: [0.6, 1],
              ease: "outCubic",
              duration: 800,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
