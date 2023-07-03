/*To dos
1. Convert the fixed sizes for the cards to percentage or view height style, that thing dey hard for me, i have not completely learned it,
2. any other changes worth it.


Notes:
1. i used card component for reusability.

 */



import React from "react";
import AuthenticatedLayout from "../../components/layouts/authenticated_layout/authenticated_layout";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faUsers } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, children, parentdivstyle, childrendivstyle }) => {
  return (
    <div className={parentdivstyle}>
      <div className={`${childrendivstyle}`}>
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export function DashboardPage() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <AuthenticatedLayout>
        <div className="grid grid-cols-3 mx-4 pt-2 gap-2 ">
          {/* HR Management Card */}
          <Card
            title="HR MANAGEMENT"
            parentdivstyle="basis-1/3 flex flex-row bg-[#E2E9FE] rounded-lg px-4 py-6 h-60 space-x-3"
            childrendivstyle="flex flex-col w-full text-start"
            children={
              <>
                <div className="flex flex-col justify-center">
                  <FontAwesomeIcon icon={faUsers} className="text-3xl" />
                </div>
                <div className="flex flex-col w-full text-start">
                  <div className="text-sm">
                    Transform Your HR Operations with Effortless Efficiency:
                    Experience the Power of Our Comprehensive HR Management
                    Solution
                  </div>
                  <div className="text-sm font-semibold mt-4">
                    Employee Headcount: 250
                  </div>
                  <div className="text-sm font-semibold">
                    Leave Requests: 5 pending
                  </div>
                </div>
              </>
            }
          />

          <Card
            title="Inventory Management"
            parentdivstyle="basis-1/3 flex flex-row bg-[#FACC89] rounded-lg px-4 py-7 h-60"
            childrendivstyle="flex flex-col w-full text-start"
            children={
              <div className="flex flex-col w-full text-start">
                <div className="text-sm">
                  Efficiently manage your inventory with our powerful Inventory
                  Management solution.
                </div>
                <div className="text-sm font-semibold mt-4">
                  Total Stock Value: $500,000
                </div>
                <div className="text-sm font-semibold">
                  Stock Availability: 80%
                </div>
                <div className="text-sm font-semibold">
                  Critical Stock Alerts: 2 items
                </div>
              </div>
            }
          />

          <Card
            title="Finance Management"
            parentdivstyle="basis-1/3 flex flex-row bg-[#B1FF92] rounded-lg px-4 py-7 h-60"
            childrendivstyle="flex flex-col w-full text-start"
            children={
              <div className="flex flex-col w-full text-start">
                <div className="text-sm">
                  Streamline your financial processes and gain better control
                  over your finances.
                </div>
                <div className="text-sm font-semibold mt-4">
                  Revenue: $1,000,000
                </div>
                <div className="text-sm font-semibold">
                  Expenses: $500,000
                </div>
                <div className="text-sm font-semibold">
                  Profit Margins: 50%
                </div>
              </div>
            }
          />
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-3 mx-4 pt-4 gap-2">
          {/* First Card */}
          <Card
            title="Chart Data"
            parentdivstyle="basis-1/3 flex flex-row bg-[#E2E9FE] rounded-lg px-4 py-6 h-[794px] space-x-3"
            childrendivstyle="flex flex-col w-full text-start"
            children={
              <>
                <div className="flex flex-col justify-center">
                  <FontAwesomeIcon icon={faBarChart} className="text-3xl" />
                </div>
                <div className="flex flex-col w-full text-start">
                  <div className="text-sm">Chart data content goes here.</div>
                </div>
              </>
            }
          />

          {/* Twin Cards */}
          <div className="basis-2/3 flex flex-col col-span-2 gap-2">
            <div className="flex row gap-2">
              <Card
                title="Sales Performance"
                parentdivstyle="bg-[#D2EEFF] rounded-lg px-4 h-36 col-span-1 w-[1460px]"
                childrendivstyle="flex flex-col w-full text-start"
                children={
                  <div className="flex flex-col w-full text-start">
                    <div className="text-sm">
                      Total Sales Revenue: $750,000
                    </div>
                    <div className="text-sm font-semibold mt-4">
                      Top Selling Product: Product X
                    </div>
                    <div className="text-sm font-semibold">
                      Sales Growth Rate: 10%
                    </div>
                  </div>
                }
              />
              <Card
                title="Task Management"
                parentdivstyle="bg-[#FEE2E2] rounded-lg px-4 pt-2 h-36  w-[1460px]"
                childrendivstyle="flex flex-col w-full text-start"
                children={
                  <div className="flex flex-col w-full text-start">
                    <div className="text-sm">
                      Task management data content goes here.
                    </div>
                    <div className="text-sm font-semibold mt-4">
                      Pending Tasks: 3
                    </div>
                    <div className="text-sm font-semibold">
                      Upcoming Deadlines: 2
                    </div>
                    <div className="text-sm font-semibold">
                      Task Assignment: John Doe
                    </div>
                  </div>
                }
              />
            </div>

            <div className="flex-col col-span-2">
              <Card
                title="Third-Party Integration Status"
                parentdivstyle="bg-[#D9E5F7] rounded-lg px-4 py-7 h-[640px]"
                childrendivstyle="flex flex-col w-full text-start"
                children={
                  <div className="flex flex-col w-full text-start">
                    <div className="text-sm">
                      Third-party integration status content goes here.
                    </div>
                    <div className="text-sm font-semibold mt-4">
                      System A: Connected
                    </div>
                    <div className="text-sm font-semibold">
                      System B: Connected
                    </div>
                    <div className="text-sm font-semibold">
                      System C: Connection Error
                    </div>
                    <div className="text-sm font-semibold">
                      System D: Connected
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}


export default DashboardPage;
