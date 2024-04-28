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

function formatDate(saleDate) {
  const date = new Date(saleDate);
  return date.toLocaleDateString("en-US");
}

const CustomTooltip01 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col bg-slate-400 p-3 bg-opacity-20 text-xs gap-1 font-semibold">
        <p className="label">{`Date:(${formatDate(label)})`}</p>
        <p className="label">{`Sale Made: ${payload[0].payload.amount}`}</p>
      </div>
    );
  }
  return null;
};


const CustomTooltip02 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col bg-slate-400 p-3 bg-opacity-20 text-xs gap-1 font-semibold">
        <p className="label">{`Date:(${formatDate(label)})`}</p>
        <p className="label">{`Expense Incurred: ${(payload[0].payload.amount)}`}</p>
      </div>
    );
  }

  return null;
};

const Report = ({ salesEntries, expenseEntries }) => {

  return (
    <div className="bg-slate-100 w-[90%] m-4 rounded-[20px] shadow-lg overflow-hidden h-full p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 pb-4">
        Financial REPORT
      </h2>
      <div className="flex flex-row justify-center">
        <div className="basis-1/2">
          <div className="basis-1/2"></div>
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
              <XAxis hide dataKey="created_at" /> //error may exist here because the salesEntries does not have a name property
              <YAxis dataKey='amount' />
              <Tooltip content={<CustomTooltip01 />} />
              <Legend />
              <Bar data={salesEntries} name="sale" dataKey="amount" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="basis-1/2">
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
              <XAxis hide dataKey="created_at" /> //error may exist here because the salesEntries does not have a name property
              <YAxis dataKey='amount' />
              <Tooltip content={<CustomTooltip02 />} />
              <Legend />
              <Bar data={expenseEntries} name="expense" dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Report;
