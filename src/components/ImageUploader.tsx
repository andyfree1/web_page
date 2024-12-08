import React, { useState, useCallback } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  children: React.ReactNode;
}

export default function ImageUploader({ onImageUpload, children }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        onImageUpload(file);
        e.dataTransfer.clearData();
      }
    }
  }, [onImageUpload]);

  return (
    <div
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className="relative"
    >
      {isDragging && (
        <div className="absolute inset-0 z-50 bg-[#1E3D59]/80 rounded-xl flex items-center justify-center">
          <div className="text-white text-center">
            <Upload className="w-12 h-12 mx-auto mb-2" />
            <p className="text-lg font-semibold">Drop image here</p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}