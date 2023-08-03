import React, { useEffect, useState } from "react";
import withAuth from "../../../components/withAuth";
import SalesTable from "./sales";
import ExpenseTable from "./expenses";
import Report from "./report";

const Finance = () => {
  const [activeTab, setActiveTab] = useState("sales");
  const [expenseItems, setExpenseItems] = useState("");
  const [salesEntries, setSalesEntries] = useState([]);

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
      // get expense items
      await fetch(
        "https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/sale/",
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
          // save it to state
          setSalesEntries(data.sales);
        });
    } catch (error) {
      console.log(error);
    }
  }

  // get expense items
  async function getExpenseItems() {
    try {
      // get expense items
      await fetch(
        "https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/expense/",
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
          // save it to state
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

      <div className="text-sm mb-2 breadcrumbs overflow-y-hidden">
        <ul className="flex">
          {/* <li>Finances</li> */}
          {activeTab === "expenses" && (
            <>
              <li>Finances</li>
              <li>Expenses</li>
              
            </>
          )}
          {activeTab === "sales" && (
            <>
              <li>Finances</li>
              <li>Sales</li>
            </>
          )}
          {activeTab === "report" && (
            <>
              <li>Finances</li>
              <li>Report</li>
            </>
          )}
        </ul>
      </div>

      <div className="tabs tabs-boxed w-fit mb-4">
        <a
          className={`tab ${activeTab === "sales" ? "tab-active" : ""}`}
          onClick={() => handleTabClick("sales")}
        >
          Sales
        </a>
        <a
          className={`tab ${activeTab === "expenses" ? "tab-active" : ""}`}
          onClick={() => handleTabClick("expenses")}
        >
          Expenses
        </a>
        <a
          className={`tab ${activeTab === "report" ? "tab-active" : ""}`}
          onClick={() => handleTabClick("report")}
        >
          Report
        </a>
      </div>

      {activeTab === "sales" && <SalesTable salesEntries={salesEntries} />}
      {activeTab === "expenses" && (
        <ExpenseTable id="expenses" expenseItems={expenseItems} />
      )}
      {activeTab === "report" && (
        <Report salesEntries={salesEntries} expenseEntries={expenseItems} />
      )}
    </div>
  );
};

export default withAuth(Finance);
