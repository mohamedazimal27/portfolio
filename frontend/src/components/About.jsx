import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { aboutMe } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-16" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="container mx-auto px-4 max-w-screen-md">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Bio */}
          <div className="space-y-4">
            {aboutMe.content.map((paragraph, index) => (
              <p key={index} className="text-base text-gray-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column: Stats & Skills */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-800/50 border border-gray-700/50 p-4 text-center rounded-lg">
                <p className="text-2xl font-bold text-indigo-400">7+</p>
                <p className="text-xs text-gray-400">Years Experience</p>
              </Card>
              <Card className="bg-gray-800/50 border border-gray-700/50 p-4 text-center rounded-lg">
                <p className="text-2xl font-bold text-violet-400">50+</p>
                <p className="text-xs text-gray-400">AI Projects</p>
              </Card>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {aboutMe.skills.map((skill, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'n8n', 'OpenAI', 'TensorFlow', 'React', 'FastAPI', 'MongoDB'].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-700/50 text-gray-300 border-gray-600/50 text-xs">
                    {tech}
                  </Badge>
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
