import React from "react";
import withAuth from "../../../components/withAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCircleDollarToSlot,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import {
  ExpenseIcon,
  IncomeIcon,
  SalesIcon,
  InventoryIcon,
} from "../../../public/icons/report_page/reporticons";


const ReportCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg h-fit w-full">
      <div className="flex justify-center mt-4">{icon}</div>
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
    <div className="w-[97%] h-[95%] p-4 m-6 border-4 bg-slate-100 rounded-3xl relative">
      {/* <div className="items-start justify-between "> */}
      <div className="flex flex-row justify-between gap-[700px] px-10 pb-4">
        <div className=" flex basis-1/3">
          <div className="flex flex-row gap-3  ">
            <FontAwesomeIcon icon={faBook} fontSize={"100px"} />
            <span>
              <h2 className="text-bold ">Reports</h2>
              <p className="text-normal">
                Summary of daily reports on the system
              </p>
            </span>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="flex flex-col gap-3">
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[430px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
      <div className="flex flex-col gap-4">
        {/* First Row */}
        <div className="grid grid-cols-3 justify-between sm:flex-col">
          <div className="col-span-1 ">
            <ReportCard
              icon={<IncomeIcon />}
              title={"INCOME"}
              description={"View your income in an in-depth fashion"}
            />
          </div>
          <div className="col-span-1">
            <ReportCard
              icon={<ExpenseIcon />}
              title={"EXPENSE REPORT"}
              description={"View your expenses in an in-depth fashion"}
            />
          </div>
          <div className="col-span-1">
            <ReportCard
              icon={<SalesIcon />}
              title={"SALES REPORT"}
              description={"View your SALES in an in-depth fashion"}
            />
          </div>
          </div>
          {/* Second Row */}
          <div className="grid grid-cols-3 justify-between sm:flex-col">
            <div className="col-span-1 ">
              <ReportCard
                icon={<InventoryIcon />}
                title={"INVENTORY"}
                description={"View your inventory in an in-depth fashion"}
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default withAuth(Reports);
