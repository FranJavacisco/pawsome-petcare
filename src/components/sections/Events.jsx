import React, { useRef, useState } from 'react';
import { Calendar, Volume2, VolumeX, Play, Pause, Info } from 'lucide-react';
import { events } from './Events.1';

const Events = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeEvent, setActiveEvent] = useState(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Fashion Events
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us at our exclusive pet fashion events and discover the latest trends
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-3/5">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <div className="aspect-[16/10]">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                    loop
                    muted={isMuted}
                    playsInline
                    poster="/images/poster.png"
                  >
                    <source src="/video/event.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={togglePlay}
                        className="bg-white/20 hover:bg-white/30 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        ) : (
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        )}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="bg-white/20 hover:bg-white/30 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 md:p-4 bg-gray-900 text-white">
                <p className="text-xs md:text-sm font-medium">
                  Watch highlights from our previous fashion shows
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-2/5">
            <div className="space-y-3 md:space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`rounded-xl p-4 md:p-6 transition-all duration-300 cursor-pointer
                    ${activeEvent === event.id 
                      ? 'bg-indigo-50 border-indigo-200' 
                      : 'bg-white hover:bg-gray-50'} 
                    border shadow-sm hover:shadow-md`}
                  onClick={() => setActiveEvent(event.id === activeEvent ? null : event.id)}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-indigo-100 rounded-lg shrink-0">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <time className="text-sm font-semibold text-indigo-600">
                          {event.date}
                        </time>
                        <span className="text-xs md:text-sm text-gray-500">
                          {event.time}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300
                          ${activeEvent === event.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="text-sm md:text-base text-gray-600 mb-3">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Info className="w-4 h-4" />
                          <span className="text-xs md:text-sm">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;