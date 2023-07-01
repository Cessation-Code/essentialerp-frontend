import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ username, organisation }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-row w-full bg-[#DACDF0] p-5">

      <div className="basis-1/4">
        <Link href="/" className="text-lg font-semibold text-[#B48DF3]">
          Essential
        </Link>
        <Link href="/" className="text-xl font-semibold text-[#022568]">
          ERP
        </Link>
      </div>

      <div className="flex basis-3/4 justify-end gap-x-5">
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex flex-col">
          <p className="text-white text-1xl ">Welcome {username}!</p>
          <p className="text-white text-xs ">Organization: {organisation}</p>
        </div>
        <div className="flex flex-col w-10 border border-gray-500 rounded-full justify-center">
          <FontAwesomeIcon icon={faUser}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
