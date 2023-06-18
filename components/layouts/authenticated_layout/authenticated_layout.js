import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex bg-white">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
