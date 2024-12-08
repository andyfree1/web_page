import React from 'react';
import { Calendar, Award, Briefcase, Lightbulb } from 'lucide-react';

const milestones = [
  {
    year: '2021',
    title: 'Hilton Grand Vacations',
    description: 'Pioneered AI-driven sales optimization systems',
    icon: Lightbulb,
    color: '#4A90E2'
  },
  {
    year: '2014',
    title: 'Wyndham Worldwide',
    description: 'President\'s Club & Elite Club Achievement',
    icon: Award,
    color: '#50E3C2'
  },
  {
    year: '2010',
    title: 'Lightspeed VT',
    description: 'Led production for virtual training systems',
    icon: Briefcase,
    color: '#F5A623'
  },
  {
    year: '1997',
    title: 'Press Play Films',
    description: 'Founded video production company',
    icon: Calendar,
    color: '#E23E57'
  }
];

export default function Timeline() {
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
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Career Milestones</h2>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-white/30 via-white/50 to-white/30 animate-pulse-glow" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="glass p-6 rounded-xl hover-card">
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-white">{milestone.year}</div>
                      <div className="text-xl text-white/90">{milestone.title}</div>
                      <div className="text-white/70">{milestone.description}</div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-8">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center animate-float"
                    style={{ 
                      backgroundColor: milestone.color,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <milestone.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}