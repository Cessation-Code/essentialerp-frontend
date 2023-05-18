import React from 'react';

const Terms = () => {
  return (
    <div className="flex flex-col relative bg-white">
      {/* here's the diagonal object giving at the top */}
      <div className="z-0 absolute -top-56 bottom-96 h-[500px] inset-0 bg-[#7622FF] opacity-50 transform -skew-y-[10deg]"></div>
      <div className="bg-white  p-8 max-w-2xl mx-auto z-10 rounded-x1 shadow-xl" >
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-lg mb-4">Here are the terms and conditions of our service:</p>
        <ul className="list-disc pl-4 mb-8">
          <li><b>Maintenance and Support</b>: The company will provide maintenance and support services for the software during the term of this agreement.</li>
          <li><b>Ownership</b>: The software and all intellectual property rights are owned by the company.</li>
          <li><b>Restrictions</b>: The customer shall not copy, modify, distribute, or create derivative works of the software.</li>
          <li><b>Confidentiality</b>: The customer shall maintain the confidentiality of the software and not disclose any information regarding the software to any third party.</li>
          <li><b>Disclaimer</b>: The customer shall not be responsible for any loss, damage, or damage to the customer's computer system or data, or any other person's computer system or data, caused by the use of the software.</li>
          <li><b>Intellectual Property Rights</b>: The customer shall not use the software to create derivative works of the software, or to create derivative works of the software without the customer's permission.</li>
          <li><b>Data Protection</b>: The customer shall not use the software to collect, store, or transmit any personal data.</li>
          <li><b>Data Retention</b>: The customer shall retain all the data that the customer has entered into the software.</li>
          <li><b>Data Security</b>: The customer shall not use the software to store or transmit any confidential information.</li>
          <li><b>Data Integrity</b>: The customer shall not use the software to store or transmit any data that is not in accordance with the documentation.</li>
          <li><b>Data Availability</b>: The customer shall not use the software to store or transmit any data that is not available.</li>
          <li><b>Termination</b>: The company may terminate this agreement if the customer breaches any of the terms and conditions.</li>
          <li><b>Warranty</b>: The company warrants that the software will operate in accordance with the documentation.</li>
          <li><b>Limitation of Liability</b>: The company shall not be liable for any indirect, incidental, or consequential damages arising out of the use of the software.</li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;

