import React from 'react';
import Card from './Card';

const ResponsiveExample = () => {
  return (
    <Card title="Responsive Design" className="mb-8">
      <div className="space-y-4">
        <p className="text-lg">
          This component changes layout based on screen size using Tailwind's responsive prefixes.
        </p>
        
        {/* Grid that changes columns based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Mobile', 'Tablet', 'Laptop', 'Desktop'].map((item, index) => (
            <div 
              key={index}
              className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg text-center transition-all hover:scale-105"
            >
              <h4 className="font-medium text-blue-800 dark:text-blue-200">{item}</h4>
              <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
                {index === 0 && 'Always visible'}
                {index === 1 && 'Visible on sm (≥640px)'}
                {index === 2 && 'Visible on lg (≥1024px)'}
                {index === 3 && 'Visible on xl (≥1280px)'}
              </p>
            </div>
          ))}
        </div>
        
        {/* Text that changes size based on screen */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center mt-6">
          This text grows larger as the screen gets bigger!
        </p>
        
        {/* Button with responsive sizing */}
        <div className="flex justify-center">
          <button className="px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base bg-green-500 hover:bg-green-600 text-white rounded transition-colors">
            Responsive Button
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ResponsiveExample;