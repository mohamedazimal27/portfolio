import React from 'react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="flex items-center gap-6">
            <span className="font-display text-sm font-bold text-foreground tracking-tight">M.AZIMAL</span>
            <span className="font-mono text-xs text-muted-foreground">
              © {currentYear} All rights reserved.
            </span>
          </div>

          {/* Right — Socials */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="text-border">·</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="text-border">·</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
