import classNames from "classnames";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DashboardIcon,
  FinancesIcon,
  InventoryIcon,
  BackIcon,
  ManagehrIcon,
  NotificationIcon,
  ReportIcon,
  SettingsIcon,
  ProfileIcon,
  SearchIcon,
} from "../public/icons/dashboard/dashboardicon";

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
  const cards = [
    {
      title: "Card 1",
      content: "This is the content of card 1.",
      size: {
        width: 400,
        height: 280,
      },
    },
    {
      title: "Card 2",
      content: "This is the content of card 2.",
      size: {
        width: 400,
        height: 280,
      },
    },
    {
      title: "Card 3",
      content: "This is the content of card 3.",
      size: {
        width: 740,
        height: 280,
      },
    },
    {
      title: "Card 4",
      content: "This is the content of card 4.",
      size: {
        width: 1100,
        height: 500,
      },
    },
    {
      title: "Card 5",
      content: "This is the content of card 5.",
      size: {
        width: 450,
        height: 240,
      },
    },
    {
      title: "Card 6",
      content: "This is the content of card 6.",
      size: {
        width: 450,
        height: 240,
      },
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
          ["bg-light-lighter"]: activeMenu && activeMenu.id === menu.id, //changes made here
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
              <span
                className={classNames("mt-2 text-lg font-medium text-text", {
                  hidden: toggleCollapse,
                })}
              >
                <div className="basis-1/5 z-50 text-center">
                  <Link href="/" className="text-lg font-semibold text-white">
                    Essential
                  </Link>
                  <a href="/" className="text-xl font-semibold text-[#022568]">
                    ERP
                  </a>
                </div>
              </span>
            </div>
            {isCollapsible && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <BackIcon />
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
          <h1 className="text-2xl font-semibold px-4 py-2">
            Welcome to the Dashboard!
          </h1>
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

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4">
          <div className="flex flex-col gap-4">
          <div className="card-123-container flex flex-row gap-3">
            <div
              className="card-header bg-gray-200 px-4 py-2 font-bold rounded shadow"
              style={{
                width: cards[0].size.width,
                height: cards[0].size.height,
              }}
            >
              <h2>{cards[0].title}</h2>
              <div className="card-body">{cards[0].content}</div>
            </div>

            <div
              className="card-header bg-gray-200 px-4 py-2 font-bold rounded shadow"
              style={{
                width: cards[1].size.width,
                height: cards[1].size.height,
              }}
            >
              <h2>{cards[1].title}</h2>
              <div className="card-body">{cards[1].content}</div>
            </div>
          

          <div
            className="card-header bg-gray-200 px-4 py-2 font-bold rounded shadow"
            style={{
              width: cards[2].size.width,
              height: cards[2].size.height,
            }}
          >
            <h2>{cards[2].title}</h2>
            <div className="card-body">{cards[2].content}</div>
          </div>
          </div>
          <div className="card-456-container flex flex-row gap-4">
            <div
              className="card-header bg-gray-200 px-4 py-2 font-bold rounded shadow"
              style={{
                width: cards[3].size.width,
                height: cards[3].size.height,
              }}
            >
              <h2>{cards[3].title}</h2>
              <div className="card-body">{cards[3].content}</div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                className="card-header bg-gray-200 px-4 py-2 font-bold rounded shadow"
                style={{
                  width: cards[4].size.width,
                  height: cards[4].size.height,
                }}
              >
                <h2>{cards[4].title}</h2>
                <div className="card-body">{cards[4].content}</div>
              </div>

              <div
                className="card-header bg-gray-200 px-4 py-2 font-bold rounded shadow"
                style={{
                  width: cards[5].size.width,
                  height: cards[5].size.height,
                }}
              >
                <h2>{cards[5].title}</h2>
                <div className="card-body">{cards[5].content}</div>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex flex-col flex-1">
//         <Navbar />
//         <main className="p-4 flex flex-wrap justify-between">
//           {/* Card 1 */}
//           <div className="bg-white rounded-lg shadow-lg p-4 mb-4" style={{ width: "597px", height: "262px" }}>
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Card 1 Heading</h2>
//               <p className="text-gray-600">Card 1 Content</p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-lg shadow-lg p-4 mb-4" style={{ width: "597px", height: "262px" }}>
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Card 2 Heading</h2>
//               <p className="text-gray-600">Card 2 Content</p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white rounded-lg shadow-lg p-4 mb-4" style={{ width: "1138px", height: "585px" }}>
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Card 3 Heading</h2>
//               <p className="text-gray-600">Card 3 Content</p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-white rounded-lg shadow-lg p-4 mb-4" style={{ width: "1212px", height: "673px" }}>
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Card 4 Heading</h2>
//               <p className="text-gray-600">Card 4 Content</p>
//             </div>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-white rounded-lg shadow-lg p-4 mb-4" style={{ width: "528px", height: "314px" }}>
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Card 5 Heading</h2>
//               <p className="text-gray-600">Card 5 Content</p>
//             </div>
//           </div>

//           {/* Card 6 */}
//           <div className="bg-white rounded-lg shadow-lg p-4 mb-4" style={{ width: "528px", height: "314px" }}>
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Card 6 Heading</h2>
//               <p className="text-gray-600">Card 6 Content</p>
//             </div>
//           </div>
              
//         </main>
//       </div>
//     </div>
//   );
// }

// const cards = [
//   {
//     title: "Card 1",
//     content: "This is the content of card 1.",
//     size: {
//       width: 597,
//       height: 262,
//     },
//   },
//   {
//     title: "Card 2",
//     content: "This is the content of card 2.",
//     size: {
//       width: 597,
//       height: 262,
//     },
//   },
//   {
//     title: "Card 3",
//     content: "This is the content of card 3.",
//     size: {
//       width: 1138,
//       height: 585,
//     },
//   },
//   {
//     title: "Card 4",
//     content: "This is the content of card 4.",
//     size: {
//       width: 1212,
//       height: 673,
//     },
//   },
//   {
//     title: "Card 5",
//     content: "This is the content of card 5.",
//     size: {
//       width: 528,
//       height: 314,
//     },
//   },
//   {
//     title: "Card 6",
//     content: "This is the content of card 6.",
//     size: {
//       width: 528,
//       height: 314,
//     },
//   },
// ];

// return (
//   <div className="flex">
//     <Sidebar />
//     <div className="flex flex-col flex-1">
//       <Navbar />
//       <main className="p-4">
//         {/* Main content */}
//         <h1 className="text-2xl font-semibold">
//           Welcome to the Main Dashboard!
//         </h1>
//         {/* Add more content and components here */}
//         <div className="flex flex-wrap">
//           {cards.map((card) => (
//             <div key={card.title} className="card">
//               <div className="card-header">
//                 <h2>{card.title}</h2>
//               </div>
//               <div className="card-body">{card.content}</div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   </div>
// );

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
