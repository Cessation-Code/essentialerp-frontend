"use client";

import React from "react";
import Link from "next/link";
import AppLogo from "../components/logo";

export default function HomePage() {
  const services = [
    {
      title: "Financial Accounting",
      description:
        "Get a real-time view of your cash flow. Full-fledged accounting module covering every aspect of book keeping.",
    },
    {
      title: "HR and Payroll",
      description:
        "Manage full employee life cycle, right from onboarding, payroll, expense claims, assets to separation, etc.",
    },
    {
      title: "Battle-tested Reliability",
      description:
        "Our systems operate with 99.99%+ uptime and are highly scalable and redundant.",
    },
    {
      title: "Inventory Management",
      description:
        "Track and control the flow of products in and out of a business to ensure that the right inventory is available at the right time, in the right quantity, and at the right cost.",
    },
    {
      title: "Seamless Integrations",
      description:
        "Manage and track progress of Third Party Integration Platforms that will be consuming some aspects of the solution per organization, i.e. the inventory module.",
    },
    {
      title: "Fastest Improving Platform",
      description:
        "Manage and track progress of Third Party Integration Platforms that will be consuming some aspects of the solution per organization, i.e. the inventory module.",
    },
  ];

  return (
    <div className="flex flex-col relative bg-slate-200 h-screen overflow-auto custom-scrollbar px-10">
      <div className="z-0 absolute -top-56 bottom-96 h-[500px] inset-0 bg-[#C4D7F8] transform -skew-y-[10deg]" />

      <div className="flex flex-row mx-5 px-5 pt-5 justify-between">
        <div className="z-50 text-center">
          <AppLogo />
        </div>
        <div className="font-semibold text-center z-50">
          <Link href="contact_us">
            <button className="rounded-xl bg-[#6C63FF] text-white px-7 py-3">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row pt-24 justify-center text-4xl text-black font-bold">
        <div className="text-center z-50">
          Take control of your
          <br />
          business today
        </div>
      </div>

      <div className="flex flex-row pt-20 justify-center text-lg text-black font-medium">
        <div className="text-center z-50">
          EssentialERP is the world's best free open
          <br />
          source Enterprise Resource Planning
          <br />
          Solution for SMEs.
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4 pt-6 font-medium">
        <Link href="signup">
          <button className="rounded-xl bg-[#6C63FF] text-white px-7 py-1">
            GET STARTED
          </button>
        </Link>
        <Link href="signup">
          <button className="rounded-xl bg-[#C4D7F8] text-[#6C63FF] px-7 py-1">
            LEARN MORE
          </button>
        </Link>
      </div>

      <div className="flex flex-row justify-center gap-4 pt-6 font-medium text-center">
        <div>
          <div className="text-[#6C63FF]">Why Choose Us?</div>
          <br />
          <div className="font-bold text-xl">
            OUR SYSTEM IS COMPLETE, FLEXIBLE AND ROBUST
          </div>
          <br />
          <br />
          <div className="">
            Designed for both Simplicity and Power
            <br />
            Everything your business needs in one space
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 py-16 gap-10 place-items-center">
        {services.map((item, index) => (
          <button
            key={index}
            className="border-2 rounded-full border-blue-800 p-3 w-80 h-72"
          >
            <div className="flex flex-col">
              <div>{item.logo}</div>
              <div className="md:text-lg text-base font-medium pb-1">
                {item.title}
              </div>
              <div className="md:text-sm text-xs">{item.description}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex flex-row justify-center pb-6">
        <Link href="signup">
          <button className="rounded-xl bg-[#6C63FF] text-white px-10 py-3">
            Start Now
          </button>
        </Link>
      </div>
    </div>
  );
}
