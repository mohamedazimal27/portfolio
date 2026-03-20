import React, { useEffect, useRef } from 'react';
import { services } from '../data/mockData';

const ServiceIcon = ({ index }) => {
  const icons = [
    // Workflow/Automation
    <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>,
    // Document/RAG
    <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="15" x2="15" y2="15" />
      <line x1="9" y1="11" x2="13" y2="11" />
    </svg>,
    // Voice/Microphone
    <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>,
    // System/Server
    <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>,
  ];
  return icons[index] || icons[0];
};

const Services = () => {
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
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03</span>
          <div className="circuit-line flex-1 max-w-[100px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Expertise</span>
        </div>

        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            What I <span className="text-primary">Build</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-md">
            Production-grade systems, not prototypes. Every solution is fault-tolerant by design.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="reveal group relative bg-card border border-border p-8 lg:p-10 hover:border-primary/40 transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon + Number */}
                <div className="flex items-start justify-between mb-8">
                  <div className="text-primary/70 group-hover:text-primary transition-colors duration-300">
                    <ServiceIcon index={index} />
                  </div>
                  <span className="font-display text-5xl font-bold text-border/50 group-hover:text-primary/10 transition-colors duration-500">
                    {service.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 border border-border px-3 py-1 group-hover:border-primary/20 group-hover:text-foreground/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-12 transition-all duration-500" />
                <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-l from-primary/40 to-transparent group-hover:w-12 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
