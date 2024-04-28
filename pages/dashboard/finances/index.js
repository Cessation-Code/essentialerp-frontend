import React, { useEffect, useState } from "react";
import withAuth from "../../../components/withAuth";
import SalesTable from "./sales";
import ExpenseTable from "./expenses";
import Report from "./report";

const Finance = () => {
  const [activeTab, setActiveTab] = useState("sales");
  const [expenseItems, setExpenseItems] = useState("");
  const [salesEntries, setSalesEntries] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    console.log(window.location.hash);
    if (window.location.hash === "#expenses") {
      setActiveTab("expenses");
    } else if (window.location.hash === "#sales") {
      setActiveTab("sales");
    } else if (window.location.hash === "#report") {
      setActiveTab("report");
    }

    getSalesEntries();
    getExpenseItems();
  }, []);

  async function getSalesEntries() {
    try {
      await fetch(
        `${baseUrl}/api/v1/sale/`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setSalesEntries(data.sales);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function getExpenseItems() {
    try {
      await fetch(
        `${baseUrl}/api/v1/expense/`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setExpenseItems(data.expenses);
          console.log(data.expenses);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(salesEntries)
    if (tab === "expenses") {
      window.location.hash = "#expenses";
    } else if (tab === "sales") {
      window.location.hash = "#sales";
    } else if (tab === "report") {
      window.location.hash = "#report";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">

      <h3 className="text-3xl font-bold my-4">Finances - Sales and Expenses</h3>

      <button className="bg-blue-200 rounded space-x-4 w-fit mb-4 p-2">

        <a
          className={`p-1 ${activeTab === "sales" ? "bg-blue-400 rounded" : ""}`}
          onClick={() => handleTabClick("sales")}
        >
          Sales
        </a>
        <a
          className={`p-1 ${activeTab === "expenses" ? "bg-blue-400 rounded" : ""}`}
          onClick={() => handleTabClick("expenses")}
        >
          Expenses
        </a>
        <a
          className={`p-1 ${activeTab === "report" ? "bg-blue-400 rounded" : ""}`}
          onClick={() => handleTabClick("report")}
        >
          Report
        </a>

      </button>

      { activeTab === "sales" && <SalesTable salesEntries={salesEntries} /> }
      { activeTab === "expenses" && <ExpenseTable id="expenses" expenseItems={expenseItems}/> }
      { activeTab === "report" && <Report salesEntries={salesEntries} expenseEntries={expenseItems}/> }
      
    </div>
  );
};

export default withAuth(Finance);
