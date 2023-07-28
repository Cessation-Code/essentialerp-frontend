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
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 350, pv: 2000, amt: 1850 },
  { name: "Page G", uv: 410, pv: 3100, amt: 2700 },
  { name: "Page H", uv: 180, pv: 1500, amt: 1600 },
  { name: "Page I", uv: 500, pv: 4200, amt: 3900 },
  { name: "Page J", uv: 270, pv: 3200, amt: 2300 },

];

const Card = ({ title, children }) => {
  return (
    <div className="card p-3 w-full bg-slate-100 text-primary">
      <h2 className="text-base font-semibold">{title}</h2>
      {children}
    </div>
  );
};

export function DashboardPage(props) {
  return (

    <div className="flex flex-row h-full items-center gap-5 px-10"> {/* Parent Div */}

      <Head>
        <title>Dashboard | ERP</title>
      </Head>


      {/* Column 1 */}
      <div className="flex flex-col basis-1/2 gap-y-5 items-center">

        {/*Column 1 Row 1 */}
        <div className="flex flex-row gap-2">

          <div className="flex flex-col basis-1/2">
            <div className="rounded-xl bg-slate-300 w-[30vh] p-2 border-2 border-primary hover:scale-105 transition-all">
              <div className="flex flex-col text-sm font-semibold">
                <div className="flex ">
                  Total Sales Today:
                </div>
                <div className="flex">
                  GHC 8OOO
                </div>
              </div>
              <LineChart width={100} height={40} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Tooltip />
              </LineChart>
            </div>
          </div>

          <div className="flex flex-col basis-1/2">
            <div className="rounded-xl bg-slate-300 w-[30vh] p-2 border-2 border-primary hover:scale-105 transition-all">
              <div className="flex flex-col text-sm font-semibold">
                <div className="flex ">
                  Total Sales Today:
                </div>
                <div className="flex">
                  GHC 8OOO
                </div>
              </div>
              <LineChart width={100} height={40} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Tooltip />
              </LineChart>
            </div>
          </div>

        </div>

        {/* Column 1 Row 2 */}
        <div className="flex flex-row gap-2">
          <div className="flex flex-col basis-1/2">
            <div className="rounded-xl bg-slate-300 w-[30vh] p-2 border-2 border-primary hover:scale-105 transition-all">
              <div className="flex flex-col text-sm font-semibold">
                <div className="flex ">
                  Total Sales Today:
                </div>
                <div className="flex">
                  GHC 8OOO
                </div>
              </div>
              <LineChart width={100} height={40} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Tooltip />
              </LineChart>
            </div>
          </div>
          <div className="flex flex-col basis-1/2">
            <div className="rounded-xl bg-slate-300 w-[30vh] p-2 border-2 border-primary hover:scale-105 transition-all">
              <div className="flex flex-col text-sm font-semibold">
                <div className="flex ">
                  Total Sales Today:
                </div>
                <div className="flex">
                  GHC 8OOO
                </div>
              </div>
              <LineChart width={100} height={40} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Tooltip />
              </LineChart>
            </div>
          </div>
        </div>

        {/* Column 1 Row 3 */}
        <div className="flex flex-row gap-2">
          <Card title="Total Expense">
            <div className="flex pt-4">
              <LineChart width={460} height={200} data={data} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </Card>
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col basis-1/2 gap-3">

        <div className="flex flex-row">
          <Card title={"Sales History"}>
            <div className="overflow-x-auto w-full custom-scrollbar h-[15vh]">
              <table className="table table-xs w-full">
                {/* head */}
                <thead>
                  <tr className="bg-slate-300 text-black">
                    <th>Receiver</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody className="gap-4 text-xs">
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

        <div className="flex flex-row">
          <Card title={"Expense History"}>
            <div className="overflow-x-auto w-full custom-scrollbar h-[15vh]">
              <table className="table table-xs w-full">
                {/* head */}
                <thead>
                  <tr className="bg-slate-300 text-black">
                    <th>Receiver</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody className="gap-4 text-xs">
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

        <div className="flex flex-row">
          <Card title={"New Products"}>
            <div className="overflow-x-auto w-full custom-scrollbar h-[15vh]">
              <table className="table table-xs w-full">
                {/* head */}
                <thead>
                  <tr className="bg-slate-300 text-black">
                    <th>Receiver</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody className="gap-4 text-xs">
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
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td>Ghc 1,200</td>
                  </tr>
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td>Ghc 1,200</td>
                  </tr>
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td>Ghc 1,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

      </div>

    </div>
  );
}

export default withAuth(DashboardPage);
