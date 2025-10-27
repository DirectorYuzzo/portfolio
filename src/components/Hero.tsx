import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating particles
      gsap.to(".float", {
        y: 25,
        repeat: -1,
        yoyo: true,
        duration: 3.5,
        ease: "sine.inOut",
        stagger: 0.7,
      });

      // Title animation
      gsap.from(".hero-title", {
        opacity: 0,
        y: 80,
        duration: 1.3,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: 0.3,
        ease: "power4.out",
      });

      gsap.from(".hero-btn", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        delay: 0.6,
        ease: "power4.out",
        stagger: 0.2,
      });

      // Parallax effect on scroll
      gsap.to(".parallax", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-navy text-cream"
    >
      {/* Parallax background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/gta-bg.jpg"
          alt="background"
          className="parallax w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Glowing ambient circles */}
      <div className="absolute top-20 left-10 w-52 h-52 bg-accent/20 rounded-full blur-3xl float" />
      <div className="absolute bottom-20 right-16 w-60 h-60 bg-cream/10 rounded-full blur-3xl float" />

      {/* Character silhouette or portrait */}
      <div className="absolute bottom-0 right-1/4 z-10 hidden md:block">
        <img
          src="/images/character.png"
          alt="hero character"
          className="w-[400px] parallax opacity-95 drop-shadow-[0_0_25px_rgba(255,94,186,0.3)]"
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <h1 className="hero-title text-6xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cream via-accent to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
          Welcome to My World
        </h1>
        <p className="hero-subtitle mt-6 text-xl text-cream/80 max-w-2xl mx-auto">
          Immersive design meets motion. I build web experiences that feel cinematic — powered
          by <span className="text-accent font-semibold">React</span> &{" "}
          <span className="text-accent font-semibold">GSAP</span>.
        </p>

        <div className="flex justify-center gap-6 mt-10">
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
