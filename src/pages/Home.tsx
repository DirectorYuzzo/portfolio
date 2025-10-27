import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const charRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in text/buttons
      gsap.from(".hero-text", { opacity: 0, y: 80, duration: 1.4, stagger: 0.25, ease: "power4.out" });
      gsap.from(".hero-btn", { opacity: 0, y: 50, duration: 1.2, delay: 0.6, stagger: 0.2, ease: "power4.out" });

      // Floating ambient glows
      gsap.to(".float", { y: 30, repeat: -1, yoyo: true, duration: 3.5, ease: "sine.inOut", stagger: 0.7 });

      // Scroll parallax for background
      gsap.to(bgRef.current, { yPercent: -15, scale: 1.05, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true } });

      // Scroll parallax for character
      gsap.to(charRef.current, { yPercent: -10, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true } });

      // Cursor-based camera tilt
      const handleMouseMove = (e: MouseEvent) => {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;
        gsap.to(heroContentRef.current, { rotationY: x, rotationX: y, transformPerspective: 1000, ease: "power1.out", duration: 0.6 });
        gsap.to(charRef.current, { rotationY: x / 2, rotationX: y / 2, transformPerspective: 1000, ease: "power1.out", duration: 0.6 });

        // Move particles
        const particleEls = particlesRef.current?.children;
        if (particleEls) {
          for (let i = 0; i < particleEls.length; i++) {
            const p = particleEls[i] as HTMLElement;
            gsap.to(p, { x: e.clientX + Math.random() * 50 - 25, y: e.clientY + Math.random() * 50 - 25, duration: 0.3 });
          }
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Create 15 particle divs
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 15; i++) {
      particles.push(
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-accent opacity-70 pointer-events-none blur-sm"
          style={{ top: 0, left: 0 }}
        />
      );
    }
    return particles;
  };

  return (
    <section ref={heroRef} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-navy text-cream">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img src="/images/gta-bg.jpg" alt="Cinematic Background" className="w-full h-full object-cover opacity-70" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-24 left-10 w-52 h-52 bg-accent/20 rounded-full blur-3xl float" />
      <div className="absolute bottom-20 right-16 w-60 h-60 bg-cream/10 rounded-full blur-3xl float" />

      {/* Cursor particles */}
      <div ref={particlesRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {renderParticles()}
      </div>

      {/* Character */}
      <div ref={charRef} className="absolute bottom-0 right-1/4 z-10 hidden md:block">
        <img src="/images/character.jpg" alt="Director Yuzzo" className="w-[400px] drop-shadow-[0_0_40px_rgba(255,94,186,0.5)]" />
      </div>

      {/* Hero content */}
      <div ref={heroContentRef} className="relative z-20 text-center px-6 max-w-3xl">
        <h1 className="hero-text text-6xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cream via-accent to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
          Director Yuzzo
        </h1>
        <p className="hero-text mt-6 text-xl sm:text-2xl text-cream/80">
          I create cinematic, interactive web experiences using <span className="text-accent font-semibold">React</span> & <span className="text-accent font-semibold">GSAP</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <button className="hero-btn px-8 py-3 rounded-xl bg-accent text-navy font-bold hover:bg-cream transition-all shadow-glow">
            Explore Projects 🚀
          </button>
          <button className="hero-btn px-8 py-3 rounded-xl border border-accent text-accent hover:bg-accent hover:text-navy transition-all">
            Contact Me 💬
          </button>
        </div>
      </div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-navy via-navy/70 to-transparent" />
    </section>
  );
}
