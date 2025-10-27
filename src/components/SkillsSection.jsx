import React from 'react';

const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'TailwindCSS', level: 'Advanced' },
  { name: 'MongoDB', level: 'Intermediate' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-cream mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="p-4 bg-navy/50 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-cream">{skill.name}</h3>
            <p className="text-cream/80 mt-1">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
