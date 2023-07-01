import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AuthenticatedLayout({ children, username, organisation }) {
  return (
    <div className="flex bg-white">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar username={username} organisation={organisation} />
        <div>{children}</div>
      </div>
    </div>
  );
}
