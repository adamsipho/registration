export interface PricingTier {
  basePrice: number;
  directorPrice: number;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}