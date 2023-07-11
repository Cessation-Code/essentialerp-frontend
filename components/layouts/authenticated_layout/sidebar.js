import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DashboardIcon, FinancesIcon, InventoryIcon, LogoutIcon, ManagehrIcon, TPIPIcon} from "../../../public/icons/dashboard_page/dashboard_icons";

const menuItems = [
  { id: 1, label: "Dashboard", icon: DashboardIcon, link: "/dashboard" },
  { id: 2, label: "Finances", icon: FinancesIcon, link: "/dashboard/finances" },
  { id: 3, label: "Manage HR", icon: ManagehrIcon, link: "/dashboard/manage_hr" },
  { id: 4, label: "Inventory", icon: InventoryIcon, link: "/dashboard/inventory" },
  { id: 5, label: "TPIP", icon: TPIPIcon, link: "/dashboard/tpip" },
];

const itemClasses = `flex justify-center items-center text-black whitespace-nowrap`;

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
    <div
      // onMouseEnter={openSidebar}
      // onMouseLeave={closeSidebar}
      className='h-screen px-2 py-4 bg-[#DACDF0] flex justify-items-center items-center flex-col w-48'
    >

      <div className="flex flex-col justify-center h-full">
        {/* menu items */}
        {menuItems.map(({ icon: Icon, ...menu }) => {
          return (
            <div className={itemClasses} key={menu.id}>
              <Link href={menu.link} className="flex py-4 px-5 items-center w-full h-full">
                <div className="px-3">
                  <Icon />
                </div>
                {/* {isOpen && (<span className="text-md font-medium text-text-light ">{menu.label}</span>)} */}
                <span className="text-md font-medium text-text-light ">{menu.label}</span>
              </Link>
            </div>
          );
        })}
        {/* logout button */}
        <div className='flex flex-col justify-center items-center pt-7'>
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
      </div>
    </div>

  );
};

export default Sidebar;

