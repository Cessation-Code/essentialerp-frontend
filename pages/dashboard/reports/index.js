import React from "react";
import withAuth from "../../../components/withAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook, faPeopleGroup, faPeopleRobbery,
} from "@fortawesome/free-solid-svg-icons";
import {
  ExpenseIcon,
  IncomeIcon,
  SalesIcon,
  InventoryIcon,
} from "../../../public/icons/report_page/reporticons";
import Link from "next/link";


const ReportCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden h-70 w-80">
      <div className="flex justify-center mt-3">{icon}</div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 pb-2">
          {title}
        </h2>
        <p className="text-gray-700 text-center leading-tight pb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

const Reports = () => {
  return (
    
    <div className="w-[95hw] h-full p-4 m-6 border-4  bg-slate-100 rounded-3xl relative">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 px-10 pb-4">
        <div className="flex flex-row gap-3 items-center">
          <FontAwesomeIcon icon={faBook} fontSize={"100px"} style={{color: "#C4D7F8"}} />
          <div>
            <h2 className="font-bold">Reports</h2>
            <p className="text-normal">Summary of daily reports on the system</p>
          </div>
        </div>
        <div className="flex-1 md:text-right">
          <div role="status" className="max-w-sm animate-pulse">
            {/* Placeholder content */}
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Report Cards */}
      <div className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 md:gap-3 lg:grid-cols-3  lg:gap-2 xl:grid-cols-3">
        {/* First Row */}
        {/* <Link href="/dashboard/finances#report" passHref className="col-span-1">
          <ReportCard
            icon={<IncomeIcon />}
            title={"INCOME"}
            description={"View your income in an in-depth fashion"}
          />
        </Link> */}
        <Link href="/dashboard/finances#report" passHref  className="col-span-1">
          <ReportCard
            icon={<ExpenseIcon />}
            title={"FINANCES REPORT"}
            description={"View your expenses and sales in an in-depth fashion"}
          />
        </Link>
        <Link href="/dashboard/tpip#report" passHref  className="col-span-1">
          <ReportCard
            icon={<FontAwesomeIcon icon={faPeopleGroup} fontSize={"100px"} style={{color: "#C4D7F8"}}/>}
            title={"TPIP REPORT"}
            description={"View your TPIPs in an in-depth fashion"}
          />
        </Link>
        <Link href="/dashboard/inventory#report" passHref  className="col-span-1">
          <ReportCard
            icon={<InventoryIcon />}
            title={"INVENTORY"}
            description={"View your inventory in an in-depth fashion"}
          />
        </Link>
      </div>
      
    </div>
  );
};

export default withAuth(Reports);
