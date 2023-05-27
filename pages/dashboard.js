import classNames from "classnames";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DashboardIcon,
  InventoryIcon,
  ManagehrIcon,
  NotificationIcon,
  ReportIcon,
  SettingsIcon,
} from "../public/icons/dashboard/dashboardicon";

export default function DashboardPage() {
  const router = useRouter();
  const { from, additionalData } = router.query;

  const menuItems = [
    { id: 1, label: "Dashboard", icon: DashboardIcon, link: "/" },
    { id: 2, label: "Manage Finances", icon: ManagehrIcon, link: "/finances" },
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

  const [activeMenu, setActiveMenu] = useState(menuItems[0]);
  const Sidebar = ({ children }) => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const activeMenu = useMemo(
      () => menuItems.find((menu) => menu.link === router.pathname),
      [router.pathname]
    );

    const wrapperClasses = classNames(
      "h-screen px-4 pt-8 pb-4 bg-[#853EFA] flex justify-between flex-col",
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
          ["bg-light-lighter"]: activeMenu && activeMenu.id === menu.id,  //changes made here
        
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
            <div className="flex items-center pl-1 gap-4">
              <SettingsIcon />
              <span
                className={classNames("mt-2 text-lg font-medium text-text", {
                  hidden: toggleCollapse,
                })}
              >
                Logo
              </span>
            </div>
            {isCollapsible && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <SettingsIcon />
              </button>
            )}
          </div>

          <div className="flex flex-col items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);
              console.log("menu.link:", menu.link); // Add this line
              return (
                <div className={classes}>
                  <Link href={menu.link} className="flex py-4 px-5 items-center w-full h-full">
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

        <div className={`${getNavItemClasses({})} px-3 py-4`}>
          <div style={{ width: "2.5rem" }}>
            <ManagehrIcon />
          </div>
          {!toggleCollapse && (
            <span className={classNames("text-md font-medium text-text-light")}>
              Logout
            </span>
          )}
        </div>
      </div>
    );
  };

  const Navbar = () => {
    return (
      <div className="bg-[#6C63FF] shadow">
        <nav className="flex justify-between px-4 py-8"></nav>
        <div className="flex flex-row justify-between place-content-evenly">
          <h1 className="text-2xl font-semibold items-center">
            Welcome to the Dashboard!
          </h1>
          <div>{/* seacrh button */}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4">
          {/* Main content */}
          <h1 className="text-2xl font-semibold">Welcome to the Dashboard!</h1>
          {/* Add more content and components here */}
        </main>
      </div>
    </div>
  );
}


  /* <div>
          <h2>Other Page</h2>
          <p>From: {from}</p>
          <p>Name: { additionalData[0] }</p>
          <p>Email: { additionalData[1] }</p>
        </div> */

// import classNames from "classnames";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useState, useMemo } from "react";
// import {
//   ArticleIcon,
//   CollapsIcon,
//   HomeIcon,
//   LogoIcon,
//   LogoutIcon,
//   UsersIcon,
//   VideosIcon,
// } from "./icons";
// import { DashboardIcon, InventoryIcon, ManagehrIcon, NotificationIcon, ReportIcon, SettingsIcon } from "../public/icons/dashboard/dashboardicon";

// const menuItems = [
//   { id: 1, label: "Home", icon: HomeIcon, link: "/" },
//   { id: 2, label: "Manage Posts", icon: ArticleIcon, link: "/posts" },
//   { id: 3, label: "Manage Users", icon: UsersIcon, link: "/users" },
//   { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
// ];

// const Sidebar = () => {
//   const [toggleCollapse, setToggleCollapse] = useState(false);
//   const [isCollapsible, setIsCollapsible] = useState(false);

//   const router = useRouter();

//   const activeMenu = useMemo(
//     () => menuItems.find((menu) => menu.link === router.pathname),
//     [router.pathname]
//   );

//   const wrapperClasses = classNames(
//     "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
//     {
//       ["w-80"]: !toggleCollapse,
//       ["w-20"]: toggleCollapse,
//     }
//   );

//   const collapseIconClasses = classNames(
//     "p-4 rounded bg-light-lighter absolute right-0",
//     {
//       "rotate-180": toggleCollapse,
//     }
//   );

//   const getNavItemClasses = (menu) => {
//     return classNames(
//       "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
//       {
//         ["bg-light-lighter"]: activeMenu.id === menu.id,
//       }
//     );
//   };

//   const onMouseOver = () => {
//     setIsCollapsible(!isCollapsible);
//   };

//   const handleSidebarToggle = () => {
//     setToggleCollapse(!toggleCollapse);
//   };

//   return (
//     <div
//       className={wrapperClasses}
//       onMouseEnter={onMouseOver}
//       onMouseLeave={onMouseOver}
//       style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
//     >
//       <div className="flex flex-col">
//         <div className="flex items-center justify-between relative">
//           <div className="flex items-center pl-1 gap-4">
//             <LogoIcon />
//             <span
//               className={classNames("mt-2 text-lg font-medium text-text", {
//                 hidden: toggleCollapse,
//               })}
//             >
//               Logo
//             </span>
//           </div>
//           {isCollapsible && (
//             <button
//               className={collapseIconClasses}
//               onClick={handleSidebarToggle}
//             >
//               <CollapsIcon />
//             </button>
//           )}
//         </div>

//         <div className="flex flex-col items-start mt-24">
//           {menuItems.map(({ icon: Icon, ...menu }) => {
//             const classes = getNavItemClasses(menu);
//             return (
//               <div className={classes}>
//                 <Link href={menu.link}>
//                   <Link className="flex py-4 px-3 items-center w-full h-full">
//                     <div style={{ width: "2.5rem" }}>
//                       <Icon />
//                     </div>
//                     {!toggleCollapse && (
//                       <span
//                         className={classNames(
//                           "text-md font-medium text-text-light"
//                         )}
//                       >
//                         {menu.label}
//                       </span>
//                     )}
//                   </Link>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className={`${getNavItemClasses({})} px-3 py-4`}>
//         <div style={{ width: "2.5rem" }}>
//           <LogoutIcon />
//         </div>
//         {!toggleCollapse && (
//           <span className={classNames("text-md font-medium text-text-light")}>
//             Logout
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };


 // <div className="bg-[#853EFA] text-gray-100 h-screen w-1/6">
      //   <div className="flex flex-col h-full">
      //     <div className="flex flex-col items-center mt-4">
      //       {/* Logo or brand */}
      //       <div className="flex flex-row pt-2">
      //         <div className="basis-1/5 z-50 text-center">
      //           <Link href="/" className="text-lg font-semibold text-white">
      //             Essential
      //           </Link>
      //           <a className="text-xl font-semibold text-[#022568]">ERP</a>
      //         </div>
      //       </div>
      //     </div>

      //     <div className="flex flex-col items-center m-auto  justify-evenly">
      //       {/* Navigation as */}
      //       <Link href="/dashboard" className="text-black hover:text-gray-200">
      //         menuItems.
      //       </Link>
      //       <Link href="/products" className="text-black hover:text-gray-200">
      //         Products
      //       </Link>
      //       <Link href="/orders" className="text-black hover:text-gray-200">
      //         Orders
      //       </Link>
      //       <Link href="/products" className="text-black hover:text-gray-200">
      //         Products
      //       </Link>
      //       <Link href="/products" className="text-black hover:text-gray-200">
      //         Products
      //       </Link>
      //       <Link href="/products" className="text-black hover:text-gray-200">
      //         Products
      //       </Link>
      //       <Link href="/products" className="text-black hover:text-gray-200">
      //         Products
      //       </Link>
      //     </div>

      //     {/* User profile or additional actions */}
      //     <div className="flex flex-col items-center mb-8">
      //       <Link href="/profile" className="text-black hover:text-gray-200">
      //         Profile
      //       </Link>
      //       <button className="text-black hover:text-gray-200">Logout</button>
      //     </div>
      //   </div>

      //   <main ml-20 w-full>{children}</main>
      // </div>