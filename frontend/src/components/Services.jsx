import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { services } from '../data/mockData';

const Services = () => {
  return (
    <section id="services" className="py-16" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="container mx-auto px-4 max-w-screen-md">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What I Do
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            I specialize in creating intelligent automation solutions that bridge the gap between traditional systems and modern AI capabilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group bg-gray-800/50 border border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg"
            >
              <CardHeader className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl p-2 bg-gray-700/50 text-indigo-400 rounded-lg">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-white">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 space-y-3">
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-gray-700/50 text-gray-300 border-gray-600/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
