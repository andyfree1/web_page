import React, { useState, useEffect } from 'react';
import { Play, AlertCircle, Loader } from 'lucide-react';

interface VimeoEmbedProps {
  videoId: string;
  title: string;
}

export default function VimeoEmbed({ videoId, title }: VimeoEmbedProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Vimeo oEmbed API
    const checkVideoAvailability = async () => {
      try {
        const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`);
        if (!response.ok) {
          throw new Error('Video not available');
        }
      } catch (err) {
        setError('Video not available. Please check the video ID.');
      }
    };

    checkVideoAvailability();
  }, [videoId]);

  const handlePlay = () => {
    setIsLoading(true);
    setError(null);
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden glass" style={{ paddingBottom: '56.25%' }}>
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
          <AlertCircle className="w-12 h-12 mb-2" />
          <p className="text-center px-4">{error}</p>
        </div>
      ) : isLoading && !isPlaying ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
          <Loader className="w-12 h-12 mb-2 animate-spin" />
          <p className="text-center px-4">Loading video...</p>
        </div>
      ) : !isPlaying ? (
        <button 
          className="absolute inset-0 bg-gradient-to-br from-[#0B2447] to-[#576CBC] flex items-center justify-center group cursor-pointer"
          onClick={handlePlay}
        >
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
            <Play className="w-10 h-10 text-white fill-current" />
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError('Failed to load video. Please try again.');
            setIsPlaying(false);
            setIsLoading(false);
          }}
        />
      )}
    </div>
  );
}