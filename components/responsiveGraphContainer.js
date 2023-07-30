import React from 'react';

const ResponsiveGraphContainer = ({ children }) => {
  return (
    <div className="w-full max-w-screen-md mx-auto">
      {children}
    </div>
  );
};

export default ResponsiveGraphContainer;
