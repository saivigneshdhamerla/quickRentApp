import React from 'react';
import { Upload } from 'lucide-react';
import { GadgetCard } from './GadgetCard';
import { Button } from './ui/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const gadgets = [
  {
    name: 'Gaming Console',
    price: '$25/day',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    features: ['Latest PS5/Xbox', '2 Controllers', 'Popular Games Included', '4K Gaming'],
  },
  {
    name: 'Professional Camera',
    price: '$35/day',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    features: ['4K Video', 'Multiple Lenses', 'Stabilization', 'Pro Equipment'],
  },
  {
    name: 'Premium Laptop',
    price: '$45/day',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    features: ['Latest Processors', 'High-End Graphics', 'SSD Storage', 'Pro Software'],
  },
];

export default function GadgetList() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div id="gadgets" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={cn(
            'text-center opacity-0',
            isVisible && 'animate-fade-in-up'
          )}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Gadgets
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our selection of premium gadgets
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {gadgets.map((gadget, index) => (
            <GadgetCard key={gadget.name} {...gadget} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="outline" size="lg">
            <Upload className="h-5 w-5 mr-2" />
            List Your Gadget for Rent
          </Button>
        </div>
      </div>
    </div>
  );
}