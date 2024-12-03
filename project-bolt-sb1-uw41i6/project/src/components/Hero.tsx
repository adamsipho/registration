import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Simplify Your Beneficial Ownership Registration
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Fast, secure, and compliant registration process for South African businesses.
            Expert guidance every step of the way.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
              Start Registration <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}