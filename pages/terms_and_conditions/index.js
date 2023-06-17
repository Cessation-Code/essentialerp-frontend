import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const TermsAndConditions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleAcceptClick = () => {
    router.push("/signup");
  };

  const ContinueToNextPage = ({ nextTabIndex }) => {
    return (
      <button
        className="w-38 py-2 px-4 rounded-xl shadow-lg text-black bg-[#DACDF0] item-center font-semibold hover:bg-[#B48DF3]"
        onClick={() => handleTabClick(nextTabIndex)}
      >
        Continue to next page
      </button>
    );
  };

  return (

    
    <div className="bg-pink-300 bg-gradient-to-br from-pink-300 to-purple-500 min-h-screen">
      <div className="pt-4 pl-8">
        <Link href="/" className="text-lg font-semibold text-white">
          Essential
        </Link>
        <Link href="/" className="text-xl font-semibold text-[#022568]">
          ERP
        </Link>
      </div>

      {/* Main */}
      <div className="flex flex-col items-center justify-center my-10 md:my-48">
        <div className="bg-white shadow-lg rounded-lg px-10 py-8 w-full md:w-3/4 lg:w-1/2">
          <div className="text-center mb-10">
            <h1 className="text-3xl text-[#B48DF3]">TERMS AND CONDITIONS</h1>
            <div className="tabs mt-4 tabs-boxed bg-transparent justify-center">
              <AnimatePresence mode="wait">
                <motion.a
                  key={0}
                  className={`tab ${
                    activeTab === 0 ? "tab-active font-bold" : ""
                  }`}
                  onClick={() => handleTabClick(0)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Terms of Use
                </motion.a>
                <motion.a
                  key={1}
                  className={`tab ${
                    activeTab === 1 ? "tab-active font-bold" : ""
                  }`}
                  onClick={() => handleTabClick(1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Governing Laws
                </motion.a>
                <motion.a
                  key={2}
                  className={`tab ${
                    activeTab === 2 ? "tab-active font-bold" : ""
                  }`}
                  onClick={() => handleTabClick(2)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Prohibited Activities
                </motion.a>
              </AnimatePresence>
            </div>
          </div>
          <AnimatePresence mode="wait" r>
            {activeTab === 0 && (
              <motion.div
                className="ml-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={0}
              >
                <h2 className="text-lg font-semibold  text-[#B48DF3]">
                  Terms of Use
                </h2>
                <p className="text-left mt-4">
                  <b>1. Acceptance of Terms:</b> By using our ERP system, you
                  agree to comply with these terms and conditions. <br /> <br />
                  <b>2. User Responsibilities:</b> You are responsible for
                  maintaining the confidentiality of your login credentials and
                  for all activities conducted under your account. <br /> <br />
                  <b>3. Intellectual Property:</b> All intellectual property
                  rights, including software, logos, and trademarks, belong to
                  our company. You may not reproduce, modify, or distribute any
                  content without our written permission. <br /> <br />
                  <b>4. Data Security:</b> We take reasonable measures to ensure
                  the security of your data, but we are not liable for any
                  unauthorized access or loss of data. <br /> <br />
                  <b>5. System Availability:</b> We strive to provide
                  uninterrupted access to our ERP system, but we do not
                  guarantee its availability at all times. We may perform
                  maintenance or updates that could result in temporary
                  downtime. <br /> <br />
                  <b>6. Prohibited Activities:</b> You must not use our ERP
                  system for any illegal or unauthorized purpose, including
                  transmitting viruses, spam, or any malicious code. <br />{" "}
                  <br />
                </p>
                <div className="flex justify-center">
                  <ContinueToNextPage nextTabIndex={1} />
                </div>
              </motion.div>
            )}
            {activeTab === 1 && (
              <motion.div
                className="ml-8 w-120"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={1}
              >
                <h2 className="text-lg font-semibold text-[#B48DF3]">
                  Governing Laws
                </h2>
                <p className="text-left mt-4">
                  <b>1. Jurisdiction:</b> These terms and conditions are
                  governed by the laws of KNUST. <br /> <br />
                  <b>2. Dispute Resolution:</b> Any disputes arising from the
                  use of our ERP system shall be resolved through negotiation or
                  mediation.<br/>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If resolution is not reached, the matter will be
                  subject to the exclusive jurisdiction of the courts in KNUST.{" "}
                  <br /> <br />
                </p>
                <div className="flex justify-center">
                  <ContinueToNextPage nextTabIndex={2} />
                </div>
              </motion.div>
            )}
            {activeTab === 2 && (
              <motion.div
                className="ml-8 w-120"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={2}
              >
                <h2 className="text-lg font-semibold text-[#B48DF3]">
                  Prohibited Activities
                </h2>
                <p className="text-left mt-4">
                  <b>1. Unauthorized Access:</b> You must not attempt to gain
                  unauthorized access to our ERP system, other users' accounts,
                  or any restricted areas. <br /> <br />
                  <b>2. Data Manipulation:</b> Modifying, tampering with, or
                  attempting to manipulate data within the ERP system without
                  proper authorization is strictly prohibited. <br /> <br />
                  <b>3. Reverse Engineering:</b> Reverse engineering,
                  decompiling, or extracting the source code of the ERP system
                  is prohibited. <br /> <br />
                </p>
                <div className="scroll-mt-2 flex flex-row justify-center pt-10 gap-8">
                  <button
                    onClick={() => handleTabClick(0)}
                    className="w-fit py-2 px-4 rounded-xl shadow-lg bg-[#B48DF3] text-black font-semibold hover:bg-[#DACDF0]"
                  >
                    Go Back To Terms
                  </button>
                  <button
                    onClick={() => handleAcceptClick()}
                    className="w-fit py-2 px-4 rounded-xl shadow-lg text-black bg-[#DACDF0] font-semibold hover:bg-[#B48DF3]"
                  >
                    Accept
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
