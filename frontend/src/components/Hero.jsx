import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/mockData';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(172, 100%, 50%, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.fillStyle = `hsla(172, 100%, 50%, 0.4)`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="animate-in animate-delay-1 flex items-center gap-3 mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Available for Work
            </span>
          </div>

          {/* Name Display - Elegant Gradient */}
          <div className="animate-in animate-delay-2 mb-6 tracking-tight relative z-10">
            <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.05] flex flex-col">
              <span className="text-foreground">
                Mohamed
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent-2 drop-shadow-[0_0_15px_rgba(0,255,213,0.3)] mt-2">
                Azimal
              </span>
            </h1>
          </div>

          {/* Job Title - Sleek Tech Badge */}
          <div className="animate-in animate-delay-3 mb-10 relative z-10">
            <h2 className="flex items-center gap-4 font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground/90">
              <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-primary to-transparent" />
              <span className="text-foreground/80 font-semibold drop-shadow-[0_0_8px_rgba(0,255,213,0.2)]">AI Automation Architect</span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-primary/20 border border-primary/50 animate-pulse ml-1" />
            </h2>
          </div>

          {/* Tagline */}
          <p className="animate-in animate-delay-3 font-mono text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-4">
            {personalInfo.tagline}
          </p>

          {/* Location */}
          <p className="animate-in animate-delay-3 font-mono text-sm text-muted-foreground/60 flex items-center gap-2 mb-12">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/50">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {personalInfo.location} · Remote Worldwide
          </p>

          {/* CTA Buttons */}
          <div className="animate-in animate-delay-4 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group relative font-mono text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 hover:shadow-[0_0_30px_hsl(172_100%_50%/0.3)] transition-all duration-300 cursor-pointer"
            >
              View Works
              <span className="inline-block ml-2 translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-mono text-sm uppercase tracking-wider border border-border text-foreground px-8 py-4 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Decorative Corner Element */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-end gap-6">
            {['n8n', 'LangChain', 'Python', 'FastAPI'].map((tech, i) => (
              <span
                key={tech}
                className="animate-in font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/30"
                style={{ animationDelay: `${0.6 + i * 0.15}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-in animate-delay-5">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-pointer"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-float">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
