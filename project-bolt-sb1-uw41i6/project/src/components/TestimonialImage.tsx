import React from 'react';

export function TestimonialImage() {
  return (
    <div className="relative aspect-[4/3] max-w-2xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
        alt="Professional business woman smiling in modern office setting, demonstrating success in beneficial ownership registration"
        className="rounded-lg shadow-lg object-cover w-full h-full"
        loading="lazy"
        width="1024"
        height="768"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
    </div>
  );
}