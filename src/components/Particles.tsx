import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Particles() {
  useEffect(() => {
    const particles = Array.from({ length: 30 }, (_, i) => {
      const div = document.createElement("div");
      div.className =
        "particle w-2 h-2 rounded-full bg-accent absolute opacity-30";
      document.body.appendChild(div);

      gsap.to(div, {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        repeat: -1,
        yoyo: true,
        duration: 10 + Math.random() * 20,
        ease: "sine.inOut",
      });

      return div;
    });

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return null;
}
