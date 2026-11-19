import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  colorType: 'orange' | 'cyan' | 'white';
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle count
    const particleCount = width < 768 ? 30 : 65;
    const maxDistance = width < 768 ? 90 : 130;
    const mouseRadius = 140;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const typeRand = Math.random();
      const colorType: 'orange' | 'cyan' | 'white' =
        typeRand < 0.25 ? 'orange' : typeRand < 0.45 ? 'cyan' : 'white';

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
        colorType,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Mouse gentle repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius && dist > 0) {
            const force = (mouseRadius - dist) / mouseRadius;
            p.x += (dx / dist) * force * 1.6;
            p.y += (dy / dist) * force * 1.6;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.colorType === 'orange') {
          ctx.fillStyle = `rgba(255, 122, 26, ${p.alpha * 0.9})`;
        } else if (p.colorType === 'cyan') {
          ctx.fillStyle = `rgba(83, 208, 255, ${p.alpha * 0.8})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.4})`;
        }
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            if (p.colorType === 'orange' || p2.colorType === 'orange') {
              ctx.strokeStyle = `rgba(255, 122, 26, ${lineAlpha * 1.2})`;
            } else if (p.colorType === 'cyan' || p2.colorType === 'cyan') {
              ctx.strokeStyle = `rgba(83, 208, 255, ${lineAlpha * 1.1})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha * 0.6})`;
            }
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Pitch dark GitHance base overlay */}
      <div className="absolute inset-0 bg-[#0b0d0f]" />

      {/* Atmospheric ambient glows matching GitHance */}
      <div className="absolute top-1/6 -left-20 w-[500px] h-[500px] bg-[#ff7a1a]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[550px] h-[550px] bg-[#53d0ff]/7 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-[#ff7a1a]/8 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle tech grid pattern */}
      <div className="absolute inset-0 bg-grid-mesh opacity-40" />

      {/* Interactive Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-50" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,13,15,0.75)_100%)]" />
    </div>
  );
};
