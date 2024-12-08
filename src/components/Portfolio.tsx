import React, { useState } from 'react';
import { Play, Award, Users, Brain } from 'lucide-react';
import VideoPlayer from './video/VideoPlayer';

const categories = ['All', 'Video Production', 'AI Projects', 'Sales Achievement'];

const projects = [
  {
    title: 'Fuse Nightclub Promo',
    category: 'Video Production',
    videoId: '67933840',
    description: 'High-energy promotional video showcasing nightlife atmosphere and entertainment.'
  },
  {
    title: 'ODESSA',
    category: 'Video Production',
    videoId: '18550227',
    description: 'Cinematic short film demonstrating storytelling and production capabilities.'
  },
  {
    title: 'A Different Corner',
    category: 'Video Production',
    videoId: '21007773',
    description: 'Extended trailer showcasing creative storytelling and production value.'
  },
  {
    title: 'AI Sales Analytics Platform',
    category: 'AI Projects',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Advanced machine learning algorithms for sales prediction and customer behavior analysis.'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#576CBC] animate-gradient" />
      <div className="absolute inset-0 bg-mesh opacity-20" />
      
      <div className="container relative z-10 mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-white text-[#1E3D59]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group glass rounded-xl overflow-hidden hover-card"
            >
              {'videoId' in project ? (
                <VideoPlayer videoId={project.videoId} title={project.title} />
              ) : (
                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/80">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}