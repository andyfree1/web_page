import React, { useState, useEffect } from 'react';
import { Play, AlertCircle, Loader, RefreshCw } from 'lucide-react';

interface VimeoPlayerProps {
  videoId: string;
  title: string;
}

export default function VimeoPlayer({ videoId, title }: VimeoPlayerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadVideoData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Use Vimeo's public API endpoint
        const response = await fetch(
          `https://vimeo.com/api/v2/video/${videoId}.json`,
          {
            headers: {
              'Accept': 'application/json',
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to load video data');
        }

        const [data] = await response.json();
        setThumbnailUrl(data.thumbnail_large);
      } catch (err) {
        console.error('Error fetching video data:', err);
        setError('Unable to load video preview. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadVideoData();
  }, [videoId]);

  const handlePlay = () => {
    setIsPlaying(true);
    setError(null);
    
    // Create and append the iframe when play is clicked
    const container = document.getElementById(`vimeo-container-${videoId}`);
    if (container) {
      const iframe = document.createElement('iframe');
      iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      
      container.innerHTML = '';
      container.appendChild(iframe);

      // Add error handling for iframe loading
      iframe.onerror = () => {
        setError('Failed to load video player. Please try again.');
        setIsPlaying(false);
      };
    }
  };

  const handleRetry = () => {
    setIsPlaying(false);
    setError(null);
    setIsLoading(true);
    
    // Reload video data
    const loadVideoData = async () => {
      try {
        const response = await fetch(
          `https://vimeo.com/api/v2/video/${videoId}.json`,
          {
            headers: {
              'Accept': 'application/json',
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to load video data');
        }

        const [data] = await response.json();
        setThumbnailUrl(data.thumbnail_large);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching video data:', err);
        setError('Unable to load video preview. Please try again later.');
        setIsLoading(false);
      }
    };

    loadVideoData();
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden glass" style={{ paddingBottom: '56.25%' }}>
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
          <AlertCircle className="w-12 h-12 mb-2" />
          <p className="text-center px-4 mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      ) : !isPlaying ? (
        <button 
          className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-primary-light/90 flex items-center justify-center group cursor-pointer"
          onClick={handlePlay}
          disabled={isLoading}
        >
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          )}
          <div className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
            {isLoading ? (
              <Loader className="w-10 h-10 text-white animate-spin" />
            ) : (
              <Play className="w-10 h-10 text-white fill-current" />
            )}
          </div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        </button>
      ) : (
        <div id={`vimeo-container-${videoId}`} className="absolute inset-0">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <Loader className="w-12 h-12 text-white animate-spin" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}