import React, { useEffect, useRef } from 'react';
import { skills } from '../data/mockData';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.05}s`;
              el.classList.add('animate-in');
            });
            // Animate skill bars
            entry.target.querySelectorAll('.skill-bar-fill').forEach((el, i) => {
              setTimeout(() => {
                el.style.width = el.dataset.level + '%';
              }, 300 + i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: 'AI & LLMs', key: 'aiml', color: 'hsl(172, 100%, 50%)' },
    { title: 'Automation', key: 'automation', color: 'hsl(280, 100%, 65%)' },
    { title: 'Dev & Infra', key: 'devinfra', color: 'hsl(172, 100%, 50%)' },
    { title: 'Industrial', key: 'industrial', color: 'hsl(215, 15%, 50%)', note: '(Context only — not seeking OT roles)' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">05</span>
          <div className="circuit-line flex-1 max-w-[100px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Skills</span>
        </div>

        <h2 className="reveal font-display text-3xl lg:text-5xl font-bold text-foreground mb-16 tracking-tight">
          Technical <span className="text-primary">Capabilities</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.key} className="reveal bg-card border border-border p-6 lg:p-8">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-3 h-3" style={{ backgroundColor: category.color }} />
                <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
                  {category.title}
                </h3>
                {category.note && (
                  <span className="font-mono text-[10px] text-muted-foreground/50 ml-auto">
                    {category.note}
                  </span>
                )}
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {skills[category.key].map((skill) => (
                  <div key={skill.name} className="reveal">
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-sm text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary overflow-hidden">
                      <div
                        className="skill-bar-fill h-full transition-all duration-1000 ease-out"
                        style={{
                          width: '0%',
                          backgroundColor: category.color,
                          boxShadow: `0 0 8px ${category.color}40`,
                        }}
                        data-level={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
