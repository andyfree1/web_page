import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface VideoErrorProps {
  message: string;
  onRetry: () => void;
}

export default function VideoError({ message, onRetry }: VideoErrorProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
      <AlertCircle className="w-12 h-12 mb-4" />
      <p className="text-center px-4 mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
      >
        <RefreshCw className="w-5 h-5" />
        Try Again
      </button>
    </div>
  );
}