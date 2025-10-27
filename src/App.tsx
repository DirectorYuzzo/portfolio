// import Navbar from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import AboutSection from "./pages/AboutSection";
// import ProjectsSection from "./pages/ProjectsSection";

// export default function App() {
//   return (
//     <main className="bg-navy min-h-screen text-cream">
//       <Navbar />
//       <div className="pt-20">
//         <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/" element={
//           <>
//             <Home />
//             <AboutSection />
//             <ProjectsSection />
//           </>
//         } />
//         </Routes>
//       </div>
//     </main>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';

// Particle Trail Component
const ParticleTrail = () => {
  const [particles, setParticles] = useState([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newParticle = {
        id: particleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        color: ['#FF5EBA', '#F0EBE5', '#7C3AED', '#10B981'][Math.floor(Math.random() * 4)],
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full animate-fade-out"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Ambient Lights with more colors
const AmbientLights = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-15 animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-400 rounded-full blur-3xl opacity-10 animate-float-slow" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-15 animate-float" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-10 animate-float-delayed" />
    </div>
  );
};

// Animated Background Grid
const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(#FF5EBA 1px, transparent 1px), linear-gradient(90deg, #FF5EBA 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            
            <span className="text-emerald-400 font-semibold ">DIR </span> YUZZO</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-cream hover:text-pink-500 transition-colors">Home</a>
            <a href="#about" className="text-cream hover:text-pink-500 transition-colors">About</a>
            <a href="#skills" className="text-cream hover:text-pink-500 transition-colors">Skills</a>
            <a href="#projects" className="text-cream hover:text-pink-500 transition-colors">Projects</a>
            <a href="#testimonials" className="text-cream hover:text-pink-500 transition-colors">Testimonials</a>
            <a href="#contact" className="text-cream hover:text-pink-500 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cream"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-down">
            <a href="#home" className="block text-cream hover:text-pink-500 transition-colors">Home</a>
            <a href="#about" className="block text-cream hover:text-pink-500 transition-colors">About</a>
            <a href="#skills" className="block text-cream hover:text-pink-500 transition-colors">Skills</a>
            <a href="#projects" className="block text-cream hover:text-pink-500 transition-colors">Projects</a>
            <a href="#testimonials" className="block text-cream hover:text-pink-500 transition-colors">Testimonials</a>
            <a href="#contact" className="block text-cream hover:text-pink-500 transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section with Camera Movement
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
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Colorful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-purple-900 to-navy" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500/10 to-emerald-500/10" />
      
      <AnimatedGrid />
      <AmbientLights />
      
      {/* Character Image with parallax */}
      <div 
        ref={characterRef}
        className="absolute inset-0 flex items-center justify-center opacity-30 transition-transform duration-300"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      >
        <div className="w-full h-full max-w-4xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-emerald-400/30 rounded-full blur-3xl animate-pulse-slow" />
          <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
            <circle cx="200" cy="150" r="70" fill="url(#heroGradient1)" opacity="0.5" />
            <path d="M200 220 L220 280 L200 400 L180 280 Z" fill="url(#heroGradient2)" opacity="0.4" />
            <path d="M150 280 L120 350 L140 380" stroke="url(#heroGradient1)" strokeWidth="15" opacity="0.4" />
            <path d="M250 280 L280 350 L260 380" stroke="url(#heroGradient1)" strokeWidth="15" opacity="0.4" />
            <circle cx="185" cy="140" r="8" fill="#F0EBE5" opacity="0.8" />
            <circle cx="215" cy="140" r="8" fill="#F0EBE5" opacity="0.8" />
            <defs>
              <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF5EBA" />
                <stop offset="50%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0EBE5" />
                <stop offset="100%" stopColor="#FF5EBA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        style={{ 
          perspective: '1000px',
          transform: `rotateY(${mousePos.x * 0.1}deg) rotateX(${-mousePos.y * 0.1}deg)`
        }}
      >
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-cream via-pink-500 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient" style={{ textShadow: '0 0 40px rgba(255,94,186,0.5)' }}>
            <div className="animate-fade-in">Full-Stack</div>
            <div className="animate-fade-in-delayed">Creative Developer</div>
          </h1>
        </div>

        <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-cream/90 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          Crafting <span className="text-pink-500 font-semibold">cinematic digital experiences</span> through innovative code, 
          <span className="text-purple-400 font-semibold"> stunning design</span>, and 
          <span className="text-emerald-400 font-semibold"> compelling storytelling</span>
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <a href="#projects" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-glow hover:scale-105 transition-all duration-300 inline-block">
            View Projects
          </a>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-cream text-cream font-semibold rounded-lg hover:bg-cream hover:text-navy hover:shadow-glow transition-all duration-300">
            Download CV
          </button>
          <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 inline-block">
            Let's Talk
          </a>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {[
            { number: '50+', label: 'Projects' },
            { number: '5+', label: 'Years Exp' },
            { number: '30+', label: 'Clients' },
            { number: '15+', label: 'Awards' },
          ].map((stat, i) => (
            <div key={i} className="bg-navy/50 backdrop-blur-md border border-pink-500/20 rounded-xl p-4 hover:border-pink-500/50 transition-all hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">{stat.number}</div>
              <div className="text-cream/70 text-sm sm:text-base mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-pink-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// About Section with Intersection Observer
const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 bg-gradient-to-b from-navy via-purple-900/50 to-navy overflow-hidden">
      <AmbientLights />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cream via-pink-500 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-cream/80 leading-relaxed">
              I'm a passionate full-stack developer who believes in the transformative power of storytelling through technology. With expertise in modern web technologies and a keen eye for design, I create immersive experiences that captivate and inspire audiences worldwide.
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-cream/80 leading-relaxed">
              My journey spans across <span className="text-pink-500 font-semibold">React, TypeScript, Node.js,</span> advanced <span className="text-purple-400 font-semibold">animations</span>, and creative problem-solving. I thrive on turning complex challenges into elegant, user-friendly solutions that push the boundaries of what's possible on the web.
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-cream/80 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest design trends, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying ahead of the curve in this ever-evolving tech landscape.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'Three.js', 'UI/UX', 'GraphQL', 'Docker', 'AWS', 'MongoDB'].map((skill, i) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-cream border border-pink-500/30 rounded-full text-sm font-medium hover:bg-pink-500/30 hover:scale-105 transition-all"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <div className="aspect-square bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-emerald-500/30 flex items-center justify-center">
                <svg className="w-3/4 h-3/4" viewBox="0 0 300 300" fill="none">
                  <circle cx="150" cy="150" r="130" fill="url(#aboutGradient1)" opacity="0.2" />
                  <circle cx="150" cy="150" r="100" fill="url(#aboutGradient2)" opacity="0.3" />
                  <rect x="90" y="100" width="120" height="160" rx="60" fill="url(#aboutGradient3)" opacity="0.4" />
                  <circle cx="150" cy="80" r="45" fill="url(#aboutGradient1)" opacity="0.5" />
                  <path d="M120 200 L100 250" stroke="url(#aboutGradient2)" strokeWidth="12" opacity="0.4" />
                  <path d="M180 200 L200 250" stroke="url(#aboutGradient2)" strokeWidth="12" opacity="0.4" />
                  <defs>
                    <linearGradient id="aboutGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF5EBA" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                    <linearGradient id="aboutGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="aboutGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F0EBE5" />
                      <stop offset="100%" stopColor="#FF5EBA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-emerald-500/20 rounded-2xl blur-2xl -z-10 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
      skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Three.js', 'Vue.js']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'from-purple-500 to-indigo-500',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
    },
    {
      title: 'DevOps',
      icon: '🚀',
      color: 'from-emerald-500 to-teal-500',
      skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx']
    },
    {
      title: 'Design',
      icon: '✨',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Figma', 'UI/UX', 'Responsive', 'Animation', 'Prototyping', 'Branding']
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 bg-gradient-to-b from-navy via-indigo-900/30 to-navy overflow-hidden">
      <AmbientLights />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cream via-pink-500 to-emerald-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-navy/80 to-navy/40 rounded-2xl p-6 border border-cream/10 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform`}>{category.icon}</div>
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="text-cream/70 text-sm flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    { 
      title: 'E-Commerce Platform', 
      description: 'Full-stack shopping experience with real-time inventory, payment integration, and AI-powered recommendations', 
      tech: 'React, Node.js, MongoDB, Stripe',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      title: 'Portfolio Studio', 
      description: 'Creative showcase platform for artists with drag-and-drop builder and custom themes', 
      tech: 'Next.js, TailwindCSS, Prisma',
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      title: 'AI Dashboard', 
      description: 'Real-time data visualization with machine learning insights and predictive analytics', 
      tech: 'React, D3.js, Python, TensorFlow',
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      title: 'Social Mobile App', 
      description: 'Cross-platform social networking with live messaging and content sharing', 
      tech: 'React Native, Firebase, Redux',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Game Engine', 
      description: 'Interactive 2D physics engine with multiplayer support and custom particle systems', 
      tech: 'Canvas API, WebGL, Socket.io',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      title: 'CMS Platform', 
      description: 'Headless content management with drag-and-drop editor and multi-language support', 
      tech: 'Vue.js, Express, PostgreSQL',
      color: 'from-red-500 to-pink-500'
    },
    { 
      title: 'Crypto Tracker', 
      description: 'Real-time cryptocurrency monitoring with portfolio management and alerts', 
      tech: 'React, WebSockets, Chart.js',
      color: 'from-pink-500 to-purple-500'
    },
    { 
      title: 'Learning Platform', 
      description: 'Interactive online education platform with video streaming and progress tracking', 
      tech: 'Next.js, AWS, GraphQL',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'AR Experience', 
      description: 'Augmented reality web app for interactive product visualization', 
      tech: 'Three.js, WebXR, React',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 bg-gradient-to-b from-navy via-purple-900/30 to-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-transparent" />
      <AnimatedGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cream via-pink-500 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-navy/80 to-navy/40 rounded-xl p-6 border border-cream/10 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-glow cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center text-2xl`}>
                  💎
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-cream mb-3 group-hover:text-pink-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-cream/70 mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                <p className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent text-sm font-medium`}>
                  {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'Working with this developer was an absolute game-changer. The attention to detail and creative solutions exceeded all expectations.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      content: 'Incredible work ethic and technical expertise. Delivered a stunning platform that our users absolutely love.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Director, Creative Labs',
      content: 'The perfect blend of technical skill and creative vision. Truly understands how to bring designs to life.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'David Park',
      role: 'Founder, StartupXYZ',
      content: 'Transformed our vision into reality with exceptional quality and professionalism. Highly recommended!',
      rating: 5,
      avatar: '👨‍💼'
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-20 bg-gradient-to-b from-navy via-indigo-900/30 to-navy overflow-hidden">
      <AmbientLights />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cream via-purple-400 to-emerald-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          Client Testimonials
        </h2>
        <p className={`text-center text-cream/70 mb-16 text-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          What people say about working with me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-navy/80 to-navy/40 rounded-2xl p-6 sm:p-8 border border-cream/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-cream">{testimonial.name}</h4>
                  <p className="text-pink-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-cream/80 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo mode)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 bg-gradient-to-b from-navy via-purple-900/50 to-navy overflow-hidden">
      <AmbientLights />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cream via-pink-500 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          Let's Work Together
        </h2>
        <p className={`text-center text-cream/70 mb-12 text-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          Have a project in mind? Let's create something amazing!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div>
              <label className="block text-cream mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-navy/50 border border-cream/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-pink-500 focus:shadow-glow transition-all"
              />
            </div>
            
            <div>
              <label className="block text-cream mb-2 text-sm font-medium">Your Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
                className="w-full px-6 py-4 bg-navy/50 border border-cream/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-pink-500 focus:shadow-glow transition-all"
              />
            </div>
            
            <div>
              <label className="block text-cream mb-2 text-sm font-medium">Your Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full px-6 py-4 bg-navy/50 border border-cream/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-pink-500 focus:shadow-glow transition-all resize-none"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-glow hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="bg-gradient-to-br from-navy/80 to-navy/40 rounded-2xl p-6 border border-cream/10 hover:border-pink-500/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-cream mb-2">Email</h3>
              <p className="text-pink-500">yuzzo.dev@gmail.com</p>
            </div>

            <div className="bg-gradient-to-br from-navy/80 to-navy/40 rounded-2xl p-6 border border-cream/10 hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-cream mb-2">Phone</h3>
              <p className="text-purple-400">+255-623-628-352</p>
            </div>

            <div className="bg-gradient-to-br from-navy/80 to-navy/40 rounded-2xl p-6 border border-cream/10 hover:border-emerald-500/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-cream mb-2">Location</h3>
              <p className="text-emerald-400">Arusha, Tanzania</p>
            </div>

            <div className="bg-gradient-to-br from-navy/80 to-navy/40 rounded-2xl p-6 border border-cream/10 hover:border-blue-500/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-cream mb-2">Working Hours</h3>
              <p className="text-blue-400">Mon - Fri: 9AM - 6PM PST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '⚡', color: 'hover:text-purple-400' },
    { name: 'LinkedIn', icon: '💼', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', color: 'hover:text-cyan-400' },
    { name: 'Dribbble', icon: '🎨', color: 'hover:text-pink-400' },
    { name: 'Email', icon: '✉️', color: 'hover:text-emerald-400' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-navy to-black border-t border-cream/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </h2>
            <p className="text-cream/60">Crafting digital experiences with passion</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-cream/10 text-cream text-2xl hover:bg-pink-500 hover:text-navy hover:shadow-glow transition-all duration-300 hover:scale-110 ${link.color}`}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <a href="#home" className="text-cream/70 hover:text-pink-500 transition-colors">Home</a>
            <a href="#about" className="text-cream/70 hover:text-pink-500 transition-colors">About</a>
            <a href="#skills" className="text-cream/70 hover:text-pink-500 transition-colors">Skills</a>
            <a href="#projects" className="text-cream/70 hover:text-pink-500 transition-colors">Projects</a>
            <a href="#testimonials" className="text-cream/70 hover:text-pink-500 transition-colors">Testimonials</a>
            <a href="#contact" className="text-cream/70 hover:text-pink-500 transition-colors">Contact</a>
          </div>
          
          {/* Copyright */}
          <div className="text-cream/60 text-center text-sm border-t border-cream/10 pt-8 w-full">
            <p>© 2025 Portfolio. Crafted with 💜 passion and ⚡ code.</p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App
function App() {
  useEffect(() => {
    // Smooth scroll
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="font-[Poppins] bg-navy text-cream overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
          
          * {
            scroll-behavior: smooth;
          }
          
          :root {
            --navy: #0C0D23;
            --cream: #F0EBE5;
            --accent: #FF5EBA;
          }
          
          .bg-navy { background-color: var(--navy); }
          .text-cream { color: var(--cream); }
          .text-accent { color: var(--accent); }
          .border-accent { border-color: var(--accent); }
          .bg-accent { background-color: var(--accent); }
          
          .shadow-glow {
            box-shadow: 0 0 30px rgba(255, 94, 186, 0.3);
          }
          
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(5deg); }
            66% { transform: translate(-20px, 20px) rotate(-5deg); }
          }
          
          @keyframes float-delayed {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(-25px, 25px) rotate(-3deg); }
            66% { transform: translate(25px, -15px) rotate(3deg); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(15px, -15px) scale(1.1); }
          }
          
          @keyframes fade-out {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fade-in-delayed {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slide-down {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 4s ease infinite;
          }
          
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 12s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 15s ease-in-out infinite;
          }
          
          .animate-fade-out {
            animation: fade-out 1s ease-out forwards;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out 0.3s both;
          }
          
          .animate-fade-in-delayed {
            animation: fade-in-delayed 1s ease-out 0.6s both;
          }
          
          .animate-slide-down {
            animation: slide-down 0.3s ease-out;
          }
        `}
      </style>
      
      <ParticleTrail />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;