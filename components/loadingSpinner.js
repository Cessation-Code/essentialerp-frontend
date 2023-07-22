import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-60">
      <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-gray-900 "></div>
    </div>
  );
};

export default LoadingSpinner;