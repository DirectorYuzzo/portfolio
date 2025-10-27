import React from 'react';

const projects = [
  { title: 'EduVerse', description: 'Online learning platform with React, Node.js, MongoDB', link: '#' },
  { title: 'Portfolio', description: 'Interactive personal portfolio with animations', link: '#' },
  { title: 'Social Media App', description: 'MERN stack project for student networking', link: '#' },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-cream mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a key={project.title} href={project.link} className="block p-6 bg-navy/50 rounded-xl shadow-md hover:bg-navy/70 transition-colors">
            <h3 className="text-2xl font-semibold text-cream mb-2">{project.title}</h3>
            <p className="text-cream/80">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
