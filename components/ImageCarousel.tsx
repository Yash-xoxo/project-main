'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  title?: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {title && <h2 className="text-3xl font-bold text-foreground mb-6">{title}</h2>}
      
      <div className="relative w-full bg-card/40 border border-border/50 backdrop-blur-sm rounded-lg overflow-hidden">
        {/* Main carousel container */}
        <div className="relative w-full overflow-hidden bg-muted/20">
          <div className="relative w-full aspect-video">
            <Image
              src={images[currentIndex]}
              alt={`Project screenshot ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-lg bg-primary/20 border border-primary/50 text-primary hover:bg-primary/30 hover:border-primary/70 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-lg bg-primary/20 border border-primary/50 text-primary hover:bg-primary/30 hover:border-primary/70 transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-primary/20 border border-primary/50 text-primary text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail dots */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 p-4 bg-muted/10 border-t border-border/50">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
