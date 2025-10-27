// // import React, { useEffect, useRef, useState } from "react";
// // import { NavLink, useLocation } from "react-router-dom";
// // import { gsap } from "gsap";

// // const links = [
// //   { to: "/", label: "Home" },
// //   { to: "/about", label: "About" },
// //   { to: "/projects", label: "Projects" },
// //   { to: "/contact", label: "Contact" },
// // ];

// // export default function Navbar(): JSX.Element {
// //   const navRef = useRef<HTMLElement | null>(null);
// //   const menuRef = useRef<HTMLUListElement | null>(null);
// //   const [open, setOpen] = useState(false);
// //   const location = useLocation();

// //   // close mobile menu on route change
// //   useEffect(() => {
// //     setOpen(false);
// //   }, [location.pathname]);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       // Slide down nav on load
// //       gsap.from(navRef.current, {
// //         y: -40,
// //         opacity: 0,
// //         duration: 0.8,
// //         ease: "power3.out",
// //       });

// //       // Stagger in menu items (desktop)
// //       gsap.from(menuRef.current?.children || [], {
// //         y: -6,
// //         opacity: 0,
// //         duration: 0.6,
// //         stagger: 0.08,
// //         delay: 0.2,
// //         ease: "power2.out",
// //       });
// //     }, navRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <header
// //       ref={navRef}
// //       className="fixed top-0 left-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-cream/10"
// //     >
// //       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
// //         <NavLink to="/" className="text-2xl font-bold select-none">
// //           <span className="text-cream">Director</span>
// //           <span className="text-pink-400">Yuzzo</span>
// //         </NavLink>

// //         {/* Desktop Links */}
// //         <nav className="hidden md:block">
// //           <ul ref={menuRef} className="flex gap-6 items-center text-cream/90">
// //             {links.map((l) => (
// //               <li key={l.to}>
// //                 <NavLink
// //                   to={l.to}
// //                   end={l.to === "/"} // exact for root
// //                   className={({ isActive }) =>
// //                     `px-3 py-2 rounded-md transition-colors duration-200 ${
// //                       isActive ? "bg-cream text-navy font-semibold" : "hover:text-pink-400"
// //                     }`
// //                   }
// //                 >
// //                   {l.label}
// //                 </NavLink>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>

// //         {/* Mobile Hamburger */}
// //         <div className="md:hidden">
// //           <button
// //             aria-label="Toggle menu"
// //             onClick={() => setOpen((s) => !s)}
// //             className="relative w-10 h-10 rounded-md flex items-center justify-center border border-cream/20"
// //           >
// //             <span
// //               className={`block w-6 h-0.5 bg-cream rounded transition-all duration-300 ${
// //                 open ? "rotate-45 translate-y-0.5" : "-translate-y-1.5"
// //               }`}
// //             />
// //             <span
// //               className={`block w-6 h-0.5 bg-cream rounded transition-all duration-300 absolute ${
// //                 open ? "opacity-0" : "opacity-100"
// //               }`}
// //             />
// //             <span
// //               className={`block w-6 h-0.5 bg-cream rounded transition-all duration-300 ${
// //                 open ? "-rotate-45 translate-y-0.5" : "translate-y-1.5"
// //               }`}
// //             />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile menu drawer */}
// //       <div
// //         className={`md:hidden bg-navy/95 border-t border-cream/5 transform-gpu transition-all duration-300 overflow-hidden ${
// //           open ? "h-auto py-4" : "h-0"
// //         }`}
// //       >
// //         <ul className="flex flex-col gap-3 px-6">
// //           {links.map((l) => (
// //             <li key={l.to}>
// //               <NavLink
// //                 to={l.to}
// //                 end={l.to === "/"}
// //                 className={({ isActive }) =>
// //                   `block px-3 py-3 rounded-md transition-colors ${
// //                     isActive ? "bg-cream text-navy font-semibold" : "text-cream/90 hover:bg-cream/5 hover:text-pink-400"
// //                   }`
// //                 }
// //               >
// //                 {l.label}
// //               </NavLink>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </header>
// //   );
// // }


// import { Link } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export default function Navbar() {
//   const navRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".nav-item", {
//         y: -40,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.15,
//         ease: "power3.out",
//       });
//     }, navRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <nav
//       ref={navRef}
//       className="fixed top-0 left-0 w-full bg-navy/70 backdrop-blur-md shadow-glow z-50"
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         <h1 className="text-2xl font-extrabold text-accent tracking-wide">
//           <span className="nav-item inline-block">YUZZO</span>
//         </h1>

//         <ul className="flex gap-8 text-lg font-medium">
//           {["Home", "About", "Projects", "Contact"].map((item, i) => (
//             <li key={i} className="nav-item">
//               <Link
//                 to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent hover:after:w-full after:transition-all hover:text-accent transition-all"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }



import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Portfolio</h1>
        <div className="hidden md:flex gap-6">
          {['Home','About','Skills','Projects','Testimonials','Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-cream hover:text-pink-500 transition-colors">{item}</a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-cream" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-down">
            {['Home','About','Skills','Projects','Testimonials','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-cream hover:text-pink-500 transition-colors">{item}</a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
