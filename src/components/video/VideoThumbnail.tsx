import React from 'react';
import { Play } from 'lucide-react';

interface VideoThumbnailProps {
  thumbnailUrl: string | null;
  title: string;
  onPlay: () => void;
}

export default function VideoThumbnail({ thumbnailUrl, title, onPlay }: VideoThumbnailProps) {
  return (
    <button 
      className="absolute inset-0 group cursor-pointer overflow-hidden"
      onClick={onPlay}
    >
      {thumbnailUrl && (
        <div className="absolute inset-0">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-30" />
        </div>
      )}
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
          <Play className="w-10 h-10 text-white fill-current" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
    </button>
  );
}