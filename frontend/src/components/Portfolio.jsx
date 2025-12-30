import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioProjects } from '../data/mockData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Voice AI', 'Content AI', 'Video AI', 'Mobile AI'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-background relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 max-w-screen-lg relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Work
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            A selection of projects that showcase my skills in AI and automation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group bg-gray-800/50 border border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden"
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <CardContent className="p-4 space-y-3">
                <CardTitle className="text-lg font-semibold text-white line-clamp-1">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 h-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-gray-700/50 text-gray-300 border-gray-600/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3 pt-2">
                  <Button
                    size="sm"
                    className="text-xs h-8"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs h-8 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
