import React from 'react';
import { Bot, Code } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#576CBC] animate-gradient" />
      
      {/* Animated overlay patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4zODkgMCAxOC04LjA1OSAxOC0xOHMtOC4wNTktMTgtMTgtMTh6bTAgMzJjLTcuNzMyIDAtMTQtNi4yNjgtMTQtMTRzNi4yNjgtMTQgMTQtMTQgMTQgNi4yNjggMTQgMTQtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-10 animate-pulse" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
            Andrew Freeman
          </h1>
          <p className="text-xl lg:text-2xl mb-12 text-[#A5D7E8]">
            Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/20"
            >
              <Code className="w-5 h-5" />
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-[#A5D7E8]/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-[#A5D7E8]/20 transition-colors flex items-center gap-2 border border-[#A5D7E8]/20"
            >
              <Bot className="w-5 h-5" />
              Chat with AI Assistant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}