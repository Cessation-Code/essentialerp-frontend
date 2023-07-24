import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faEdit, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import SearchButton from "../../../components/search";

const Inventory = () => {
  const inventoryData = [
    {
      id: 1,
      productName: "Waakye",
      category: "Breakfast",
      units: 50,
      cost: 50,
    },
    {
      id: 2,
      productName: "Bacon",
      category: "Lunch",
      units: 100,
      cost: 100,
    },
    {
      id: 3,
      productName: "Tombrown",
      category: "Brunch",
      units: 75,
      cost: 75,
    },
    {
      id: 4,
      productName: "Gobe",
      category: "Dessert",
      units: 120,
      cost: 120,
    },
  ];


  // constansts
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isViewItemModalOpen, setIsViewItemModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState("");
  const [inventoryItems, setInventoryItems] = useState(inventoryData);


  // functions
  const openAddItemModal = () => {
    setIsAddItemModalOpen(true);
  };

  const closeAddItemModal = () => {
    setIsAddItemModalOpen(false);
  };

  const openViewItemModal = () => {
    setIsViewItemModalOpen(true);
  }

  const closeViewItemModal = () => {
    setIsViewItemModalOpen(false);
  }

  function formatDate(expenseDate) {
    const date = new Date(expenseDate);
    return date.toLocaleDateString("en-US");
  }

  async function handleAddItem() {
    console.log("add item");
  }

  async function getInventoryItems() {
    console.log("get inventory items");
  }

  return (
    <div className="w-full px-6">

      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl text ml-2 font-semibold">Inventory Table</h3>
        <div className="flex flex-row items-baseline">
          <SearchButton />
          <button className="btn" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
      </div>

      <div className="max-h-[55vh] overflow-y-auto custom-scrollbar">
        <table className="w-[98%] border border-gray-300 ">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Unit Price (GHS)
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Stock
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((entry) => (
              <tr key={entry._id}>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.productName}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.cost}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.units}
                </td>
                <td className="border-b border-gray-300 py-2">
                  <button className="btn-icon" onClick={() => {
                    setSelectedRowData(entry);
                    openViewItemModal();
                  }}>
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

export default Inventory;
