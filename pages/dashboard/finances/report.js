import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Report = ({ salesEntries, expenseEntries }) => {

  return (
    <div className="bg-slate-100 w-[90%] m-4 rounded-[20px] shadow-lg overflow-hidden h-full p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 pb-4">
        Financial REPORT
      </h2>
      <div className="flex justify-center">
        <ResponsiveContainer width="100%" height={550}>
          <BarChart
            width={1200}
            height={550}
            data={[salesEntries, expenseEntries]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" /> //error may exist here because the salesEntries does not have a name property
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar data={expenseEntries} dataKey="amount" fill="#8884d8" />
            <Bar data={salesEntries} dataKey="amount" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Report;
