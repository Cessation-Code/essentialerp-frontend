import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import PropTypes from "prop-types";

export default function AuthenticatedLayout({ children, username, organisation }) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col flex-grow"> {/* Use flex-grow to fill available space */}
        <Navbar username={username} organisation={organisation} />
        <div className="flex flex-col h-full">{children}</div>
      </div>
    </div>
  );
}

AuthenticatedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  username: PropTypes.string.isRequired,
  organisation: PropTypes.string.isRequired
};
