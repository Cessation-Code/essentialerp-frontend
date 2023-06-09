import classNames from "classnames";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DashboardIcon,
  FinancesIcon,
  InventoryIcon,
  ManagehrIcon,
  NotificationIcon,
  ReportIcon,
  SettingsIcon,
  ProfileIcon,
  BarChartIcon,
} from "../public/icons/dashboard/dashboardicon";
import { RxChevronLeft } from "react-icons/rx";
import Chart from "./dashboard/chart";
import Card from "./dashboard/cards";
import { cards as dashboardCards } from "../public/data/dashboard_data";

export default function DashboardPage() {
  const router = useRouter();
  const { from, additionalData } = router.query;

  const menuItems = [
    { id: 1, label: "Dashboard", icon: DashboardIcon, link: "/" },
    { id: 2, label: "Finances", icon: FinancesIcon, link: "/finances" },
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

  const Chartdata = [
    {
      label: "Cars",
      color: "#57CC78",
    },
    {
      label: "Engines",
      color: "#55DBDB",
    },
    {
      label: "Spray Machine",
      color: "#E2FF32",
    },
    {
      label: "Batteries",
      color: "#FEC102",
    },
  ];

  const [activeMenu, setActiveMenu] = useState(menuItems[0]);

  const Sidebar = ({ children }) => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const activeMenu = useMemo(
      () => menuItems.find((menu) => menu.link === router.pathname),
      [router.pathname]
    );

    const wrapperClasses = classNames(
      "h-screen px-4 pt-8 pb-4 bg-[#C3A2FA] flex justify-between flex-col",
      {
        ["w-80"]: !toggleCollapse,
        ["w-20"]: toggleCollapse,
      }
    );

    const collapseIconClasses = classNames(
      "p-4 rounded bg-light-lighter absolute right-0",
      {
        "rotate-180": toggleCollapse,
      }
    );

    const getNavItemClasses = (menu) => {
      return classNames(
        "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
        {
          ["bg-light-lighter"]: activeMenu === menu.id, //changes made here
        }
      );
    };

    const onMouseOver = () => {
      setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
      setToggleCollapse(!toggleCollapse);
    };

    return (
      <div
        className={wrapperClasses}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      >
        <div className="flex flex-col ">
          <div className="flex items-center justify-between relative">
            <div className="basis-1/5 z-50 text-center">
              <Link href="/" className="text-lg font-semibold text-white">
                Essential
              </Link>
              <a href="/" className="text-xl font-semibold text-[#022568]">
                ERP
              </a>
            </div>
            <div className="flex items-center pl-1 gap-4">
              <span
                className={classNames("mt-2 text-lg font-medium text-text", {
                  hidden: toggleCollapse,
                })}
              ></span>
            </div>
            {isCollapsible && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <RxChevronLeft />
              </button>
            )}
          </div>

          <div className="flex flex-col items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);
              console.log("menu.link:", menu.link); // Add this line
              return (
                <div className={classes}>
                  <Link
                    href={menu.link}
                    className="flex py-4 px-5 items-center w-full h-full"
                  >
                    {/* <a className="flex py-4 px-3 items-center w-full h-full"> */}
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                    {/* </a> */}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <Link href="profile" className={`${getNavItemClasses({})} px-3 py-4`}>
          <div style={{ width: "2.5rem" }}>
            <ProfileIcon />
          </div>
          {!toggleCollapse && (
            <span className={classNames("text-md font-medium text-text-light")}>
              Ridwan
              <br />
              Product manager
            </span>
          )}
        </Link>
      </div>
    );
  };

  const Navbar = () => {
    return (
      <div className="bg-[#C3A2FA] shadow">
        <nav className="flex justify-between px-4 py-6">
          <h1 className="text-2xl font-semibold px-4 py-2">Welcome, Edem!</h1>
          <div>
            {/* search bar */}
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-md"
            />
            <button className="px-4 py-2 ml-2 bg-gray-200 rounded-md">
              Search
            </button>
          </div>
        </nav>
      </div>
    );
  };

  const Main = () => {
    return (
      <div className="all-cards-container flex flex-col gap-3">
        <div className="card-123-container flex flex-row gap-3 mb-4">
          <div
            className="card-1-2-container gap-3"
            style={{
              height: `${dashboardCards[2].size.height / 2}px`,
              width: dashboardCards[1].size.width,
            }}
          >
            <Card {...dashboardCards[0]} />
            <Card {...dashboardCards[1]} />
          </div>
          <div
            className="card-3-container flex-grow flex"
            style={{
              width: dashboardCards[2].size.width,
              height: dashboardCards[2].size.height,
              display: "grid",
              gap: "1rem",
            }}
          >
            <Card {...dashboardCards[2]} />
          </div>
        </div>

        <div className="card-456-container flex flex-row gap-3">
          <div
            className="card-4-container bg-gray-200 px-4 py-2 font-bold rounded shadow"
            style={{
              width: dashboardCards[3].size.width,
              height: dashboardCards[3].size.height,
            }}
          >
            <div className="flex flex-row justify-between pb-3">
              <p className="text-xl text-left font-bold px-1 py-1">
                Sales Trend
              </p>
              <div className="flex flex-row gap-3 justify-center items-center">
                {Chartdata.map((item, index) => (
                  <div key={index} className="flex flex-row gap-1 items-center">
                    <div
                      className="rounded-full"
                      style={{
                        backgroundColor: item.color,
                        width: "9px",
                        height: "9px",
                      }}
                    ></div>
                    <p className="text-xs font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-full pb-12">
              <Chart />
            </div>
          </div>
          <div
            className="card-5-6-container flex flex-col gap-3"
            style={{
              width: dashboardCards[4].size.width,
              height: dashboardCards[4].size.height,
              display: "grid",
              gap: "1rem",
            }}
          >
            <Card {...dashboardCards[4]} />
            <Card {...dashboardCards[5]} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-3">
          <Main />
        </main>
      </div>
    </div>
  );
}
