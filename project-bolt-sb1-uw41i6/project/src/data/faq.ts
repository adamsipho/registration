interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    title: 'General Information',
    items: [
      {
        question: 'What is beneficial ownership?',
        answer: 'Beneficial ownership refers to the natural person(s) who ultimately owns or controls a legal entity. This includes direct or indirect ownership of shares, voting rights, or control through other means.',
      },
      {
        question: 'Who needs to register beneficial ownership?',
        answer: 'All private companies, close corporations, and trusts in South Africa are required to maintain accurate and up-to-date beneficial ownership information as per the Companies Act and FICA requirements.',
      },
    ],
  },
  {
    id: 'process',
    title: 'Registration Process',
    items: [
      {
        question: 'What information is required for registration?',
        answer: 'Required information includes personal details of beneficial owners (name, ID/passport number, nationality), nature and extent of ownership or control, and supporting documentation.',
      },
      {
        question: 'How long does the registration process take?',
        answer: 'Standard processing typically takes 5-7 business days. Express processing options are available for urgent requests.',
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Requirements',
    items: [
      {
        question: 'What are the ongoing compliance requirements?',
        answer: 'Companies must maintain up-to-date beneficial ownership information and notify relevant authorities of any changes within prescribed timeframes.',
      },
      {
        question: 'What happens if I don\'t register?',
        answer: 'Non-compliance with beneficial ownership registration requirements can result in significant penalties, including fines and potential legal consequences.',
      },
    ],
  },
];