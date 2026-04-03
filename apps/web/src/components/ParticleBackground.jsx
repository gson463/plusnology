import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2, // 2px to 8px
      x: Math.random() * 100, // 0% to 100%
      y: Math.random() * 100, // 0% to 100%
      duration: Math.random() * 20 + 10, // 10s to 30s
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
      color: ['#0479FB', '#0366D6', '#025FBF', '#ffffff'][Math.floor(Math.random() * 4)]
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;