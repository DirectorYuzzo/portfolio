import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up text
      gsap.from(textRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Fade-in image with slight parallax
      gsap.from(imgRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 bg-navy text-cream">
      {/* Text Content */}
      <div ref={textRef} className="md:w-1/2 mb-12 md:mb-0">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cream via-accent to-pink-400 text-transparent bg-clip-text">
          About Director Yuzzo
        </h2>
        <p className="text-lg sm:text-xl text-cream/80 leading-relaxed">
          I design cinematic web experiences with advanced animations and immersive interactions. Using React, TailwindCSS, and GSAP, I bring stories to life on the web.
        </p>
      </div>

      {/* Image */}
      <div ref={imgRef} className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/images/hero-character2.png"
          alt="Director Yuzzo"
          className="w-80 sm:w-[400px] drop-shadow-[0_0_50px_rgba(255,94,186,0.4)] rounded-lg"
        />
      </div>
    </section>
  );
}
