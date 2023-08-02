import React, { useState } from "react";
import withAuth from "../../../components/withAuth";
import SalesTable from "./sales";
import ExpenseTable from "./expenses";
import Report from "./report";

const Finance = () => {

  const [activeTab, setActiveTab] = useState("sales");

  useState(() => {

    console.log(window.location.hash)
    if (window.location.hash === '#expenses') {
      setActiveTab("expenses");
    }else if (window.location.hash === '#sales') {
      setActiveTab("sales");
    }else if (window.location.hash === '#report') {
      setActiveTab("report"); 
    }

  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'expenses'){
      window.location.hash = '#expenses'
    }else if (tab === 'sales'){
      window.location.hash = '#sales'
    }else if (tab === 'report'){
      window.location.hash = '#report'
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

      {activeTab === "sales" && <SalesTable />}
      {activeTab === "expenses" && <ExpenseTable id='expenses' />}
      {activeTab === "report" && <Report />}
    </div>
  );
};

export default withAuth(Finance);
