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
  { id: 3, label: "Manage HR", icon: ManagehrIcon, link: "/managehr" },
  { id: 4, label: "Inventory", icon: InventoryIcon, link: "/inventory" },
  { id: 5, label: "TPIP", icon: TPIPIcon, link: "/report" },
];

const itemClasses = `flex items-center cursor-pointer text-black rounded-full overflow-hidden whitespace-nowrap`;


const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={openSidebar}
      onMouseLeave={closeSidebar}
      className="h-screen px-2 py-4 bg-[#DACDF0] flex justify-items-center items-start flex-col w-fit transition-all duration-700"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-start my-72">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            return (
              <div className={itemClasses} key={menu.id}>
                <Link
                  href={menu.link}
                  className="flex py-4 px-5 items-center w-full h-full"
                >
                  <div style={{ width: "2.5rem" }}>
                    <Icon />
                  </div>
                  {isOpen && (<span className="text-md font-medium text-text-light">{menu.label}</span>)}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

