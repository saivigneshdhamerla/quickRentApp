import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

interface GadgetCardProps {
  name: string;
  price: string;
  image: string;
  features: string[];
  index: number;
}

export function GadgetCard({ name, price, image, features, index }: GadgetCardProps) {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={elementRef}
      className={cn(
        'flex flex-col rounded-lg shadow-lg overflow-hidden opacity-0',
        isVisible && 'animate-fade-in-up',
        `animate-delay-${index * 100}`
      )}
    >
      <div className="flex-shrink-0 relative overflow-hidden group">
        <img
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={image}
          alt={name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="mt-3 text-2xl text-indigo-600 font-bold">{price}</p>
          <ul className="mt-4 space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-2 text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Button variant="primary" className="w-full">
            Rent Now
          </Button>
        </div>
      </div>
    </div>
  );
}