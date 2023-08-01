import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AuthenticatedLayout({ children, username, organisation }) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow"> {/* Use flex-grow to fill available space */}
        <Navbar username={username} organisation={organisation} />
        <div className="flex flex-col h-full">{children}</div>
      </div>
    </div>
  );
}
