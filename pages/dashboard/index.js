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

    <div className="flex flex-col h-full items-center m-5 justify-around"> {/* Parent Div */}

      <div className="flex flex-row w-full gap-5">
        hi
      </div>

      <div className="flex flex-row w-full gap-5">
        hi
      </div>

    </div>
  );
}

export default withAuth(DashboardPage);
