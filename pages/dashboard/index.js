import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCoins,
  faBook,
  faFunnelDollar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import withAuth from "../../components/withAuth";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
];

const Card = ({ title, children }) => {
  return (
    <div className="card w-full h-full bg-slate-100 text-primary">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export function DashboardPage(props) {
  console.log(props.employee.employee);
  return (
    <div className="bg-white ">
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <div className="flex flex-col items-center px-4 h-full gap-4 overflow-hidden">
        <div className="grid grid-cols-1 w-full h-1/5 md:grid-cols-3 mx-10 pt-4 gap-4">
          <Card
            title="Income"
            children={
              <>
                <div className="text-3xl flex flex-row"> GHC 8OOO</div>
                <LineChart
                  width={120}
                  height={40}
                  data={data}
                  margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Tooltip />
                </LineChart>
              </>
            }
          />

          <Card title="Expense">
            <div className="text-3xl"> GHC 5OOO</div>
            <LineChart
              width={120}
              height={40}
              data={data}
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Tooltip />
            </LineChart>
          </Card>

          <Card title="Expense">
            <div className="text-3xl"> GHC 5OOO</div>
            <LineChart
              width={120}
              height={40}
              data={data}
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Tooltip />
            </LineChart>
          </Card>
        </div>

        {/* Second Row   */}
        <Card title="Total Expense">
          <div className="flex-grow pt-4">
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
              <Tooltip />
            </LineChart>
          </div>
        </Card>

        {/* Third Row */}
        <Card
          title={
            <div className="flex flex-row gap-[1200px]">
              <h2>Transaction History</h2>
              <div className="flex flex-row gap-6 ">
                <p className="underline">Recent</p>
                <p className="underline">Older</p>
              </div>
            </div>
          }
        >
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="bg-gray-500 rounded-[10px]">
                  <th>Receiver</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody className="gap-4">
                {/* row 1 */}
                <tr>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Ghc 1,200</td>
                </tr>
                {/* row 2 */}
                <tr>
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
        </Card>
      </div>
    </div>
  );
}

export default withAuth(DashboardPage);
