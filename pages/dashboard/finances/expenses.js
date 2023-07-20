import React, { useState } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchButton from "../../../components/search";
import Modal from "./addExpenseModal";
import ViewExpenseModal from "./viewExpenseModal";

export const Expenses = {
  expenseEntries: [
    {
      id: 1,
      name: "Gob3",
      date: "2023-05-02",
      category: "Expense",
      amount: 500,
      editMode: false,
    },
    {
      id: 2,
      name: "Et)",
      date: "2023-05-04",
      category: "Expense",
      amount: 800,
      editMode: false,
    },
    {
      id: 3,
      name: "Oats",
      date: "2023-05-05",
      category: "Expense",
      amount: 1500,
      editMode: false,
    },
    {
      id: 4,
      name: "Waakye",
      date: "2023-05-05",
      category: "Expense",
      amount: 1500,
      editMode: false,
    },
    {
      id: 5,
      date: "2023-05-05",
      name: "Gob3",
      category: "Expense",
      amount: 1500,
      editMode: false,
    },
    {
      id: 6,
      date: "2023-05-05",
      name: "Tombrown",
      category: "Expense",
      amount: 1500,
      editMode: false,
    },
    {
      id: 7,
      name: "",
      name: "Gob3",
      date: "2023-05-05",
      category: "Expense",
      amount: 1500,
      editMode: false,
    },
    {
      id: 8,
      name: "Oats",
      date: "2023-05-05",
      category: "Expense",
      amount: 1500,
      editMode: false,
    },
    {
      id: 9,
      name: "Gob3",
      date: "2023-05-05",
      category: "Expense",
      amount: 1500,
      editMode: false,
    },
    {
      id: 10,
      name: "Gob3",
      date: "2023-05-05",
      category: "Expense",
      amount: 1500,
      editMode: false,
    },
  ],
};


const ExpenseTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ViewModal, setViewModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null); // State to hold the clicked row data

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openViewModal = (id) => {
    // console.log("id", id);
    const rowData = Expenses.expenseEntries.find((entry) => entry.id === id); // Find the row data using the clicked id
    setSelectedRowData(rowData); // Set the selected row data
    setViewModal(true); 

    
  // const isValidDateEntry = (date) => {
  //   const regex = /^\d{4}-\d{2}-\d{2}$/;
  //   return regex.test(date);
  };

  return (
    <div className="w-full px-6">
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl text ml-2 font-semibold">Expense Table</h3>
        <div className="flex flex-row items-baseline">
          <SearchButton />
          <button className="btn" onClick={openModal}>
            Add Expense
          </button>
        </div>
      </div>

     {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
      {ViewModal && (
        <ViewExpenseModal
          rowData={selectedRowData}
          isOpen={openViewModal}
          onClose={() => setViewModal(false)}
          setSelectedRowData={setSelectedRowData}
        />
      )}

      <div className="max-h-[55vh] overflow-y-auto custom-scrollbar">
        <table className="w-[98%] border border-gray-300 ">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Amount
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Date
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Expenses.expenseEntries.map((entry) => (
              <tr key={entry.id}>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.name}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.amount}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.date}
                </td>
                <td className="border-b border-gray-300 py-2">
                  <button
                    className="btn-icon"
                    onClick={() => {
                      // setViewModal(true);
                      openViewModal(entry.id);
                      console.log(ViewModal);
                    }}
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable
