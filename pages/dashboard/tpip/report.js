import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Organization A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Organization B',   
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Organization C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Organization D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Organization E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Organization F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Organization G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const renderBarChart = (
  <ResponsiveContainer  width="100%" height={550}>
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
          <Bar dataKey="pv" fill="#8884d8" />
          
        </BarChart>
   </ResponsiveContainer> 
);

const Report = () => {
  return (
    <div className="bg-slate-100 w-[90%] m-4 rounded-[20px] shadow-lg overflow-hidden h-full p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 pb-4">
        TPIP REPORT
      </h2>
      <div className="flex justify-center">{renderBarChart}</div>
    </div>
  );
};

export default Report;
