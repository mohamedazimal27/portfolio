import React, { useEffect, useRef } from 'react';
import { aboutMe } from '../data/mockData';

const About = () => {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '50+', label: 'AI Projects' },
    { value: '90%', label: 'Manual Work Reduced' },
    { value: '5', label: 'Companies' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">01</span>
          <div className="circuit-line flex-1 max-w-[100px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">About</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="reveal font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Control Engineer turned
              <br />
              <span className="text-primary">AI Automation Developer</span>
            </h2>

            <div className="space-y-4">
              {aboutMe.content.map((paragraph, index) => (
                <p key={index} className="reveal font-mono text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary/50 mr-2">{'>'}</span>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Terminal-style skills */}
            <div className="reveal mt-8 bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <span className="w-2 h-2 bg-red-500/60" />
                <span className="w-2 h-2 bg-yellow-500/60" />
                <span className="w-2 h-2 bg-green-500/60" />
                <span className="ml-3 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">skills.config</span>
              </div>
              <div className="space-y-2">
                {aboutMe.skills.map((skill, index) => (
                  <p key={index} className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary mr-2">$</span>
                    <span className="text-foreground/80">{skill}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="reveal group bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  <p className="font-display text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Tech */}
            <div className="reveal mt-6 bg-card border border-border p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'n8n', 'LangChain', 'FastAPI', 'React', 'OpenAI', 'Supabase', 'ChromaDB'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-muted-foreground border border-border px-3 py-1.5 hover:border-primary/40 hover:text-foreground transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
