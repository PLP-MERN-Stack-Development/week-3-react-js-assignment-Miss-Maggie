import React, { useState } from 'react';

const AnimatedCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-8">
      <div 
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-24'}`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Animated Card
            </h3>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none"
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>

          <div className={`mt-2 transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-gray-600 dark:text-gray-300">
              This card has smooth height transitions when expanding/collapsing.
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors animate-bounce-slow">
                Bounce
              </button>
              <button className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors animate-spin-slow">
                Spin
              </button>
              <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-transform transform hover:scale-110">
                Scale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;