import {
  ArrowDownToLine,
  CheckCircle,
  Clock,
  FunctionSquare,
  Home,
  Percent,
  Pocket,
  Store,
} from 'lucide-react';

export const meta = {
  title: 'Digitycoon',
  description: 'Your go to destination for digital products.',

  developer: {
    name: '8Bitwatermelon',
    year: '2023',
  },
};

export const perks = [
  {
    name: 'Instant delivery',
    description:
      'Get your assets delivered to your secured email in seconds and download them right away.',
    icon: ArrowDownToLine,
  },
  {
    name: '24/7 Customer Support',
    description:
      'Receive assistance anytime, day or night, from our dedicated support team.',
    icon: Clock,
  },
  {
    name: 'Lifetime Updates',
    description:
      'Enjoy free updates and improvements for your purchased assets for a lifetime.',
    icon: Pocket,
  },
  {
    name: 'Money-Back Guarantee',
    description:
      'Not satisfied? Get a full refund within 30 days, no questions asked.',
    icon: CheckCircle,
  },
  {
    name: 'Exclusive Discounts',
    description:
      'Access special discounts and promotions for premium members only.',
    icon: Percent,
  },
  {
    name: 'Variety of Formats',
    description:
      'Download assets in multiple file formats to suit your specific needs.',
    icon: FunctionSquare,
  },
];

export const navLinks = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
  },
  {
    name: 'Store',
    href: '/store',
    icon: Store,
  },
  {
    name: 'Deals',
    href: '/store/deals',
    icon: Percent,
  },
];
