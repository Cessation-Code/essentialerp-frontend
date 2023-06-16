import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex bg-white">
      <div className="z-20 w-250px">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
