import React, { useEffect, useRef } from 'react';

interface PixelArtCanvasProps {
  grid: string[][];
  scale?: number;
  className?: string;
}

export function PixelArtCanvas({ grid, scale = 4, className = '' }: PixelArtCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 16;
    canvas.width = size * scale;
    canvas.height = size * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const color = grid[y]?.[x];
        if (color) {
          ctx.fillStyle = color;
          ctx.fillRect(x * scale, y * scale, scale, scale);
        }
      }
    }
  }, [grid, scale]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`pixel-border bg-white ${className}`}
      style={{ imageRendering: 'pixelated' }}
    />
  );
}
