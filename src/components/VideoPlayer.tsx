import React, { useState, useEffect } from 'react';
import { Play, AlertCircle, Loader } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadVideoData = async () => {
      try {
        const response = await fetch(`https://vimeo.com/api/v2/video/${videoId}.json`);
        if (!response.ok) throw new Error('Failed to load video data');
        
        const [data] = await response.json();
        setThumbnailUrl(data.thumbnail_large);
      } catch (err) {
        setError('Unable to load video. Please check your connection and try again.');
        console.error('Video loading error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadVideoData();
  }, [videoId]);

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-gray-900" style={{ paddingBottom: '56.25%' }}>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <Loader className="w-12 h-12 text-white animate-spin" />
        </div>
      ) : error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white">
          <AlertCircle className="w-12 h-12 mb-2" />
          <p className="text-center px-4">{error}</p>
        </div>
      ) : (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?h=b1777bbf85&title=0&byline=0&portrait=0`}
          className="absolute top-0 left-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      )}
    </div>
  );
}