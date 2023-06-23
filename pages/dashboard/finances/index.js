import React, { useState } from "react";
import AuthenticatedLayout from "../../../components/layouts/authenticated_layout/authenticated_layout";

const Finance = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, title: "Invoice 1" },
    { id: 2, title: "Invoice 2" },
    { id: 3, title: "Invoice 3" },
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, title: "Expense 1" },
    { id: 2, title: "Expense 2" },
    { id: 3, title: "Expense 3" },
  ]);

  const [calculations, setCalculations] = useState([
    { id: 1, title: "Calculation 1" },
    { id: 2, title: "Calculation 2" },
    { id: 3, title: "Calculation 3" },
  ]);

  const performCalculations = () => {
    // Perform finance calculations based on invoices and expenses data
    const totalInvoices = invoices.length;
    const totalExpenses = expenses.length;
    const totalCalculations = calculations.length;

    const results = [
      { id: 1, title: `Total Invoices: ${totalInvoices}` },
      { id: 2, title: `Total Expenses: ${totalExpenses}` },
      { id: 3, title: `Total Calculations: ${totalCalculations}` },
    ];

    setCalculations(results);
  };

  const addNewInvoice = () => {
    const newInvoiceId = invoices.length + 1;
    const newInvoice = { id: newInvoiceId, title: `Invoice ${newInvoiceId}` };
    setInvoices([...invoices, newInvoice]);
  };

  const addNewExpense = () => {
    const newExpenseId = expenses.length + 1;
    const newExpense = { id: newExpenseId, title: `Expense ${newExpenseId}` };
    setExpenses([...expenses, newExpense]);
  };

  const deleteInvoice = (id) => {
    const updatedInvoices = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(updatedInvoices);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <AuthenticatedLayout>
        <div className="flex flex-wrap">
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg p-4 mb-4 h-{50%} overflow-y-auto">
              <h3 className="text-lg font-bold mb-2">Invoices</h3>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border-b border-gray-300 px-4 py-2">ID</th>
                    <th className="border-b border-gray-300 px-4 py-2">Title</th>
                    <th className="border-b border-gray-300 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <td className="border-b border-gray-300 px-4 py-2">{invoice.id}</td>
                      <td className="border-b border-gray-300 px-4 py-2">{invoice.title}</td>
                      <td className="border-b border-gray-300 px-4 py-2">
                        <button className="btn btn-primary mr-2">Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteInvoice(invoice.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-primary mt-4 ml-auto" onClick={addNewInvoice}>
                Add Invoice
              </button>
            </div>
            <div className="bg-white rounded-lg p-4 h-{50%} overflow-y-auto">
              <h3 className="text-lg font-bold mb-2">Expenses</h3>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border-b border-gray-300 px-4 py-2">ID</th>
                    <th className="border-b border-gray-300 px-4 py-2">Title</th>
                    <th className="border-b border-gray-300 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense) => (
                    <tr key={expense.id}>
                      <td className="border-b border-gray-300 px-4 py-2">{expense.id}</td>
                      <td className="border-b border-gray-300 px-4 py-2">{expense.title}</td>
                      <td className="border-b border-gray-300 px-4 py-2">
                        <button className="btn btn-primary mr-2">Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteExpense(expense.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-primary mt-4 ml-auto" onClick={addNewExpense}>
                Add Expense
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/4 my-4 px-3">
            <div className="bg-red-400 rounded-lg p-4 h-full overflow-y-auto">
              <h3 className="text-lg font-bold mb-2">Calculations</h3>
              <ul>
                {calculations.map((calculation) => (
                  <li key={calculation.id}>{calculation.title}</li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={performCalculations}>
                  Perform Calculations
                </button>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Finance;
