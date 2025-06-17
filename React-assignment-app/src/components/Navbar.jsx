import React from 'react';
import Button from './Button';

const Navbar = ({ logo, links, onThemeToggle, darkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {logo || <span className="text-xl font-bold text-gray-800 dark:text-white">Logo</span>}
          </div>
          
          {/* Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {links?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${link.active ? 'border-blue-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <div className="flex items-center">
            <Button
              variant="secondary"
              size="small"
              onClick={onThemeToggle}
              className="ml-4"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;