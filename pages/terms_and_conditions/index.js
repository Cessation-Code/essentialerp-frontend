import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const TermsAndConditions = () => {
  const [activeTab_index, setactiveTab_index] = useState(0);
  const router = useRouter();
  const handleTabClick = (tab_index) => {
    setactiveTab_index(tab_index);
  };

  const handleAcceptClick = () => {
    router.push("/dashboard");
  };

  const ContinueToNextPage = (props) => {
    const { next_tab_index } = props;
    return (
      <button
        className="w-38 py-2 px-4 rounded-xl shadow-lg text-black bg-[#DACDF0]  item-center font-semibold hover:bg-[#B48DF3]"
        onClick={() => handleTabClick(next_tab_index)}
      >
        Continue to next page
      </button>
    );
  };

  return (
    <div className="bg-slate-400 min-h-screen mb-4 ">
      <div className="flex items-start pt-4 mb-40 ml-6">
        <Link href="/" className="text-lg font-semibold text-white">
          Essential
        </Link>
        <Link href="/" className="text-xl font-semibold text-[#022568]">
          ERP
        </Link>
      </div>

      <div className="container mx-auto w-fit h-fit max-h-auto bg-white flex justify-center items-center rounded-lg shadow-lg pr-6">
        {/* <div className="flex h-full"> */}
        {/* Sidebar*/}
        <div className="w-1/5 h-full bg-slate-600 rounded-r-lg pt-96 pl-8">
          <ul className="list-none space-y-6 flex flex-col justify-between">
            <li
              className={`cursor-pointer mb-2 ${activeTab_index === 0 ? "font-bold" : ""
                }`}
              onClick={() => handleTabClick(0)}
            >
              Terms of Use
            </li>
            <li
              className={`cursor-pointer mb-2 ${activeTab_index === 1 ? "font-bold" : ""
                }`}
              onClick={() => handleTabClick(1)}
            >
              Governing Laws
            </li>
            <li
              className={`cursor-pointer mb-2 ${activeTab_index === 2 ? "font-bold" : ""
                }`}
              onClick={() => handleTabClick(2)}
            >
              Prohibited Activities
            </li>
          </ul>
        </div>

        <div className="w-4/5">
          <div className="text-center mb-10">
            <h1 className="text-3xl text-[#B48DF3]">
              TERMS AND CONDITIONS
            </h1>
          </div>

          {activeTab_index === 0 && (
            <div className="ml-8">
              <h2 className="text-lg font-semibold text-[#B48DF3]">
                Terms of Use
              </h2>
              <p className="text-left mt-4">
                <b>1. Acceptance of Terms:</b> By using our ERP
                system, you agree to comply with these terms and
                conditions. <br /> <br />
                <b>2. User Responsibilities:</b> You are
                responsible for maintaining the confidentiality
                of your login credentials and for all activities
                conducted under your account. <br /> <br />
                <b>3. Intellectual Property:</b> All
                intellectual property rights, including
                software, logos, and trademarks, belong to our
                company. You may not reproduce, modify, or
                distribute any content without our written
                permission. <br /> <br />
                <b>4. Data Security:</b> We take reasonable
                measures to ensure the security of your data,
                but we are not liable for any unauthorized
                access or loss of data. <br /> <br />
                <b>5. System Availability:</b> We strive to
                provide uninterrupted access to our ERP system,
                but we do not guarantee its availability at all
                times. We may perform maintenance or updates
                that could result in temporary downtime. <br />{" "}
                <br />
                <b>6. Prohibited Activities:</b> You must not
                use our ERP system for any illegal or
                unauthorized purpose, including transmitting
                viruses, spam, or any malicious code. <br />{" "}
                <br />
              </p>
              <div className="flex justify-center">
                <ContinueToNextPage next_tab_index={1} />
              </div>
            </div>
          )}
          {activeTab_index === 1 && (
            <div className="ml-8">
              <h2 className="text-lg font-semibold text-[#B48DF3]">
                Governing Laws
              </h2>
              <p className="text-left mt-4">
                <b>1. Jurisdiction:</b> These terms and
                conditions are governed by the laws of KNUST.{" "}
                <br /> <br />
                <b>2. Dispute Resolution:</b> Any disputes
                arising from the use of our ERP system shall be
                resolved through negotiation or mediation. If
                resolution is not reached, the matter will be
                subject to the exclusive jurisdiction of the
                courts in KNUST. <br /> <br />
              </p>
              <div className="flex justify-center">
                <ContinueToNextPage next_tab_index={2} />
              </div>
            </div>
          )}
          {activeTab_index === 2 && (
            <div className="ml-8">
              <h2 className="text-lg font-semibold text-[#B48DF3]">
                Prohibited Activities
              </h2>
              <p className="text-left mt-4">
                <b>1. Unauthorized Access:</b> You must not
                attempt to gain unauthorized access to our ERP
                system, other users' accounts, or any restricted
                areas. <br /> <br />
                <b>2. Data Manipulation:</b> Modifying,
                tampering with, or attempting to manipulate data
                within the ERP system without proper
                authorization is strictly prohibited. <br />{" "}
                <br />
                <b>3. Reverse Engineering:</b> Reverse
                engineering, decompiling, or extracting the
                source code of the ERP system is prohibited.{" "}
                <br /> <br />
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
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TermsAndConditions;