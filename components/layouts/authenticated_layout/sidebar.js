import React, { useState } from "react";
import Link from "next/link";
import {
  DashboardIcon,
  FinancesIcon,
  InventoryIcon,
  ManagehrIcon,
  TPIPIcon,
} from "../../../public/icons/dashboard_page/dashboard_icons";
import { Router } from "next/router";


const menuItems = [
  { id: 1, label: "Dashboard", icon: DashboardIcon, link: "/dashboard" },
  { id: 2, label: "Finances", icon: FinancesIcon, link: "/dashboard/finances" },
  { id: 3, label: "Manage HR", icon: ManagehrIcon, link: "/dashboard/manage_hr" },
  { id: 4, label: "Inventory", icon: InventoryIcon, link: "/dashboard/inventory" },
  { id: 5, label: "TPIP", icon: TPIPIcon, link: "/dashboard/tpip" },
];

const itemClasses = `flex justify-center items-center cursor-pointer text-black rounded-full overflow-hidden whitespace-nowrap`;


const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setTimeout(() => {
      setIsOpen(true);// Call the function here
    }, 180); // Delay of 2000 milliseconds (2 seconds)
    
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={openSidebar}
      onMouseLeave={closeSidebar}
      className='h-screen fixed px-2 py-4 bg-[#DACDF0] flex justify-items-center items-center flex-col w-24 transition-all duration-500 hover:w-48'
    >
      
        <div className="flex flex-col justify-center h-full">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            return (
              <div className={itemClasses} key={menu.id}>
                <Link href={menu.link} className="flex py-4 px-5 items-center w-full h-full">
                  <div className="px-3">
                    <Icon />
                  </div>
                  {isOpen && (<span className="text-md font-medium text-text-light ">{menu.label}</span>)}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
  
  );
};

export default Sidebar;

