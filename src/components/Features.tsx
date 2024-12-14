import React from 'react';
import { Package, Clock, Truck, Shield } from 'lucide-react';

const features = [
  {
    name: 'Wide Variety of Gadgets',
    description: 'Choose from our extensive collection of latest tech gadgets including laptops, cameras, and gaming consoles.',
    icon: Package,
  },
  {
    name: 'Quick Delivery',
    description: 'Get your rented gadgets delivered to your doorstep within 24 hours of confirmation.',
    icon: Truck,
  },
  {
    name: 'Flexible Duration',
    description: 'Rent for a day, week, or month. Extend or return early based on your needs.',
    icon: Clock,
  },
  {
    name: 'Damage Protection',
    description: 'All rentals come with comprehensive damage protection for peace of mind.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose QuickRent?
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 dark:bg-indigo-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}