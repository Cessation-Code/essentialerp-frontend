import React, { useState } from "react";
import Link from "next/link";
import {
  EmailIcon,
  PhoneIcon,
  DiagonalObject,
} from "../public/icons/contact/contacticons";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");



  const handleEmailCheck = () => {
    const mailtoUrl = `mailto:${'kk.opoku@outlook.com'}?subject=${encodeURIComponent('subject')}`;
    window.location.href = mailtoUrl;
  };
  
  return (
    <div className="page-container flex h-full  bg-[#DACDF0]">
      
      <div className="sidebar-container pl-6">
      <Link href="/" className="text-lg font-semibold text-white">
        Essential
      </Link>
      <a href="/" className="text-xl font-semibold text-[#022568]">
        ERP
      </a>
    </div>

      {/* Main Content */}
      <div className="w-5/6 pt-28 text-heading flex-col justify-center">
        {/* <div className="ml-12 z-20 absolute left-0 right-0 "> */}
        <div className=" flex flex-col  items-center pt-4">
          <p className=" text-3xl mb-10 text-[#B48DF3]">CONTACT US</p>
          <p className=" text-2xl mb-10 text-black">
            We'd Love to hear from you!
          </p>

          {/* Static contact information */}
          <div className="icons-container flex flex-row pb-12 gap-20">
            <div className="email-item-container flex flex-col items-center">
              <EmailIcon className="mb-4" />
              <p className="text-center">Email</p>
              <Link href="" className="text-center text-[#B48DF3]">
                essentialerp@gmail.com
              </Link>
            </div>
            <div className="phone-item-container flex flex-col items-center">
              <PhoneIcon className="mb-4" />
              <p className="text-center">Phone</p>
              <Link href="" className="text-center text-[#B48DF3]">
                +233509795488
              </Link>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleEmailCheck}>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="e.g. John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="e.g. Smith"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="e.g. johnsmith@gmail.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                value={message}
                placeholder="e.g. Hello, I would like to..."
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-3"
              ></textarea>
            </div>
            <button className="w-38 py-2 px-4 mt-8 rounded-xl shadow-lg text-black bg-[#B48DF3]  item-center font-semibold hover:bg-[#9747FF]" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    // /div>
  );
};

export default ContactUs;
