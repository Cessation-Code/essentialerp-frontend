import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
  } from 'chart.js';
import AddSales from './addSales';
  

    Chart.register(
      ArcElement,
      BarElement,
      CategoryScale,
      Legend,
      LineElement,
      LinearScale,
      PointElement,
      Title,
      Tooltip
    );


const Card = ({ title, children }) => {
  return (
    <div className="card w-[1650px] mt-2 bg-gray-300 text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

const Report = ({ salesData, expensesData }) => {
  // Combine data from sales and expenses tables
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: salesData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: expensesData,
        backgroundColor: 'rgba(255, 139, 149, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
    scales: {
      x: {
        type: 'category',
      },
    },
  };

  return (
    // <div>
    //   <Card title="Report">
    //     <Bar data={chartData} />
        
    //   </Card>
    // </div>
    <div className='text-3xl'>
      <AddSales/>
    </div>
  );
};

export default Report;