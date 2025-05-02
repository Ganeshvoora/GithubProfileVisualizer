
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[90vh] bg-[#0f172a] flex flex-col items-center justify-center text-white p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 text-blue-500">404</h1>
        <p className="text-2xl mb-8 text-gray-300">
          Oops! The page you are looking for does not exist.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors duration-300
                     transform hover:scale-105"
        >
          Go back to Home
        </Link>
      </div>

      {/* Optional: Add a decorative element */}
      <div className="mt-12 text-gray-500 text-8xl opacity-20">
        ¯\_(ツ)_/¯
      </div>
    </div>
  );
};

export default NotFound;
