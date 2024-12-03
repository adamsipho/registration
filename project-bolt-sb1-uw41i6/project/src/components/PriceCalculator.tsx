import React, { useState } from 'react';
import { Calculator, Check } from 'lucide-react';

const features = [
  'Complete online registration process',
  'Secure document upload system',
  'Expert document review',
  'Compliance verification',
  'Email support',
  'Digital certificate delivery',
];

export function PriceCalculator() {
  const [directors, setDirectors] = useState(1);
  const basePrice = 399; // Base price includes 1 director
  const additionalDirectorPrice = 99;
  
  // Calculate total: base price + additional directors (if any) × R99
  const additionalDirectors = Math.max(0, directors - 1); // Subtract 1 as first director is included
  const total = basePrice + (additionalDirectors * additionalDirectorPrice);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            One straightforward price with no hidden fees
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Registration Package</h3>
                  <p className="text-gray-600 mt-2">Complete beneficial ownership registration</p>
                </div>
                <Calculator className="w-8 h-8 text-blue-900" />
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <label htmlFor="directors" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Directors
                  </label>
                  <input
                    type="number"
                    id="directors"
                    min="1"
                    value={directors}
                    onChange={(e) => setDirectors(Math.max(1, parseInt(e.target.value) || 1))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base Price (Includes 1 Director)</span>
                    <span className="font-medium">R{basePrice}</span>
                  </div>
                  {additionalDirectors > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Additional Directors ({additionalDirectors} × R{additionalDirectorPrice})</span>
                      <span className="font-medium">R{additionalDirectors * additionalDirectorPrice}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-base font-medium text-gray-900">Total</span>
                      <span className="text-base font-bold text-blue-900">R{total}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-900 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Start Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}