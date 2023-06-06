import React, { useState } from "react";
import Link from "next/link";
import {
  EmailIcon,
  PhoneIcon,
 
} from "../public/icons/contact/contacticons";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form data (firstName, lastName, phoneNumber, message) and send it to the server or perform any desired actions
    console.log("Form submitted");
  };

  return (
    <div className="flex h-screen">
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
      </div>

   {/* Main Content */}
<div className="w-3/4 pt-28 text-heading">
  {/* Top Bar */}
  <div className="z-0 absolute -top-56 bottom-96 h-[500px] inset-0 bg-[#DACDF0] opacity-40 transform -skew-y-[15deg] -skew-x-3 "></div>
<div className="ml-12">
  <p className=" text-3xl mb-10 text-[#B48DF3]">CONTACT US</p>
  <p className=" text-2xl mb-10 text-black">
    We'd Love to hear from you!
  </p>
  <div className="mr-40 flex flex-col text-start items-center pt-4">
    {/* Static contact information */}
    <div className="flex flex-row pb-12 gap-20">
      <div className="email-items-container flex flex-col items-center">
        <EmailIcon className="mb-4" />
        <p className="text-center">Email</p>
        <Link href="" className="text-center text-[#B48DF3]">
          essentialerp@gmail.com
        </Link>
      </div>
      <div className="email-items-container flex flex-col items-center">
        <PhoneIcon className="mb-4" />
        <p className="text-center">Phone</p>
        <Link href="" className="text-center text-[#B48DF3]">
          +233509795488
        </Link>
      </div>
    </div>

    {/* Contact form */}
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3"
        ></textarea>
      </div>
      <button
        className="w-38 py-2 px-4 mt-8 rounded-xl shadow-lg text-black bg-[#9747FF]  item-center font-semibold hover:bg-blue-600"
        type="submit"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

</div>      
    </div>
  );
};

export default ContactUs;
