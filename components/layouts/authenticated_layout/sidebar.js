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

  const router = useRouter();

  const logout = () => {
    localStorage.clear('token')
    localStorage.clear('username')
    localStorage.clear('organisation')
    router.replace('/login')
  }

  return (
    <div className='min-h-full py-4 bg-[#C4D7F8] flex justify-items-center flex-col w-48 justify-between'>

      <div className="flex flex-row col-span-5 place-self-center">
        <AppLogo />
      </div>

      {/* menu items */}
      <div className=" flex flex-col justify-self-center mb-[1%]">
        {menuItems.map(({ icon: Icon, ...menu }) => {
          return (
            <div className='flex flex-row text-black whitespace-nowrap' key={menu.id}>
              <Link href={menu.link} className="flex py-4 px-5 w-full h-full">
                <div className="px-3">
                  <Icon />
                </div>
                <span className="text-md font-medium">{menu.label}</span>
              </Link>
            </div>
          );
        })}
        {/* Logout Button */}
        <div className="flex flex-row mt-3">
          <button title="logout" className="w-full items-center px-8" onClick={logout}>
            <div className="flex flex-row items-center align-middle space-x-2">
              <div className="flex">
                <LogoutIcon />
              </div>
              <div className="flex font-semibold text-sm">LOGOUT</div>
            </div>
          </button>
        </div>
      </div>

      <div>
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

    </div>

  );
};

export default Sidebar;

