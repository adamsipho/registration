import React from 'react';
import { Check } from 'lucide-react';
import { pricingTiers } from '../data/pricing';

export function Pricing() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the package that best suits your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg p-8 ${
                tier.recommended
                  ? 'bg-blue-900 text-white ring-4 ring-blue-900 ring-opacity-50'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R{tier.price}</span>
                <span className="text-sm opacity-80">/once-off</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold ${
                  tier.recommended
                    ? 'bg-white text-blue-900 hover:bg-blue-50'
                    : 'bg-blue-900 text-white hover:bg-blue-800'
                } transition-colors`}
              >
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}