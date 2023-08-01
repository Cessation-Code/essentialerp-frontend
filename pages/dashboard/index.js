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
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ResponsiveGraphContainer from "../../components/responsiveGraphContainer";

const data = [
  {
    _id: 1,
    date_created: "2023-07-29",
    amount: 100.5,
    created_by: "John Doe",
  },
  {
    _id: 2,
    date_created: "2023-07-28",
    amount: 50.75,
    created_by: "Jane Smith",
  },
  {
    _id: 3,
    date_created: "2023-07-27",
    amount: 75.2,
    created_by: "Alex Johnson",
  },
  {
    _id: 4,
    date_created: "2023-07-26",
    amount: 120.0,
    created_by: "Ella Williams",
  },
  {
    _id: 5,
    date_created: "2023-07-25",
    amount: 90.25,
    created_by: "Robert Lee",
  },
  {
    _id: 6,
    date_created: "2023-07-24",
    amount: 65.8,
    created_by: "Sophia Davis",
  },
  {
    _id: 7,
    date_created: "2023-07-23",
    amount: 40.5,
    created_by: "William Brown",
  },
];

const anotherArray = [
  {
    _id: 8,
    date_created: "2023-07-22",
    amount: 80.1,
  },
  {
    _id: 9,
    date_created: "2023-07-21",
    amount: 55.25,
  },
  {
    _id: 10,
    date_created: "2023-07-20",
    amount: 95.75,
  },
  {
    _id: 11,
    date_created: "2023-07-19",
    amount: 110.9,
  },
  {
    _id: 12,
    date_created: "2023-07-18",
    amount: 70.5,
  },
];

const Card = ({ title, children, height }) => {
  return (
    <div
      className={`card py-3 px-5 w-full h-${height} bg-[#C4D9F8] bg-opacity-100 shadow-md text-black`}
    >
      <h4 className=" font-bold text-start text-gray-800 pb-[0.2%]">
              {title}
            </h4>
      {children}
    </div>
  );
};

export function DashboardPage(props) {
  return (
    <div className="flex flex-col h-full items-center   p-[1%] justify-between">
      {/* Parent Div */}
      <Head title="Dashboard" description="Dashboard" />
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1%] w-full h-[20vh] ">
        {/* Use grid for responsive layout */}
        <div className="flex flex-col w-full">
          <Card title="Sales" height={"full"}>
            <div className="flex flex-col w-full text-lg font-semibold">
              <div>{"100 Items Sold Today"}</div>
              <div>{"GHS 5000"}</div>
            </div>
            <ResponsiveContainer width="100%" height={80}>
              <LineChart
                data={data}
                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
              >
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
        <div className="flex flex-col w-full">
          <Card title="Expenses"  height={"full"}>
            <div className="flex flex-row text-lg font-semibold">
              {"GHS 5000"}
            </div>
            <ResponsiveContainer width="100%" height={80}>
              <LineChart
                data={data}
                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
              >
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
        <div className="flex flex-col w-full">
          <Card title="Quick Actions" height={"full"}></Card>
        </div>
      </div>
      <div className="w-full my-[1%] md:my-[1%] h-[60vh">
        {/* Add margin for spacing */}
        <Card title="Income" height={"[350px]"}>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, bottom: 0, left: 30 }}
            >
              <Line
                type="monotone"
                dataKey="amount"
                data={data}
                stroke="#8884d8"
              />
              <Line
                type="monotone"
                dataKey="amount"
                data={anotherArray}
                stroke="#FD8D14"
              />
              <YAxis />
              <XAxis dataKey="date_created" className="text-xs" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
      <div className="w-full h-[20vh">
        <Card title="Recent Sales" height={"56"}>
          <div className="overflow-x-auto w-full custom-scrollbar h-[15vh]">

            <table className="table table-xs w-full">
              <thead>
                <tr className="bg-slate-200 text-black">
                  <th>Sale</th>
                  <th>Amount</th>
                  <th>Sold By</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="gap-4 text-xs">
                {data.map((item) => (
                  <tr className="bg-slate-100 text-black" key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.amount}</td>
                    <td>{item.created_by}</td>
                    <td className="flex flex-row-reverse">
                      <button className="btn btn-xs btn-info">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default withAuth(DashboardPage);
