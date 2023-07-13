import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../logo";

const Navbar = ({ username, organisation }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-row w-full justify-between bg-[#DACDF0] p-5">

     <Logo/>

      <div className="flex basis-3/4 justify-end gap-x-5">
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex flex-col">
          <p className="text-white text-1xl">Welcome {username}!</p>
          <p className="text-white text-xs">Organization: {organisation}</p>
        </div>
        <div className="flex flex-col w-10 border border-gray-500 rounded-full justify-center">
          <FontAwesomeIcon icon={faUser}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
