import React, { useState, useEffect, useRef } from 'react';
import { portfolioProjects } from '../data/mockData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef(null);

  const categories = ['All', ...new Set(portfolioProjects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === selectedCategory);

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
    <section id="portfolio" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">04</span>
          <div className="circuit-line flex-1 max-w-[100px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</span>
        </div>

        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Selected <span className="text-primary">Works</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="reveal flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="reveal group relative bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 cursor-pointer"
              onClick={() => window.open(project.liveDemo || project.github, '_blank')}
            >
              {/* Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,7%)] via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary bg-background/80 backdrop-blur-sm border border-primary/20 px-3 py-1">
                    {project.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-10 h-10 border border-primary/40 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 border border-border px-3 py-1 group-hover:border-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
