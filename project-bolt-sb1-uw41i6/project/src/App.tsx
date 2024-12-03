import React from 'react';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { PriceCalculator } from './components/PriceCalculator';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TestimonialImage } from './components/TestimonialImage';
import { RegistrationRequirements } from './components/RegistrationRequirements';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TestimonialImage />
      <Process />
      <PriceCalculator />
      <RegistrationRequirements />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}