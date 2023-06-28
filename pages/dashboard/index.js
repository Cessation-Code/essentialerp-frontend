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
      <div className={`card-body ${childrendivstyle}`}>
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
        <div className=" grid grid-cols-3 mx-4 pt-10 gap-2">
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
              </div>
            }
          />
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-3 mx-4 pt-4 gap-2">
          {/* First Card */}
          <Card
            title="Chart Data"
            parentdivstyle="basis-1/3 flex flex-row bg-[#E2E9FE] rounded-lg px-4 py-6 h-[804px] space-x-3"
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

          {/*Twin Cards */}
          <div className="basis-2/3 flex flex-col col-span-2 gap-2">
            <div className=" flex row gap-2">
              <Card
                title="Some data"
                parentdivstyle="bg-[#D2EEFF] rounded-lg px-4 py-7 h-36 col-span-1 w-[1460px]"
                childrendivstyle="flex flex-col w-full text-start"
                children={
                  <div className="flex flex-col w-full text-start">
                    <div className="text-sm">Some content goes here.</div>
                  </div>
                }
              />
              <Card
                title="Some data"
                parentdivstyle="bg-[#FEE2E2] rounded-lg px-4 py-7 h-36  w-[1460px]"
                childrendivstyle="flex flex-col w-full text-start"
                children={
                  <div className="flex flex-col w-full text-start">
                    <div className="text-sm">Some content goes here too.</div>
                  </div>
                }
              />
            </div>

            <div className="flex-col">
              <Card
                title="Some data"
                parentdivstyle="bg-[#FEE2E2] rounded-lg px-4 py-7 h-[640px] w-[1460px]"
                childrendivstyle="flex flex-col w-full text-start"
                children={
                  <div className="flex flex-col w-full text-start">
                    <div className="text-sm">Some content goes here too.</div>
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
