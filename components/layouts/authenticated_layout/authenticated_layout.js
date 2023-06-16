import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className=" bg-white">
      <div className="relative">
        <div className="z-20 sidebar flex flex-col max-w-250px mx-auto">
          <Sidebar />
        </div>

        <div className="z-10 absolute top-0 left-0  w-full">
          <Navbar />
        </div>
      </div>

      <div className="w-full relative">
        <div className="overflow-y-auto ml-auto mt-24">{children}</div>
      </div>
    </div>
  );
}
