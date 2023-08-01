import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    sales: 4000,
    expenses: 2400,
    amt: 2400,
  },
  {
    name: "February",
    sales: 3000,
    expenses: 1398,
    amt: 2210,
  },
  {
    name: "March",
    sales: 2000,
    expenses: 9800,
    amt: 2290,
  },
  {
    name: "April",
    sales: 2780,
    expenses: 3908,
    amt: 2000,
  },
  {
    name: "May",    
    sales: 1890,
    expenses: 4800,
    amt: 2181,
  },
  {
    name: "June",    
    sales: 2390,
    expenses: 3800,
    amt: 2500,
  },
  {
    name: "July",
    slaes: 3490,
    expenses: 4300,
    amt: 2100,
  },
];

const renderBarChart = (
  <ResponsiveContainer width="100%" height={550}>
    <BarChart
      width={1200}
      height={550}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="expenses" fill="#8884d8" />
      <Bar dataKey="sales" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

const Report = () => {
  return (
    <div className="bg-slate-100 w-[90%] m-4 rounded-[20px] shadow-lg overflow-hidden h-full p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 pb-4">
        Report Card
      </h2>
      <div className="flex justify-center">{renderBarChart}</div>
    </div>
  );
};

export default Report;
