import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".intro", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".title", { opacity: 0, y: -30, duration: 1, delay: 0.5 });
      gsap.from(".desc", { opacity: 0, y: 20, duration: 1, delay: 1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h2 className="intro text-2xl sm:text-3xl mb-2">Hey there 👋, I’m</h2>
      <h1 className="title text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-cream to-pink-400 text-transparent bg-clip-text">
        Director Yuzzo
      </h1>
      <p className="desc max-w-2xl text-lg sm:text-xl text-cream/80">
        I’m a creative developer passionate about blending technology and design
        — crafting interactive web experiences with React, GSAP, and motion
        magic.
      </p>
    </div>
  );
}
