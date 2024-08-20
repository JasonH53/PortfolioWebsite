import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from '@tsparticles/slim';
import particleConfig from "./particles"; 

const ParticleBackground = ({ onInit, ...props }) => { 
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
      if (onInit) onInit();
    });
  }, [onInit]);

  return (
    init && ( 
      <Particles
        id="tsparticles"
        
        options={particleConfig} 
      />
    )
  );
};

export default ParticleBackground;
