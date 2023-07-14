import React from "react";
import withAuth from "../../../components/withAuth";
import IncomeTable from "./income";
import ExpenseTable from "./expenses";

const Finance = () => {

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex flex-row justify-between">
              <h3 className="text-3xl font-bold text-center mb-2">
                Finances - Income and Expenses
              </h3>
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded px-2 py-1 mb-3"
              />
            </div>
            <div className="flex justify-between items-center mb-4"></div>
            <div className="grid grid-cols-2">
              {/* Income Table */}
              <IncomeTable />
              
              {/* Expense Table */}
              <ExpenseTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };  

export default withAuth(Finance);
