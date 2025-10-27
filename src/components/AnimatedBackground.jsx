import React from 'react';
import AmbientLights from './AmbientLights';
import AnimatedGrid from './AnimatedGrid';
import ParticleTrail from './ParticleTrail';

const AnimatedBackground = ({ mousePos }) => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-purple-900 to-navy" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500/10 to-emerald-500/10" />
      <AnimatedGrid />
      <AmbientLights />
      <ParticleTrail />
    </>
  );
};

export default AnimatedBackground;
