import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simulate data loading by using a timeout
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setError(true);
    }, 10000); // 10 seconds (20000 milliseconds)

    return () => {
      // Clear the timeout when the component is unmounted
      clearTimeout(loadingTimeout);
    };
  }, []);

  const handleRefresh = () => {
    // Reset the error state and trigger the loading again
    setError(false);
    setIsLoading(true);
    // Call your data loading function here or any relevant logic to fetch data again
    router.reload();
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-60">
      {isLoading && (
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-gray-900"></div>
      )}
      {!isLoading && error && (
        <div>
          <p>Something went wrong. Click the button below to refresh.</p>
          <button className="btn mt-2 hover:scale-95 transition-all rounded-md bg-opacity-20" onClick={handleRefresh}>Refresh</button>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
