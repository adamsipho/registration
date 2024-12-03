import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: 1499,
    features: [
      'Standard processing time',
      'Basic document review',
      'Email support',
      'Online submission',
    ],
  },
  {
    name: 'Professional',
    price: 2499,
    features: [
      'Priority processing',
      'Comprehensive document review',
      'Priority email & phone support',
      'Online submission',
      'Progress tracking',
      'Document templates',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 3999,
    features: [
      'Express processing',
      'Dedicated account manager',
      '24/7 priority support',
      'Online submission',
      'Advanced progress tracking',
      'Document templates',
      'Legal consultation',
      'Annual compliance review',
    ],
  },
];