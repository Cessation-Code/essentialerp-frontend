import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DashboardIcon, FinancesIcon, InventoryIcon, LogoutIcon, ManagehrIcon, TPIPIcon } from "../../../public/icons/dashboard_page/dashboard_icons";
import AppLogo from "../../logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faSquarePlus } from '@fortawesome/free-solid-svg-icons'


const menuItems = [
  { id: 1, label: "Dashboard", icon: DashboardIcon, link: "/dashboard" },
  { id: 2, label: "Finances", icon: FinancesIcon, link: "/dashboard/finances" },
  { id: 3, label: "Manage HR", icon: ManagehrIcon, link: "/dashboard/manage_hr" },
  { id: 4, label: "Inventory", icon: InventoryIcon, link: "/dashboard/inventory" },
  { id: 5, label: "TPIP", icon: TPIPIcon, link: "/dashboard/tpip" },
];

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // const openSidebar = () => {
  //   setTimeout(() => {
  //     setIsOpen(true);// Call the function here
  //   }, 180); // Delay of 2000 milliseconds (2 seconds)

  // };

  // const closeSidebar = () => {
  //   setIsOpen(false);
  // };

  const logout = () => {
    localStorage.clear('token')
    localStorage.clear('username')
    localStorage.clear('organisation')
    router.replace('/login')
  }

  return (
    <div className='h-screen px-2 py-4 bg-[#C4D7F8] flex justify-items-center flex-col w-48'>

      <div className="place-self-center">
        <AppLogo />
      </div>

      {/* menu items */}
      <div className="mt-[23vh] mb-3">
        {menuItems.map(({ icon: Icon, ...menu }) => {
          return (
            <div className='flex flex-row text-black whitespace-nowrap' key={menu.id}>
              <Link href={menu.link} className="flex py-4 px-5 w-full h-full">
                <div className="px-3">
                  <Icon />
                </div>
                {/* {isOpen && (<span className="text-md font-medium text-text-light ">{menu.label}</span>)} */}
                <span className="text-md font-medium">{menu.label}</span>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Logout Button */}
      <div className="flex flex-row mb-[16vh]">
        <button title="logout" className="w-full items-center px-8" onClick={logout}>
          <div className="flex flex-row items-center align-middle space-x-2">
            <div className="flex">
              <LogoutIcon />
            </div>
            {/* {isOpen && (<div className="flex font-semibold text-sm">LOGOUT</div>)} */}
            <div className="flex font-semibold text-sm">LOGOUT</div>
          </div>
        </button>
      </div>


      {/* Add Sale Button */}
      <div className="flex flex-row mb-5">
        <Link href="/dashboard/add_sale">
          <button className="w-full items-center px-8">
            <div className="flex flex-row items-center align-middle space-x-2">
              <div className="flex text-xl">
                <FontAwesomeIcon icon={faSquarePlus} />
              </div>
              <div className="flex font-semibold text-base">Add Sale</div>
            </div>
          </button>
        </Link>
      </div>

      {/* Add Sale Button */}
      <div className="flex flex-row">
        <Link href="/dashboard/reports">
          <button className="w-full items-center px-8">
            <div className="flex flex-row items-center align-middle space-x-2">
              <div className="flex text-xl">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <div className="flex font-semibold text-base">Reports</div>
            </div>
          </button>
        </Link>
      </div>

    </div>

  );
};

export default Sidebar;

