import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { personalInfo, contactInfo } from '../data/mockData';

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "There was an error sending your message. Please try again or contact me directly.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">06</span>
          <div className="circuit-line flex-1 max-w-[100px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="reveal">
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
                Let's <span className="text-primary">Connect</span>
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Have a project in mind or want to discuss AI automation opportunities? I'm always open to new challenges.
              </p>
            </div>

            {/* Contact Details */}
            <div className="reveal space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Email</p>
                  <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <div className="group flex items-center gap-4 p-4 bg-card border border-border">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Location</p>
                  <p className="font-mono text-sm text-foreground">{contactInfo.location}</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 bg-card border border-border">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Status</p>
                  <p className="font-mono text-sm text-primary">{contactInfo.availability}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="reveal flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="reveal bg-card border border-border p-8 lg:p-10">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border">
                <span className="w-2 h-2 bg-red-500/60" />
                <span className="w-2 h-2 bg-yellow-500/60" />
                <span className="w-2 h-2 bg-green-500/60" />
                <span className="ml-3 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">message.send</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                      className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider py-6 hover:shadow-[0_0_30px_hsl(172_100%_50%/0.3)] transition-all duration-300 disabled:opacity-50 rounded-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
