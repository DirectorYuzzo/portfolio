import React, { useEffect, useRef, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
  const contentRef = useRef(null);
  const characterRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({ x: (clientX / innerWidth - 0.5) * 30, y: (clientY / innerHeight - 0.5) * 30 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground mousePos={mousePos} />

      <div 
        ref={contentRef}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        style={{ perspective: '1000px', transform: `rotateY(${mousePos.x * 0.1}deg) rotateX(${-mousePos.y * 0.1}deg)` }}
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cream via-pink-500 to-emerald-400 bg-clip-text text-transparent animate-gradient">
          Full-Stack Creative Developer
        </h1>
        <p className="text-cream/90 mt-6 max-w-3xl mx-auto">
          Crafting cinematic digital experiences through innovative code, stunning design, and compelling storytelling
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
