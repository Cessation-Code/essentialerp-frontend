import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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



const Report = ({inventoryItems}) => {

  const [graphData, setGraphData] = useState([]);

  // Process the inventoryItems data to create the graph data format
  useEffect(() => {
    const formattedData = inventoryItems.map(item => ({
      name: item.name,
      stock: item.stock,
      price: item.price,
    }));
    setGraphData(formattedData);
  }, [inventoryItems]);

  const renderBarChart = (
    <ResponsiveContainer width="100%" height={550}>
      <BarChart
        width={1200}
        height={550}
        data={graphData}
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

  

  return (
    <div className="bg-slate-100 w-[90%] m-4 rounded-[20px] shadow-lg overflow-hidden h-[80%] p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 pb-4">
        Inventory Report
      </h2>
      <div className="flex justify-center">{renderBarChart}</div>
    </div>
  );
};

export default Report;
