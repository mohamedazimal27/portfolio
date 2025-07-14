import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { skills } from '../data/mockData';

const Skills = () => {
  const skillCategories = [
    { 
      title: 'Programming Languages', 
      skills: skills.languages, 
      icon: '💻',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Automation Platforms', 
      skills: skills.automation, 
      icon: '⚙️',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'AI/ML Technologies', 
      skills: skills.aiml, 
      icon: '🧠',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Development Tools', 
      skills: skills.tools, 
      icon: '🛠️',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across different domains
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`text-2xl p-3 bg-gradient-to-r ${category.gradient} bg-opacity-10 rounded-xl`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-gray-200"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Industrial Control Systems',
                'SCADA Development',
                'Process Automation',
                'IoT Integration',
                'Cloud Computing',
                'Database Design',
                'API Development',
                'System Architecture',
                'DevOps',
                'Agile Methodologies'
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 0z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold">AI/ML Specialist</h4>
                  <p className="text-blue-100 text-sm">Advanced certification in machine learning</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 0z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold">Industrial Automation</h4>
                  <p className="text-blue-100 text-sm">Certified in PLC and SCADA systems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 0z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold">Cloud Architecture</h4>
                  <p className="text-blue-100 text-sm">AWS and Azure cloud solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;