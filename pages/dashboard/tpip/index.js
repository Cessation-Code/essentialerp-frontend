import React, { useState } from 'react';
import AuthenticatedLayout from '../../../components/layouts/authenticated_layout/authenticated_layout';

const TPIP = () => {
  const [accordionState, setAccordionState] = useState([]);

  // Function to toggle accordion sections
  const toggleAccordion = (index) => {
    const newAccordionState = [...accordionState];
    newAccordionState[index] = !newAccordionState[index];
    setAccordionState(newAccordionState);
  };

  return (
    <div>
      <AuthenticatedLayout>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-4">Third-Party Integration Page</h1>

          <div className="grid grid-cols-1 gap-6">
            {/* Integration Status */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">Integration Status</h2>
              <div
                className="cursor-pointer"
                onClick={() => toggleAccordion(0)}
              >
                <h3 className="text-blue-600 font-semibold mb-2">
                  View Integration Status
                </h3>
              </div>
              {accordionState[0] && (
                <div className="pl-4">
                  {/* Integration status content */}
                  <p>Integration status content goes here.</p>
                </div>
              )}
            </div>

            {/* Integration Configuration */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">Integration Configuration</h2>
              <div
                className="cursor-pointer"
                onClick={() => toggleAccordion(1)}
              >
                <h3 className="text-blue-600 font-semibold mb-2">
                  Configure Integration
                </h3>
              </div>
              {accordionState[1] && (
                <div className="pl-4">
                  {/* Integration configuration content */}
                  <p>Integration configuration content goes here.</p>
                </div>
              )}
            </div>

            {/* Rest of the accordion sections */}
            {/* ... */}
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default TPIP;
