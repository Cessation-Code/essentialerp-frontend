import React, { useState, useEffect } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchButton from "../../../components/search";
import AddExpenseModal from "./addExpenseModal";
import ViewExpenseModal from "./viewExpenseModal";
import LoadingSpinner from "../../../components/loadingSpinner";

const ExpenseTable = () => {
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);
  const [isViewExpenseModalOpen, setIsViewExpenseModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState("");
  const [expenseItems, setExpenseItems] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Track the search query

  // get expense items
  useEffect(() => {
    async function getExpenseItems() {
      try {
        // get expense items
        const response = await fetch(
          "https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/expense/",
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        // save it to state
        setExpenseItems(data.expenses);
        console.log(data.expenses);
      } catch (error) {
        console.log(error);
      }
    }
    getExpenseItems();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // Update the search query state
    if (query.trim() === "") {
      // If the search query is empty, reset the search results
      setSearchResults([]);
    } else {
      // Include all elements which include the search query
      const filteredData = expenseItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredData);
    }
  };
  

  const openAddExpenseModal = () => {
    setIsAddExpenseModalOpen(true);
  };

  const closeAddExpenseModal = () => {
    setIsAddExpenseModalOpen(false);
  };

  const openViewExpenseModal = () => {
    setIsViewExpenseModalOpen(true);
  };

  const closeViewExpenseModal = () => {
    setIsViewExpenseModalOpen(false);
  };

  function formatDate(expenseDate) {
    const date = new Date(expenseDate);
    return date.toLocaleDateString("en-US");
  }

  // show loading spinner if expense items aren't loaded yet
  if (!expenseItems) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full px-6">
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl text ml-2 font-semibold">Expense Table</h3>
        <div className="flex flex-row items-baseline">
          <SearchButton onSearch={handleSearch} />
          <button className="btn" onClick={openAddExpenseModal}>
            Add Expense
          </button>
        </div>
      </div>

      {isAddExpenseModalOpen && (
        <AddExpenseModal isOpen={openAddExpenseModal} onClose={closeAddExpenseModal} />
      )}
      {isViewExpenseModalOpen && (
        <ViewExpenseModal
          isOpen={openViewExpenseModal}
          onClose={closeViewExpenseModal}
          selectedRowData={selectedRowData}
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
            {(searchQuery.trim() === "" || searchResults.length === 0
              ? expenseItems
              : searchResults
            ).map((entry) => (
              <tr key={entry._id}>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.name}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.amount}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {formatDate(entry.created_at)}
                </td>
                <td className="border-b border-gray-300 py-2">
                  <button
                    className="btn-icon"
                    onClick={() => {
                      setSelectedRowData(entry);
                      openViewExpenseModal();
                    }}
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </button>
                </td>
              </tr>
            ))}
            {searchQuery.trim() !== "" && searchResults.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
