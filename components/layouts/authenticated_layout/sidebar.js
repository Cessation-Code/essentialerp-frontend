import React from "react";
import Link from "next/link";
import {
  DashboardIcon,
  FinancesIcon,
  InventoryIcon,
  ManagehrIcon,
  NotificationIcon,
  ReportIcon,
  SettingsIcon,
  ProfileIcon,
} from "../../../public/icons/dashboard_page/dashboard_icons";

const menuItems = [
  { id: 1, label: "Dashboard", icon: DashboardIcon, link: "/dashboard" },
  { id: 2, label: "Finances", icon: FinancesIcon, link: "/dashboard/finances" },
  { id: 3, label: "Manage HR", icon: ManagehrIcon, link: "/managehr" },
  {
    id: 4,
    label: "Notifications",
    icon: NotificationIcon,
    link: "/notifications",
  },
  { id: 5, label: "Inventory", icon: InventoryIcon, link: "/inventory" },
  { id: 6, label: "Report", icon: ReportIcon, link: "/report" },
  { id: 7, label: "Settings", icon: SettingsIcon, link: "/settings" },
];


const Sidebar = () => {
  return (
    <div className="h-screen mt- px-4 pt-8 pb-4 bg-[#C3A2FA] flex justify-between flex-col w-80 fixed ">

      <div className="flex flex-col">

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            return (
              <div>
                <Link
                  href={menu.link}
                  className="flex py-4 px-5 items-center w-full h-full"
                >
                  <div className="w-10">
                    <Icon />
                  </div>
                  <span className="text-md font-medium text-text-light">
                    {menu.label}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

      </div>

      <Link href="profile" className={`px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <ProfileIcon />
        </div>
        <span className="text-md font-medium text-text-light">
          Ridwan
          <br />
          Product manager
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;