import React, { useEffect, useRef } from 'react';
import { experience } from '../data/mockData';

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.1}s`;
              el.classList.add('animate-in');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">02</span>
          <div className="circuit-line flex-1 max-w-[100px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Experience</span>
        </div>

        <h2 className="reveal font-display text-3xl lg:text-5xl font-bold text-foreground mb-16 tracking-tight">
          Professional <span className="text-primary">Journey</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Glow Line */}
          <div className="absolute left-[7px] lg:left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-0">
            {experience.map((job, index) => (
              <div key={job.id} className="reveal group relative flex gap-6 lg:gap-10 pb-12 last:pb-0">
                {/* Timeline Node */}
                <div className="relative flex-shrink-0 z-10 mt-1.5">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300" />
                  {index === 0 && (
                    <div className="absolute inset-0 w-4 h-4 lg:w-6 lg:h-6 border-2 border-primary animate-ping opacity-20" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-card border border-border p-6 lg:p-8 group-hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {job.role}
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground mt-1">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-1">
                      <span className="font-mono text-xs text-primary/70 border border-primary/20 px-3 py-1">
                        {job.period}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground/60 flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="font-mono text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary/40 mt-0.5 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
