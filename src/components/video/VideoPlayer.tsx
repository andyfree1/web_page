import React, { useState, useEffect, useCallback } from 'react';
import { Loader } from 'lucide-react';
import VideoThumbnail from './VideoThumbnail';
import VideoError from './VideoError';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  const loadVideoData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

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
      setError('Unable to load video. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [videoId]);

  useEffect(() => {
    loadVideoData();
  }, [loadVideoData]);

  const handlePlay = () => {
    setIsPlaying(true);
    setError(null);
  };

  const handleRetry = () => {
    setIsPlaying(false);
    loadVideoData();
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-gray-900" style={{ paddingBottom: '56.25%' }}>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader className="w-12 h-12 text-white animate-spin" />
        </div>
      ) : error ? (
        <VideoError message={error} onRetry={handleRetry} />
      ) : !isPlaying ? (
        <VideoThumbnail
          thumbnailUrl={thumbnailUrl}
          title={title}
          onPlay={handlePlay}
        />
      ) : (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute top-0 left-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
          onError={() => {
            setError('Failed to load video player. Please try again.');
            setIsPlaying(false);
          }}
        />
      )}
    </div>
  );
}