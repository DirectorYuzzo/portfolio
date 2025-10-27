import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in form
      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Fade in footer
      gsap.from(footerRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-20 py-20 bg-navy text-cream flex flex-col items-center"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cream via-accent to-pink-400 text-transparent bg-clip-text">
        Contact Me
      </h2>

      {/* Contact Form */}
      <div ref={formRef} className="w-full max-w-2xl">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-navy/50 border border-accent text-cream placeholder-cream/70 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-navy/50 border border-accent text-cream placeholder-cream/70 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 rounded-lg bg-navy/50 border border-accent text-cream placeholder-cream/70 focus:outline-none focus:ring-2 focus:ring-accent h-40 resize-none"
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-xl bg-accent text-navy font-bold hover:bg-cream hover:text-navy transition-all shadow-glow"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer
        ref={footerRef}
        className="mt-20 w-full flex flex-col md:flex-row justify-between items-center border-t border-accent pt-8"
      >
        <p className="text-cream/70 mb-4 md:mb-0">&copy; 2025 Director Yuzzo</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">GitHub</a>
        </div>
      </footer>
    </section>
  );
}
