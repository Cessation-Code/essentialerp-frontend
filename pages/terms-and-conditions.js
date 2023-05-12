   import React from 'react';
   
   /**
    * Returns a div containing the terms and conditions of the service.
    *
    * @return {JSX.Element} A div containing the terms and conditions.
    */

   const Terms = () => {
     return (
      <div className="bg-white shadow-md p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
      <p className="text-lg mb-4">Here are the terms and conditions of our service:</p>
      <ul className="list-disc pl-4 mb-8">
        <li>Maintenance and Support: The company will provide maintenance and support services for the software during the term of this agreement.</li>
        <li>Ownership: The software and all intellectual property rights are owned by the company.</li>
        <li>Restrictions: The customer shall not copy, modify, distribute, or create derivative works of the software.</li>
        <li>Confidentiality: The customer shall maintain the confidentiality of the software and not disclose any information regarding the software to any third party.</li>
        <li>Termination: The company may terminate this agreement if the customer breaches any of the terms and conditions.</li>
        <li>Warranty: The company warrants that the software will operate in accordance with the documentation.</li>
        <li>Limitation of Liability: The company shall not be liable for any indirect, incidental, or consequential damages arising out of the use of the software.</li>
      </ul>
    </div>
    
     );
   };

   export default Terms;

   







