import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
      });

      gsap.to(".float", {
        y: 25,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden bg-navy text-cream"
    >
      {/* Background glows */}
      <div className="absolute top-10 left-16 w-40 h-40 bg-accent/20 rounded-full blur-3xl float" />
      <div className="absolute bottom-24 right-10 w-52 h-52 bg-cream/10 rounded-full blur-3xl float" />

      <div className="fade-in text-center max-w-3xl z-10">
        <h2 className="text-5xl font-bold text-accent mb-6">About Me</h2>
        <p className="text-lg sm:text-xl leading-relaxed text-cream/80 mb-10">
          I’m <span className="font-semibold text-accent">Director Yuzzo</span>, a passionate{" "}
          <span className="text-accent font-semibold">Front-End Developer</span> and creative
          thinker who loves crafting interactive, motion-driven web experiences using{" "}
          <span className="text-accent font-semibold">React</span>,{" "}
          <span className="text-accent font-semibold">TypeScript</span>,{" "}
          and <span className="text-accent font-semibold">GSAP</span>.
        </p>
      </div>

      <div className="fade-in grid md:grid-cols-2 gap-10 max-w-5xl z-10">
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-glow border border-white/10">
          <h3 className="text-2xl font-bold text-accent mb-3">🎯 Mission</h3>
          <p className="text-cream/80">
            To combine design, technology, and animation into immersive web experiences that
            tell stories, inspire emotion, and connect users to brands in meaningful ways.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-glow border border-white/10">
          <h3 className="text-2xl font-bold text-accent mb-3">⚙️ Skills</h3>
          <ul className="text-cream/80 space-y-2">
            <li>• React, TypeScript, Next.js</li>
            <li>• Tailwind CSS, Shadcn UI, Framer Motion</li>
            <li>• GSAP, ScrollTrigger, Three.js</li>
            <li>• MongoDB, Express, Node.js</li>
          </ul>
        </div>
      </div>

      <div className="fade-in mt-14 max-w-3xl text-center text-cream/70">
        <p>
          When I’m not coding, I love exploring digital art, UI motion design, and
          experimenting with new animation libraries that push creativity forward.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-navy via-navy/70 to-transparent" />
    </section>
  );
}
