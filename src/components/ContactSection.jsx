import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-cream mb-6">Contact</h2>
      <form className="grid gap-6 max-w-xl">
        <input type="text" placeholder="Name" className="p-4 rounded-lg bg-navy/50 text-cream border border-cream/30 focus:outline-none focus:border-pink-500" />
        <input type="email" placeholder="Email" className="p-4 rounded-lg bg-navy/50 text-cream border border-cream/30 focus:outline-none focus:border-pink-500" />
        <textarea placeholder="Message" className="p-4 rounded-lg bg-navy/50 text-cream border border-cream/30 focus:outline-none focus:border-pink-500" rows={5}></textarea>
        <button type="submit" className="p-4 bg-pink-500 text-navy font-bold rounded-lg hover:bg-pink-600 transition-colors">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
