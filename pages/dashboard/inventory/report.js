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

function formatDate(saleDate) {
  const date = new Date(saleDate);
  return date.toLocaleDateString("en-US");
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col bg-slate-400 p-3 bg-opacity-20 text-xs gap-1 font-semibold">
        <p className="label">{`Date Added:(${formatDate(payload[0].payload.created_at)})`}</p>
        <p className="label">{`Name: ${(payload[0].payload.name)}`}</p>
      </div>
    );
  }

  return null;
};

const Report = ({ inventoryItems }) => {
  return (
    <div className="bg-slate-100 w-[90%] m- rounded-[20px] shadow-lg overflow-hidden h-[80%] p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 pb-4">
        Inventory Report
      </h2>
      <div className="flex justify-center">
        <ResponsiveContainer width="100%" height={550}>
          <BarChart
            width={1200}
            height={550}
            data={inventoryItems}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="stock"/>
            <Tooltip content={CustomTooltip} />
            <Legend />
            <Bar dataKey="stock" fill="#8884d8" />
            <Bar dataKey="price" fill="#749BC2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Report;
