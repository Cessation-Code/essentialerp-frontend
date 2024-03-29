import React from "react";
import Link from "next/link";

import Logo from "../public/icons/landing_page/landing";
import Logo1 from "../public/icons/landing_page/landingicon01";
import Logo2 from "../public/icons/landing_page/landingicon02";
import Logo3 from "../public/icons/landing_page/landingicon03";
import Logo4 from "../public/icons/landing_page/landingicon04";
import Logo5 from "../public/icons/landing_page/landingicon05";
import Logo6 from "../public/icons/landing_page/landingicon06";
import UnauthenticatedLayout from "../components/layouts/unauthenticated_layout/unauthenticated_layout";
import AppLogo from "../components/logo";

export default function Home() {

  const sentences = [
    "Welcome to our website!",
    "Discover the best products in the market.",
    "Join us and be a part of our community.",
    "Start your journey with us today!",
  ];

  return (
    <UnauthenticatedLayout>
      {/* heres the background colour thats white */}
      <div className="flex flex-col relative bg-slate-200 h-screen overflow-auto custom-scrollbar">
        {/* here's the diagonal object giving at the top */}
        <div className="z-0 absolute -top-56 bottom-96 h-[500px] inset-0 bg-[#C4D7F8] transform -skew-y-[10deg]"></div>

        <div className="flex flex-row  mx-5 px-5 pt-5 justify-between">
          <div className="z-50 text-center">
            <AppLogo />
          </div>

          <div className=" font-semibold text-center z-50">
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

        {/* <div className="flex flex-row justify-center">
          <Logo />
        </div> */}

        <div className="flex flex-row justify-center gap-4 pt-6 font-medium text-center">
          <div>
            <div className="text-[#6C63FF]">Why Choose Us?</div> <br />
            <div className="font-bold text-xl">
              OUR SYSTEM IS COMPLETE, FLEXIBLE AND ROBUST
            </div>{" "}
            <br />
            <br />
            <div className="">
              Designed for both Simplicity and Power
              <br />
              Everything your business needs in one space
            </div>
            <div />
          </div>
        </div>

        {/* here's the buttons that look like tiles at the bottom */}
        <div className="flex flex-row pt-12 pb-10 justify-center gap-28">
          <button className="rounded-xl border  bg-gray-300 bg-opacity-25 px-4 pb-9 w-64 h-72 text-left shadow-gray-400 shadow-lg hover:shadow-2xl">
            <div className="flex flex-col">
              <div>
                {" "}
                <Logo1 />
              </div>
              <div className="md:text-lg text-base font-medium pb-1">
                Financial Accounting
              </div>
              <div className="md:text-sm text-xs">
                Get a real-time view of your cashh flow. Full-fledged accounting
                module covering every aspect of book keeping.
              </div>
            </div>
          </button>

          <button className="rounded-xl border  bg-gray-300 bg-opacity-25 px-4 pb-9 w-64 h-72 text-left shadow-gray-400 shadow-lg hover:shadow-2xl">
            <div className="flex flex-col">
              <div>
                {" "}
                <Logo2 />
              </div>
              <div className="md:text-lg text-base font-medium pb-1">
                HR and Payroll
              </div>
              <div className="md:text-sm text-xs">
                Manage full employee life cycle, right from onboarding, payroll,
                expense claims, assets to separation, etc.
              </div>
            </div>
          </button>

          <button className="rounded-xl border  bg-gray-300 bg-opacity-25 px-4 pb-9 w-64 h-72 text-left shadow-gray-400 shadow-lg hover:shadow-2xl">
            <div className="flex flex-col">
              <div>
                {" "}
                <Logo3 />
              </div>
              <div className="md:text-lg text-base font-medium pb-1">
                Battle-tested Reliability{" "}
              </div>
              <div className="md:text-sm text-xs ">
                Our systems operate with 99.99%+ uptime and are highly scalable
                and redundant.
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-row pt-3 pb-14 justify-center gap-28">
          <button className="rounded-xl border  bg-gray-300 bg-opacity-25 px-4 pb-9 w-64 h-72 text-left shadow-gray-400 shadow-lg hover:shadow-2xl">
            <div className="flex flex-col">
              <div>
                {" "}
                <Logo4 />
              </div>
              <div className="md:text-lg text-base font-medium pb-1">
                Inventory Management
              </div>
              <div className="md:text-sm text-xs">
                Track and control the flow of products in and out of a business
                to ensure that the right inventory is available at the right
                time, in the right quantity, and at the right cost.
              </div>
            </div>
          </button>

          <button className="rounded-xl border  bg-gray-300 bg-opacity-25 px-4 pb-9 w-64 h-72 text-left shadow-gray-400 shadow-lg hover:shadow-2xl">
            <div className="flex flex-col">
              <div>
                {" "}
                <Logo5 />{" "}
              </div>
              <div className="md:text-lg text-base font-medium pb-1">
                Seamless Integrations
              </div>
              <div className="md:text-sm text-xs">
                Manage and track progress of Third Party Integration Platforms
                that will be consuming some aspects of the solution per
                organization, i.e. the inventory module.{" "}
              </div>
            </div>
          </button>

          <button className="rounded-xl border bg-gray-300 bg-opacity-25 px-4 pb-9 w-64 h-72 text-left shadow-gray-400 shadow-lg hover:shadow-2xl">
            <div className="flex flex-col">
              <div>
                {" "}
                <Logo6 />
              </div>
              <div className="md:text-lg text-base font-medium pb-1">
                Fastest Improving Platform
              </div>
              <div className="md:text-sm text-xs ">
                Manage and track progress of Third Party Integration Platforms
                that will be consuming some aspects of the solution per
                organization, i.e. the inventory module.{" "}
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-row justify-center pb-6">
          <div>
            <Link href="signup">
              <button className="rounded-xl bg-[#6C63FF] text-white px-10 py-3">
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </UnauthenticatedLayout>
  );
}
