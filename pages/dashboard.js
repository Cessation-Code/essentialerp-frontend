import React from "react";
import a from "next/link";
import { useRouter } from "next/router";

export default function DashboardPage() {
  const router = useRouter();
  const { from, additionalData } = router.query;

  const Sidebar = () => {
    return (
      <div className="bg-[#853EFA] text-gray-100 h-screen w-1/6">
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center mt-4">
            {/* Logo or brand */}
            <div className="flex flex-row pt-2">
              <div className="basis-1/5 z-50 text-center">
                <a href="/" className="text-lg font-semibold text-white">
                  Essential
                </a>
                <a className="text-xl font-semibold text-[#022568]">ERP</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center m-auto  justify-evenly">
            {/* Navigation as */}
            <a href="/dashboard" className="text-black hover:text-gray-200">
              Dashboard
            </a>
            <a href="/products" className="text-black hover:text-gray-200">
              Products
            </a>
            <a href="/orders" className="text-black hover:text-gray-200">
              Orders
            </a>
            <a href="/products" className="text-black hover:text-gray-200">
              Products
            </a>
            <a href="/products" className="text-black hover:text-gray-200">
              Products
            </a>
            <a href="/products" className="text-black hover:text-gray-200">
              Products
            </a>
            <a href="/products" className="text-black hover:text-gray-200">
              Products
            </a>
          </div>

          {/* User profile or additional actions */}
          <div className="flex flex-col items-center mb-8">
            <a href="/profile" className="text-black hover:text-gray-200">
              Profile
            </a>
            <button className="text-black hover:text-gray-200">Logout</button>
          </div>
        </div>
      </div>
    );
  };

  const Navbar = () => {
    return (
      <div className="bg-[#6C63FF] shadow">
        <nav className="flex justify-between px-6 py-9"></nav>
        {/* Navbar content */}
        <h1 className="text-2xl font-semibold flex flex-col ">
          Welcome to the Dashboard!
        </h1>
      </div>
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4">
          {/* Main content */}
          <h1 className="text-2xl font-semibold">Welcome to the Dashboard!</h1>
          {/* Add more content and components here */}
        </main>
      </div>
    </div>
  );
}

{
  /* <div>
          <h2>Other Page</h2>
          <p>From: {from}</p>
          <p>Name: { additionalData[0] }</p>
          <p>Email: { additionalData[1] }</p>
        </div> */
}
