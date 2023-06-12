import React from "react";
import Chart from "./chart";


const BarChart = () => {
  return (
    <>
      <div className="bg-white py-2 px-2 mx-8 my-1 rounded-xl shadow-md">
        <div className="flex flex-row justify-around pb-4">
          <p className="text-xl font-bold px-1 py-4">Sales Trend</p>
         
        </div>
      </div>
      <div className="w-[650px] flex justify-center items-center p-4 rounded-lg">
        <Chart />
      </div>
    </>
  );
};

export default BarChart;
