import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

interface AnimatedFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function AnimatedFrame({
  src: initialSrc,
  alt,
  width = 800,
  height = 800,
  className = '',
}: AnimatedFrameProps) {
  const [src, setSrc] = useState(initialSrc);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    console.error('Failed to load image:', src);
  };

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setSrc(imageUrl);
    setImageLoaded(false);
    setImageError(false);
  };

  return (
    <ImageUploader onImageUpload={handleImageUpload}>
      <div 
        className={`relative group ${className}`}
        style={{ 
          width: Math.min(width, 800),
          height: 'auto',
          aspectRatio: '1/1'
        }}
      >
        {/* Enhanced outer glow effect */}
        <div className="absolute -inset-6 bg-gradient-to-r from-[#1E3D59] via-[#E5E5E5] to-[#1E3D59] rounded-2xl opacity-75 blur-xl animate-pulse-glow" />
        
        {/* Secondary glow for depth */}
        <div className="absolute -inset-3 bg-[#E5E5E5] rounded-2xl opacity-50 blur-lg animate-pulse-glow" style={{
          animationDelay: '-2s'
        }} />

        {/* Main frame container */}
        <div className="relative z-10 bg-gradient-to-br from-[#1E3D59] to-[#2A4E6E] p-1.5 rounded-xl overflow-hidden">
          <div className="relative overflow-hidden rounded-lg bg-gray-100">
            {/* Loading state */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[#1E3D59] border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* Image */}
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ minHeight: '400px' }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />

            {/* Error state */}
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-red-500">Failed to load image</p>
              </div>
            )}

            {/* Enhanced animated border overlay */}
            <div className="absolute inset-0 border-[6px] border-[#E5E5E5]/30 rounded-lg" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#E5E5E5] to-transparent animate-rotate-gradient" />
              <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-[#E5E5E5] to-transparent animate-rotate-gradient" />
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-0 right-0 w-full h-3 bg-gradient-to-l from-[#E5E5E5] to-transparent animate-rotate-gradient" />
              <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-b from-[#E5E5E5] to-transparent animate-rotate-gradient" />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-[#E5E5E5] to-transparent animate-rotate-gradient" />
              <div className="absolute bottom-0 left-0 w-3 h-full bg-gradient-to-t from-[#E5E5E5] to-transparent animate-rotate-gradient" />
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-full h-3 bg-gradient-to-l from-[#E5E5E5] to-transparent animate-rotate-gradient" />
              <div className="absolute bottom-0 right-0 w-3 h-full bg-gradient-to-t from-[#E5E5E5] to-transparent animate-rotate-gradient" />
            </div>

            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30">
              <div className="absolute inset-0 translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </ImageUploader>
  );
}