import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { personalInfo, contactInfo } from '../data/mockData';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/mwpqkkeb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="container mx-auto px-4 max-w-screen-md">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Information</h3>
            <p className="text-gray-400">
              Feel free to reach out via email. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
            </p>
            <div className="space-y-2 pt-2">
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {contactInfo.email}
              </p>
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {contactInfo.location}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <Card className="bg-gray-800/50 border border-gray-700/50 shadow-sm rounded-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" required className="text-sm bg-gray-700/50 text-white border-gray-600/50 placeholder-gray-400"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="text-sm bg-gray-700/50 text-white border-gray-600/50 placeholder-gray-400"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="text-sm bg-gray-700/50 text-white border-gray-600/50 placeholder-gray-400"/>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows={4} required className="text-sm bg-gray-700/50 text-white border-gray-600/50 placeholder-gray-400"/>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
