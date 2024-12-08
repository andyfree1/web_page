import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
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
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Get in Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-xl hover-card">
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span>andyfree@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <span>(702) 321-4885</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span>Las Vegas, Nevada</span>
              </div>
            </div>
          </div>

          <form className="glass p-8 rounded-xl hover-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full px-8 py-3 bg-white text-[#1E3D59] rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 font-semibold"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}