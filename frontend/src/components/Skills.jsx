import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { skills } from '../data/mockData';

const Skills = () => {
  const skillCategories = [
    { title: 'Programming Languages', skills: skills.languages, icon: '💻' },
    { title: 'Automation Platforms', skills: skills.automation, icon: '⚙️' },
    { title: 'AI/ML Technologies', skills: skills.aiml, icon: '🧠' },
    { title: 'Development Tools', skills: skills.tools, icon: '🛠️' }
  ];

  return (
    <section id="skills" className="py-16" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="container mx-auto px-4 max-w-screen-md">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            A snapshot of the tools and technologies I use to build modern AI solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="bg-gray-800/50 border border-gray-700/50 p-4 rounded-lg"
            >
              <CardHeader className="p-0 mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-xl">{category.icon}</div>
                  <CardTitle className="text-md font-semibold text-white">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-gray-300 bg-gray-700/60 px-3 py-1 rounded-full">
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
