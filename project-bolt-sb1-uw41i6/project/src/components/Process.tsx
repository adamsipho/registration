import React from 'react';
import { ClipboardCheck, Upload, Shield, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Complete Application',
    description: 'Fill out our user-friendly online application form with your company details.',
    icon: ClipboardCheck,
  },
  {
    title: 'Submit Documents',
    description: 'Upload required documentation through our secure portal.',
    icon: Upload,
  },
  {
    title: 'Verification',
    description: 'Our experts verify your information and ensure compliance.',
    icon: Shield,
  },
  {
    title: 'Registration Complete',
    description: 'Receive your confirmation and compliance documentation.',
    icon: CheckCircle,
  },
];

export function Process() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple Registration Process
          </h2>
          <p className="text-lg text-gray-600">
            Complete your beneficial ownership registration in four easy steps
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}