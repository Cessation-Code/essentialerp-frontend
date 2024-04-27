import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

export default function Navbar({ username, organisation }){

  return (
    <div className="flex flex-row w-full justify-end gap-2 bg-[#C4D7F8] p-5">

      <div className="divider lg:divider-horizontal" />

      <div className="flex flex-col w-10 border border-gray-500 rounded-full justify-center">
        <FontAwesomeIcon icon={faUser} />
      </div>

      <div className="flex flex-col text-black">
        <p className="text-1xl">Welcome {username}!</p>
        <p className="text-xs">Organization: {organisation}</p>
      </div>
    </div>
  );
};


Navbar.protoTypes = {
  username: PropTypes.string.isRequired,
  organisation: PropTypes.string.isRequired
}