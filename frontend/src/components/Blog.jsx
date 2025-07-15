import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  return (
    <section id="blog" className="py-16" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="container mx-auto px-4 max-w-screen-md">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Thoughts and articles on AI, automation, and modern technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group bg-gray-800/50 border border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => console.log(`Navigating to: ${post.title}`)}
            >
              <div className="relative overflow-hidden h-40">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-md font-semibold text-white line-clamp-2">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 h-10">
                  {post.excerpt}
                </p>
                <Badge variant="secondary" className="text-xs bg-gray-700/50 text-gray-300 border-gray-600/50">
                  {post.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
