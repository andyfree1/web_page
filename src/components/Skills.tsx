import React from 'react';
import { Brain, Code, Video, TrendingUp } from 'lucide-react';

const skills = [
  {
    name: 'AI Integration',
    percentage: 95,
    icon: Brain,
    color: '#4A90E2',
    gradient: 'from-[#4A90E2]/20 to-[#4A90E2]/5'
  },
  {
    name: 'Sales Leadership',
    percentage: 90,
    icon: TrendingUp,
    color: '#50E3C2',
    gradient: 'from-[#50E3C2]/20 to-[#50E3C2]/5'
  },
  {
    name: 'Video Production',
    percentage: 85,
    icon: Video,
    color: '#F5A623',
    gradient: 'from-[#F5A623]/20 to-[#F5A623]/5'
  },
  {
    name: 'Technical Expertise',
    percentage: 88,
    icon: Code,
    color: '#E23E57',
    gradient: 'from-[#E23E57]/20 to-[#E23E57]/5'
  }
];

export default function Skills() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#576CBC] animate-gradient" />
      
      {/* Animated mesh pattern */}
      <div className="absolute inset-0 bg-mesh opacity-20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Core Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative group"
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-xl blur-xl animate-pulse-glow`} />
              
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-card">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: skill.color }}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <h3 className="font-semibold mb-2 text-white">{skill.name}</h3>
                  <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full transition-all duration-1000 animate-shimmer"
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: skill.color
                      }}
                    />
                  </div>
                  <span className="text-sm text-white/80 mt-2">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}