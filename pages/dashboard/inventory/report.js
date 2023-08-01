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
    name: "Product 1",
    stock: 2303,
    price: 232,
  },
  {
    name: "Product 2",
    stock: 3000,
    price: 2210,
  },
  {
    name: "Product 3",
    stock: 4000,
    price: 2100,
  },
  {
    name: "Product 4",
    stock: 1203,
    price: 212,
  },
  {
    name: "Product 5",
    stock: 2303,
    price: 232,
  },
  {
    name: "Product 6",
    stock: 3000,
    price: 2210,
  },
  {
    name: "Product 7",
    stock: 4000,
    price: 2100,
  },
];

const renderBarChart = (
  <ResponsiveContainer width="100%" height="80%">
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
      <Bar dataKey="stock" fill="#8884d8" />
      
    </BarChart>
  </ResponsiveContainer>
);

const Report = () => {
  return (
    <div className="bg-slate-100 w-[90%] m-4 rounded-[20px] shadow-lg overflow-hidden h-[80%] p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 pb-4">
        Report Card
      </h2>
      <div className="flex justify-center">{renderBarChart}</div>
    </div>
  );
};

export default Report;
