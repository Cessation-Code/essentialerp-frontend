import React, { useState } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchButton from "../../../components/search";

// Rename the function to PascalCase to follow React component naming convention
const SalesTable = () => {

  const salesEntries = [
    {
      id: 1,
      name: "Sale 1",
      date: "2023-05-01",
      category: "Sales",
      amount: 1000,
      editMode: false
    },
    {
      id: 2,
      name: "Sale 2",
      date: "2023-05-03",
      category: "Sales",
      amount: 2000,
      editMode: false,
    },
    {
      id: 3,
      name: "Sale 3",
      date: "2023-05-05",
      category: "Sales",
      amount: 1500,
      editMode: false,
    },
    {
      id: 4,
      name: "Sale 4",
      date: "2023-05-07",
      category: "Sales",
      amount: 1800,
      editMode: false,
    },
    {
      id: 5,
      name: "Sale 5",
      date: "2023-05-09",
      category: "Sales",
      amount: 1200,
      editMode: false,
    },
    {
      id: 6,
      name: "Sale 6",
      date: "2023-05-11",
      category: "Sales",
      amount: 2500,
      editMode: false,
    },
    {
      id: 7,
      name: "Sale 7",
      date: "2023-05-13",
      category: "Sales",
      amount: 1700,
      editMode: false,
    },
    {
      id: 8,
      name: "Sale 8",
      date: "2023-05-15",
      category: "Sales",
      amount: 1900,
      editMode: false,
    },
    {
      id: 9,
      name: "Sale 9",
      date: "2023-05-17",
      category: "Sales",
      amount: 1400,
      editMode: false,
    },
    {
      id: 10,
      name: "Sale 10",
      date: "2023-05-19",
      category: "Sales",
      amount: 2200,
      editMode: false,
    },
    {
      id: 11,
      name: "Sale 11",
      date: "2023-05-21",
      category: "Sales",
      amount: 1600,
      editMode: false,
    },
    {
      id: 12,
      name: "Sale 12",
      date: "2023-05-23",
      category: "Sales",
      amount: 2000,
      editMode: false,
    },
    {
      id: 13,
      name: "Sale 13",
      date: "2023-05-25",
      category: "Sales",
      amount: 1300,
      editMode: false,
    },
    {
      id: 14,
      name: "Sale 14",
      date: "2023-05-27",
      category: "Sales",
      amount: 2400,
      editMode: false,
    },
    {
      id: 15,
      name: "Sale 15",
      date: "2023-05-29",
      category: "Sales",
      amount: 2100,
      editMode: false,
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full px-6">

      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl">Sales Table</h3>
        <div className="flex flex-row items-baseline">
          <SearchButton />
          <button className="btn" onClick={()=>{console.log('this should route you to inventory')}}>
            Add Sale
          </button>
        </div>
      </div>

      <div className="max-h-[55vh] overflow-y-auto custom-scrollbar">
        <table className="w-[98%] border border-gray-300 mr-4">
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
            {salesEntries.map((entry) => (
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
                    className="btn-icon mr-2"
                    onClick={() =>
                      console.log("View button for sales clicked")
                    }
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

export default SalesTable;
