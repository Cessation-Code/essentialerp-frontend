import React, { useState } from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  const [activeTab, setActiveTab] = useState("terms-of-use");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#B48DF3] p-4 rounded-r-xl">
        <div className="basis-1/5 z-50 text-start">
          <Link href="/" className="text-lg font-semibold text-white">
            Essential
          </Link>
          <a href="/" className="text-xl font-semibold text-[#022568]">
            ERP
          </a>
        </div>
        <div className="flex justify-end">
          <ul className="list-none pt-40 space-y-4 items flex-end text-end">
            <li
              className={`cursor-pointer mb-2 ${
                activeTab === "terms-of-use" ? "font-bold" : ""
              }`}
              onClick={() => handleTabClick("terms-of-use")}
            >
              Terms of Use
            </li>
            <li
              className={`cursor-pointer mb-2 ${
                activeTab === "governing-laws" ? "font-bold" : ""
              }`}
              onClick={() => handleTabClick("governing-laws")}
            >
              Governing Laws
            </li>
            <li
              className={`cursor-pointer mb-2 ${
                activeTab === "prohibited-activities" ? "font-bold" : ""
              }`}
              onClick={() => handleTabClick("prohibited-activities")}
            >
              Prohibited Activities
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 pt-28  text-heading">
        <p className="text-center text-3xl mb-10 text-[#B48DF3]">
          TERMS AND CONDITIONS
        </p>
        <div className=" mr-40 flex flex-col text-start items-center pt-4">
          {activeTab === "terms-of-use" && (
            <div className="ml-8">
              <h2 className="text-lg font-semibold text-[#B48DF3]">
                Terms of Use
              </h2>
              <p className="text-left  mt-4">
                <b>1. Acceptance of Terms:</b> By using our ERP system, you
                agree to comply with these terms and conditions. <br /> <br />
                <b>2. User Responsibilities:</b> You are responsible for
                maintaining the confidentiality of your login credentials and
                for all activities conducted under your account. <br /> <br />
                <b>3. Intellectual Property:</b> All intellectual property
                rights, including software, logos, and trademarks, belong to our
                company. You may not reproduce, modify, or distribute any
                content without our written permission. <br /> <br />
                <b>4. Data Security:</b> We take reasonable measures to ensure
                the security of your data, but we are not liable for any
                unauthorized access or loss of data. <br /> <br />
                <b>5. System Availability:</b> We strive to provide
                uninterrupted access to our ERP system, but we do not guarantee
                its availability at all times. We may perform maintenance or
                updates that could result in temporary downtime. <br /> <br />
                <b>6. Prohibited Activities:</b> You must not use our ERP system
                for any illegal or unauthorized purpose, including transmitting
                viruses, spam, or any malicious code. <br /> <br />
              </p>
              <div className="flex justify-center">
              <button className="w-38 py-2 px-4  rounded-xl shadow-lg text-black bg-[#9747FF]  item-center font-semibold hover:bg-blue-600" onClick={() => handleTabClick("governing-laws")}>
                Continue to next page
              </button>
              </div>
            </div>
          )}
          {activeTab === "governing-laws" && (
            <div className="ml-8">
              <h2 className="text-lg font-semibold text-[#B48DF3]">
                Governing Laws
              </h2>
              <p className="text-left mt-4">
                <b>1. Jurisdiction:</b> These terms and conditions are governed
                by the laws of KNUST. <br /> <br />
                <b>2. Dispute Resolution:</b> Any disputes arising from the use
                of our ERP system shall be resolved through negotiation or
                mediation. If resolution is not reached, the matter will be
                subject to the exclusive jurisdiction of the courts in KNUST.{" "}
                <br /> <br />
              </p>
              <div className="flex justify-center">
              <button className="w-38 py-2 px-4 mt-20 rounded-xl shadow-lg text-black bg-[#9747FF]  item-center font-semibold hover:bg-blue-600" onClick={() => handleTabClick("prohibited-activities")}>
                Continue to next page
              </button>
              </div>
            </div>
          )}
          {activeTab === "prohibited-activities" && (
            <div className="ml-8">
              <h2 className="text-lg font-semibold text-[#B48DF3]">
                Prohibited Activities
              </h2>
              <p className="text-left mt-4">
                <b>1. Unauthorized Access:</b> You must not attempt to gain
                unauthorized access to our ERP system, other users' accounts, or
                any restricted areas.
                <br /> <br />
                <b>2. Data Manipulation:</b> Modifying, tampering with, or
                attempting to manipulate data within the ERP system without
                proper authorization is strictly prohibited.
                <br /> <br />
                <b>3. Reverse Engineering:</b> Reverse engineering, decompiling,
                or extracting the source code of the ERP system is prohibited.
                <br /> <br />
              </p>
              <div className="scroll-mt-2 flex flex-row justify-center pt-10  gap-8">
                <button className="w-28 py-2  px-4 rounded-xl shadow-lg bg-[#DFDFE0] text-black font-semibold hover:bg-red-600">
                  Decline
                </button>
                <button className="w-28 py-2 px-4 rounded-xl shadow-lg text-black bg-[#9747FF]  font-semibold hover:bg-blue-600">
                  Accept
                </button>
              </div>
            </div>
          )}
          {/* Buttons */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;



// import React from "react";
// // import Sidebar from "../pages/dashboard/";

// function Terms() {
//   return (
//     <div className="flex">
//       <div>
//         <Sidebar />
//       </div>
//       <main className="p-4">
//         <Main />
//       </main>
//     </div>
//   );
// }

// const Sidebar = () => {
//   return (
//   <div className="flex flex-col ">

//   </div>
//   )
// };

// const Main = () => {
//   return (
//     <div className="flex flex-col relative bg-white">
//       {/* here's the diagonal object giving at the top */}
//       <div className="z-0 absolute -top-56 bottom-96 h-[500px] inset-0 bg-[#7622FF] opacity-50 transform -skew-y-[10deg]"></div>
//       <div className="bg-white  p-8 max-w-2xl mx-auto z-10 rounded-x1 shadow-xl">
//         <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
//         <p className="text-lg mb-4">
//           Here are the terms and conditions of our service:
//         </p>
//         <ul className="list-disc pl-4 mb-8">
//           <li>
//             <b>Maintenance and Support</b>: The company will provide maintenance
//             and support services for the software during the term of this
//             agreement.
//           </li>
//           <li>
//             <b>Ownership</b>: The software and all intellectual property rights
//             are owned by the company.
//           </li>
//           <li>
//             <b>Restrictions</b>: The customer shall not copy, modify,
//             distribute, or create derivative works of the software.
//           </li>
//           <li>
//             <b>Confidentiality</b>: The customer shall maintain the
//             confidentiality of the software and not disclose any information
//             regarding the software to any third party.
//           </li>
//           <li>
//             <b>Disclaimer</b>: The customer shall not be responsible for any
//             loss, damage, or damage to the customer's computer system or data,
//             or any other person's computer system or data, caused by the use of
//             the software.
//           </li>
//           <li>
//             <b>Intellectual Property Rights</b>: The customer shall not use the
//             software to create derivative works of the software, or to create
//             derivative works of the software without the customer's permission.
//           </li>
//           <li>
//             <b>Data Protection</b>: The customer shall not use the software to
//             collect, store, or transmit any personal data.
//           </li>
//           <li>
//             <b>Data Retention</b>: The customer shall retain all the data that
//             the customer has entered into the software.
//           </li>
//           <li>
//             <b>Data Security</b>: The customer shall not use the software to
//             store or transmit any confidential information.
//           </li>
//           <li>
//             <b>Data Integrity</b>: The customer shall not use the software to
//             store or transmit any data that is not in accordance with the
//             documentation.
//           </li>
//           <li>
//             <b>Data Availability</b>: The customer shall not use the software to
//             store or transmit any data that is not available.
//           </li>
//           <li>
//             <b>Termination</b>: The company may terminate this agreement if the
//             customer breaches any of the terms and conditions.
//           </li>
//           <li>
//             <b>Warranty</b>: The company warrants that the software will operate
//             in accordance with the documentation.
//           </li>
//           <li>
//             <b>Limitation of Liability</b>: The company shall not be liable for
//             any indirect, incidental, or consequential damages arising out of
//             the use of the software.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Terms;

// import React, { useState } from "react";
// import Link from "next/link";
// import exp from "constants";

// const TermsAndConditions = () => {
//   const [activeTab, setActiveTab] = useState("terms-of-use");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="flex h-screen ">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-[#C3A2FA] p-4 rounded-r-xl">
//         <div className="basis-1/5 z-50 text-start">
//           <Link href="/" className="text-lg font-semibold text-white">
//             Essential
//           </Link>
//           <a href="/" className="text-xl font-semibold text-[#022568]">
//             ERP
//           </a>
//         </div>
//         <div className="flex justify-end">
//           <ul className="list-none pt-80  space-y-4 items">
//             <li
//               className={`cursor-pointer mb-2 ${
//                 activeTab === "terms-of-use" ? "font-bold" : ""
//               }`}
//               onClick={() => handleTabClick("terms-of-use")}
//             >
//               Terms of Use
//             </li>
//             <li
//               className={`cursor-pointer mb-2 ${
//                 activeTab === "governing-laws" ? "font-bold" : ""
//               }`}
//               onClick={() => handleTabClick("governing-laws")}
//             >
//               Governing Laws
//             </li>
//             <li
//               className={`cursor-pointer mb-2 ${
//                 activeTab === "prohibited-activities" ? "font-bold" : ""
//               }`}
//               onClick={() => handleTabClick("prohibited-activities")}
//             >
//               Prohibited Activities
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-3/4 p-4 flex flex-col justify-between">
//         {activeTab === "terms-of-use" && (
//           <div>
//             <h2>Terms of Use</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Reprehenderit, doloremque. Lorem ipsum dolor sit amet consectetur
//               adipisicing elit.
//             </p>
//           </div>
//         )}
//         {activeTab === "governing-laws" && (
//           <div>
//             <h2>Governing Laws</h2>
//             <p>This is the content for the Governing Laws.</p>
//           </div>
//         )}
//         {activeTab === "prohibited-activities" && (
//           <div>
//             <h2>Prohibited Activities</h2>
//             <p>This is the content for the Prohibited Activities.</p>
//           </div>
//         )}
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between mt-4">
//         <button
//           className="bg-white border border-gray-400 rounded-md py-2 px-4 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
//           onClick={() => handleDeclineClick()}
//         >
//           Decline
//         </button>
//         <button
//           className="bg-blue-500 border border-gray-400 rounded-md py-2 px-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onClick={() => handleAcceptClick()}
//         >
//           Accept
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;
