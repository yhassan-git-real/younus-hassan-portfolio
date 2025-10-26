import React, { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const codeSnippets = [
    'SELECT *',
    'JOIN',
    'WHERE',
    'GROUP BY',
    'ORDER BY',
    'INDEX',
    'PRIMARY KEY',
    'FOREIGN KEY',
    'TRANSACTION',
    'COMMIT',
    'BACKUP',
    'RESTORE',
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-500/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={`snippet-${index}`}
          className="absolute text-blue-500/5 font-mono text-xs md:text-sm font-bold"
          style={{
            left: `${(index * 15) % 90}%`,
            top: `${(index * 20) % 80}%`,
            animation: `floatText ${15 + index * 2}s ease-in-out ${index * 0.5}s infinite alternate`,
          }}
        >
          {snippet}
        </div>
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default ParticleBackground;
