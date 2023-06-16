import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const userDetails = {
    name: "Edem",
    profile: "https://i.ibb.co/w1k0X8X/profile.jpg",
    Id: "OrganizationA_123456",
  };

  return (
    <div className="flex flex-row w-full bg-[#DACDF0] justify-between p-4">
      <div className="mt-3">
        <Link href="/" className="text-lg font-semibold text-[#B48DF3]">
          Essential
        </Link>
        <Link href="/" className="text-xl font-semibold text-[#022568]">
          ERP
        </Link>
      </div>

      <div className="flex gap-4">
      <div className="divider lg:divider-horizontal"></div> 
      <div className="flex flex-col items-end justify-center">
        <p className="text-white text-1xl ">Welcome {userDetails.name}!</p>
        <p className="text-white text-xs ">ID: {userDetails.Id}</p>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={userDetails.profile} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link href="">Settings</Link>
            </li>
            <li>
              <Link href="">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
