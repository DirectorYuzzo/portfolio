import React from 'react';

const testimonials = [
  { name: 'Sarah', feedback: 'Incredible developer! Highly recommend.' },
  { name: 'John', feedback: 'Creative solutions and clean code. Great to work with!' },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-cream mb-6">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-6 bg-navy/50 rounded-xl shadow-md">
            <p className="text-cream/90 mb-2">"{t.feedback}"</p>
            <span className="text-pink-500 font-semibold">- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
