import React from "react";
import AuthenticatedLayout from "../../components/layouts/authenticated_layout/authenticated_layout";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCoins,
  faBook,
  faHandshake,
  faChartSimple,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import withAuth from "../../components/withAuth";
import { useSelector } from "react-redux";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
];

const ButtonLikeCard = ({
  colspan,
  title,
  icon,
  description,
  link,
  bgColour,
  width,
  height,
  children, // Add children prop to accept the chart component
}) => {
  return (
    <div className={`${colspan} `}>
      <Link href={link}>
        <button
          className={`${bgColour} flex items-center shadow-lg rounded-[20px] px-4 py-6 h-40 w-${width} h-${height} space-x-5`}
        >
          {icon && (
            <div className="flex flex-col">
              <FontAwesomeIcon icon={icon} className="text-3xl pl-4" />
            </div>
          )}
          <div className="flex flex-col w-full text-start">
            <div className="font-semibold text-sm pb-1">{title}</div>
            <div className="text-xs">{description}</div>
          </div>
          {children}
        </button>
      </Link>
    </div>
  );
};

export function DashboardPage(props) {
  console.log(props.employee.employee);
  return (
    <div className="bg-white w-full h-full">
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <div className="flex flex-col items-center px-4 gap-2">
        <div className="grid grid-cols-1 w-full  md:grid-cols-3 mx-10 pt-4 gap-4">
          <ButtonLikeCard
            colspan="col-span-1"
            icon={faUsers}
            width="full"
            description={
              <div className="text-3xl"> GHC 5OOO</div>
            }
            link="dashboard/finance"
            title="Income"
            bgColour="bg-[#FACC89]"
            key="finance"
          >
            <LineChart
              width={120}
              height={40}
              data={data}
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Tooltip/>
            </LineChart>
          </ButtonLikeCard>

          <ButtonLikeCard
            colspan="col-span-1"
            width="full"
            icon={faCoins}
            description={
              <div className="text-3xl"> GHC 5OOO</div>
            }
            link="dashboard/finances"
            title="FINANCE"
            bgColour="bg-[#E2E9FE]"
            key="finance"
          >
            <LineChart
              width={120}
              height={40}
              data={data}
              
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Tooltip/>
            </LineChart>
          </ButtonLikeCard>


          <ButtonLikeCard
            colspan="col-span-1"
            icon={faBook}
            description={
            <><div className="text-3xl">10</div><span
                className="text-xs">Total Orders
              </span></>
            }
            link="dashboard/inventory"
            title="Sales"
            bgColour="bg-[#B1FF92]"
            width="full"
            key="inventory"
          >
            <LineChart
              width={120}
              height={40}
              data={data}
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Tooltip/>
            </LineChart>
          </ButtonLikeCard>
        </div>

        {/* Second Row   */}
        <div className="  px-10 mx-10 mt-4 md:mt-50 gap-6 rounded-[20px] shadow-lg w-full bg-slate-100 ">
          <div className="pl-10 mt-4">Total Income</div>
          <div>
            <LineChart
              width={1400}
              height={370}
              data={data}
              margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip/>
            </LineChart>
          </div>
        </div>

        {/* Third Row */}
        <div className="px-10 mt-4 md:mt-50 gap-6 rounded-[20px] shadow-lg w-full bg-slate-100 ">
          <div className="flex flex-row justify-between mt-6 mb-2">
            <h2>Transaction History</h2>
            <div className="flex flex-row gap-6 ">
            <p className="underline">Recent</p>
            <p className="underline">Older</p>
            </div>
            </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Receiver</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Ghc 1,200</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                  <td>Ghc 1,200</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                  <td>Ghc 1,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(DashboardPage);
