import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">Get in touch with our expert team</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="tel:+27814650764"
            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-8 h-8 text-blue-900 mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+27 81 465 0764</p>
          </a>

          <a
            href="mailto:info@beneficialownershipregistration.co.za"
            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-8 h-8 text-blue-900 mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600 break-all">info@beneficialownershipregistration.co.za</p>
          </a>

          <a
            href="https://www.google.com/maps/place/Thembisa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <MapPin className="w-8 h-8 text-blue-900 mb-4" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Thembisa, South Africa</p>
          </a>
        </div>
      </div>
    </div>
  );
}