import React from 'react';
import PropTypes from 'prop-types';

export default function ResponsiveGraphContainer({ children }){
  return (
    <div className="w-full max-w-screen-md mx-auto">
      {children}
    </div>
  );
};

ResponsiveGraphContainer.PropTypes = {
  children: PropTypes.node.isRequired,
}