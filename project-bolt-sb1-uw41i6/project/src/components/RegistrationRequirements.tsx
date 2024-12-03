import React from 'react';
import { Mail, FileText, UserCheck, MapPin } from 'lucide-react';

export function RegistrationRequirements() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Required Registration Information
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Please send the following information to complete your registration
          </p>
          <a
            href="mailto:info@beneficialownershipregistration.co.za?subject=Company%20Registration%20Details"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Send Registration Details
          </a>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-6 h-6 text-blue-900" />
                  <h3 className="text-xl font-semibold">Business Details</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Company Registration Number</li>
                  <li>• Date of Company Registration (DD/MM/YYYY)</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <UserCheck className="w-6 h-6 text-blue-900" />
                  <h3 className="text-xl font-semibold">Owner's Information</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Full Name (as per ID)</li>
                  <li>• ID Number</li>
                  <li>• ID Date of Issue (DD/MM/YYYY)</li>
                  <li>• Email Address</li>
                  <li>• Primary Contact Number</li>
                  <li>• Alternative Contact Number (if available)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-blue-900" />
                <h3 className="text-xl font-semibold">Physical Address</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Street Name</li>
                <li>• Suburb</li>
                <li>• City</li>
                <li>• Postal Code</li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> All information provided will be treated as confidential and used solely for registration purposes. You will receive a confirmation email within 2 business days once your information has been processed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}