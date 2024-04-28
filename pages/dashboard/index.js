import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import withAuth from "../../components/withAuth";
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts";

function formatDate(saleDate) {
  const date = new Date(saleDate);
  return date.toLocaleDateString("en-US");
}

const Card = ({ title, children }) => {
  return (
    <div className="card py-3 px-5 w-full h-fit bg-slate-100 bg-opacity-70 border text-black">
      <div className="text-base font-medium text-slate-600">{title}</div>
      {children}
    </div>
  );
};

const CustomTooltip01 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col bg-slate-400 p-3 bg-opacity-20 text-xs gap-1 font-semibold">
        <div>{`Name:${payload[0].payload.name}`}</div>
        <div>{`Price(GHS): ${payload[0].payload.price}`}</div>
        <div>{`Stock: ${(payload[1].payload.stock)} items left`}</div>
      </div>
    );
  }

  return null;
};

const CustomTooltip02 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col bg-slate-400 p-3 bg-opacity-20 text-xs gap-1 font-semibold">
        <div>{`Sale(GHS): ${payload[0].payload.amount}`}</div>
        {/* <div>{`Expense(GHS): ${payload[1].payload.amount}`}</div> */}
      </div>
    );
  }

  return null;
};


const CustomTooltip03 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col bg-slate-400 p-3 bg-opacity-20 text-xs gap-1 font-semibold">
        <div>{`Sale(GHS): ${formatDate(payload[0].payload.created_at)}`}</div>
        <div>{`Sale(GHS): ${payload[0].payload.amount}`}</div>
        {/* <div>{`Expense(GHS): ${payload[1].payload.amount}`}</div> */}
      </div>
    );
  }

  return null;
};

export function DashboardPage(props) {

  const [inventory, setInventory] = useState([]);
  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    getDashboardData();
  }, [])

  async function getDashboardData() {
    try {
      // get expense items
      await fetch(`${baseUrl}/api/v1/employee/getDashboardData`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }
      ).then(response => response.json()).then(data => {
        // save it to state
        setExpenses(data.expenses)
        setInventory(data.products)
        setSales(data.sales)
      });
    } catch (error) {
      console.log(error)
    }
  }

  function calculateSumOfProperty(array, property) {
    if (!Array.isArray(array) || array.length === 0) {
      return 0;
    }
  
    const sum = array.reduce((accumulator, currentItem) => {
      return accumulator + Number(currentItem[property] || 0);
    }, 0);
  
    // Format the result to 2 decimal places
    return parseFloat(sum.toFixed(2));
  }  

  return (

    <div className="flex flex-col h-full items-center mx-5 justify-evenly"> {/* Parent Div */}

      <Head
        title="Dashboard"
        description="Dashboard"
      />

      {/* First Row */}
      <div className="flex flex-row w-full gap-5 h-full items-center justify-between">

        <div className="flex flex-col w-full basis-1/3">
          <Card title="Inventory Summary (Last 20 items added)">
            <div className="flex flex-col w-full text-lg">
              <div className="font-semibold">
                {inventory.length || `0`} items in inventory
              </div>
            </div>
            <ResponsiveContainer width="100%" height={110}>
              <LineChart data={inventory} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <Line type="monotone" dataKey="stock" stroke="#8884d8" />
                <Line type="monotone" dataKey="price" stroke="#F11A7B" />
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <Tooltip content={CustomTooltip01} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>


        <div className="flex flex-col w-full basis-1/3">
          <Card title="Sale Count" >
            <div>
              {'Sale Made:'}
            </div>
            <div className="flex flex-row text-lg font-semibold">
              &nbsp;
            </div>
            <div className="flex flex-row w-full h-[86px] items-center text-gray-500">
              <div className=" text-[10vh] font-semibold">
                {sales.length}
              </div>
              <div className="font-semibold text-sm">
                &nbsp; sale(s) made this week !
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col w-full basis-1/3">
          <Card title="Expenses">
            <div>
              {'Expenses over the Week:'}
            </div>
            <div className="flex flex-row text-lg font-semibold">
              {`GHS ${calculateSumOfProperty(expenses, 'amount')}`}
            </div>
            <ResponsiveContainer width="100%" height={80}>
              <LineChart data={sales} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                <XAxis dataKey="date_created" hide />
                <Tooltip content={CustomTooltip03} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-row w-full gap-5 h-full items-center">
        <Card title="">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={sales} margin={{ top: 5, right: 30, bottom: 0, left: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='date_created' className="text-xs" />
              <YAxis />
              <Tooltip content={CustomTooltip02} />
              <Legend />
              <Bar dataKey="amount" name="sales" data={sales} fill="#8884d8" />
              {/* <Bar dataKey="amount" name="expenses" data={expenses} fill="#82ca9d" /> */}
              {/* <Line dataKey="amount" name="expenses" data={expenses} fill="#82ca9d" /> */}
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="flex flex-row w-full gap-5 h-full items-center">
        <Card title="">
          <div className="overflow-x-auto w-full custom-scrollbar h-[15vh]">
            <table className="table table-xs w-full">
              <thead>
                <tr className="bg-slate-200 text-black">
                  <th>
                    Sale
                  </th>
                  <th>
                    Amount
                  </th>
                  <th>
                    Sold By
                  </th>
                  <th>
                  </th>
                </tr>
              </thead>
              <tbody className="gap-4 text-xs">
                {sales.map((item) => (
                  <tr key={item._id} className="bg-slate-100 text-black">
                    <td>
                      {item._id}
                    </td>
                    <td>
                      {item.amount}
                    </td>
                    <td>
                      {item.created_by}
                    </td>
                    <td className="flex flex-row-reverse">
                      <Link href="/dashboard/finances#sales">
                        <button className="btn btn-xs btn-info">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

    </div>
  );
}

export default withAuth(DashboardPage);
