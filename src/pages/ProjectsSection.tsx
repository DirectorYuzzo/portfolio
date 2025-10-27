import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children, {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
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
    <section ref={sectionRef} className="relative min-h-screen px-6 md:px-20 py-20 bg-navy text-cream">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cream via-accent to-pink-400 text-transparent bg-clip-text">
        Projects
      </h2>

      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Example Project Cards */}
        {["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6"].map((proj, idx) => (
          <div key={idx} className="bg-navy/50 backdrop-blur-md rounded-xl p-6 hover:scale-105 hover:shadow-glow transition-transform">
            <h3 className="text-xl font-semibold mb-3">{proj}</h3>
            <p className="text-cream/80">A cinematic web project demonstrating advanced animations, interactions, and immersive UI design.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
