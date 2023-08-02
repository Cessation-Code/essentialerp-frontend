import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import SearchButton from "../../../components/search";
import AddProductModal from "./addProductModal";
import ViewProductModal from "./viewProductModal";
import { getInventoryItems } from "./getInventoryData";



const Inventory = () => {

  // constansts
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isViewProductModalOpen, setIsViewProductModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState("");
  const [inventoryItems, setInventoryItems] = useState([]);


  // functions
  const openAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  const openViewProductModal = () => {
    setIsViewProductModalOpen(true);
  }

  const closeViewProductModal = () => {
    setIsViewProductModalOpen(false);
  }

  // function formatDate(xx) {
  //   const date = new Date(xx);
  //   return date.toLocaleDateString("en-US");
  // }



  // get inventory items on page load
  useEffect(() => {
    getInventoryItems()
  }, [])

  return (
    <div className="w-full px-6">

      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl text ml-2 font-semibold">Inventory Table</h3>
        <div className="flex flex-row items-baseline">
          <SearchButton />
          <button className="btn" onClick={() => {
            setIsAddProductModalOpen(true)
          }}>
            Add Product
          </button>
        </div>
      </div>

      {isAddProductModalOpen && <AddProductModal isOpen={openAddProductModal} onClose={closeAddProductModal} />}
      {isViewProductModalOpen && <ViewProductModal isOpen={openViewProductModal} onClose={closeViewProductModal} selectedRowData={selectedRowData} />}

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
              console.log(entry),
              <tr key={entry._id}>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.name}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.price}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.stock}
                </td>
                <td className="border-b border-gray-300 py-2">
                  <button className="btn-icon" onClick={() => {
                    setSelectedRowData(entry);
                    openViewProductModal();
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
