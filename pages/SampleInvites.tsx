import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Layout/Header';
import { Button } from '../components/UI/Button';
import { SAMPLES_PREMIUM, SAMPLES_FACEMATCH } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type InviteType = 'premium' | 'facematch';
const VimeoPlayer = ({ vimeoId }: { vimeoId: string }) => {
  const params = new URLSearchParams({
    autoplay: "1",
    muted: "1",
    loop: "1",
    autopause: "0",
    controls: "0",
    title: "0",
    byline: "0",
    portrait: "0",
  });

  return (
    <iframe
      src={`https://player.vimeo.com/video/${vimeoId}?${params.toString()}`}
      allow="autoplay; fullscreen; picture-in-picture"
      loading="lazy"
      frameBorder={0}
      className="absolute inset-0 w-full h-full"
    />
  );
};
const R2VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
};




const SampleInvites: React.FC = () => {
  const [activeType, setActiveType] = useState<InviteType>('premium');
  const [currentIndex, setCurrentIndex] = useState(0); 
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentSamples =
    activeType === 'premium' ? SAMPLES_PREMIUM : SAMPLES_FACEMATCH;

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeType]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentSamples.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + currentSamples.length) % currentSamples.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) handleNext();
    if (touchStartX.current - touchEndX.current < -50) handlePrev();
  };

  return (
    <>
      <Header />
      <div className="min-h-[85vh] flex flex-col items-center bg-ivory pb-12 overflow-hidden pt-8">
        
        <div className="text-center mb-4 px-4">
          <h1 className="font-serif text-3xl md:text-4xl text-gold-600">
            Sample Collection
          </h1>
          <p className="text-stone-400 mt-2 text-sm uppercase tracking-widest">
            {activeType === 'premium'
              ? 'Premium Portrait Collection'
              : 'Face Match Cinematic Collection'}
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative w-full max-w-5xl h-[500px] md:h-[600px] flex items-center justify-center my-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentSamples.map((sample, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index === (currentIndex - 1 + currentSamples.length) % currentSamples.length;
            const isNext =
              index === (currentIndex + 1) % currentSamples.length;

            let dynamicClasses =
              "opacity-0 pointer-events-none scale-75 absolute transition-all duration-500";

            if (isActive) {
              dynamicClasses =
                "opacity-100 scale-100 z-30 shadow-2xl shadow-gold-400/20 relative";
            } else if (isPrev) {
              dynamicClasses =
                "opacity-40 scale-90 z-10 -translate-x-[60%] md:-translate-x-[80%] absolute blur-[2px]";
            } else if (isNext) {
              dynamicClasses =
                "opacity-40 scale-90 z-10 translate-x-[60%] md:translate-x-[80%] absolute blur-[2px]";
            }

            return (
              <div 
                key={sample.id}
                className={`
                  w-[280px] md:w-[350px]
                  rounded-[2rem] overflow-hidden border-4 border-white bg-transparent
                  ${sample.type === 'landscape'
                    ? 'aspect-video flex items-center'
                    : 'aspect-[9/16]'}
                  ${dynamicClasses}
                `}
              >
               {isActive ? (
  <R2VideoPlayer src={sample.videoUrl} />
) : (
  <img
    src={sample.thumb}
    alt=""
    loading="lazy"
    className="w-full h-full object-cover"
  />
)}



              </div>
            );
          })}

          {/* Arrows */}
          {currentSamples.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="hidden md:flex absolute left-4 lg:left-20 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg z-40"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={handleNext}
                className="hidden md:flex absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg z-40"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        <div className="flex space-x-2 mt-4 mb-8">
          {currentSamples.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-gold-600 w-6' : 'bg-stone-300'
              }`}
            />
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg px-4">
          <Button
            onClick={() => setActiveType('premium')}
            variant={activeType === 'premium' ? 'primary' : 'outline'}
            className="flex-1"
          >
            Premium Invite
          </Button>

          <Button
            onClick={() => setActiveType('facematch')}
            variant={activeType === 'facematch' ? 'primary' : 'outline'}
            className="flex-1"
          >
            Face Match Invite
          </Button>
        </div>
      </div>
    </>
  );
};

export default SampleInvites;
