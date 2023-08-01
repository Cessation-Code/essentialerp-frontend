import React, { useState, useEffect } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchButton from "../../../components/search";
import ViewSaleModal from "./viewSaleModal";
import { useRouter } from "next/router";


const SalesTable = () => {

  const [viewSaleModal, setViewSaleModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState("")
  const router = useRouter();
  const [salesEntries, setSalesEntries] = useState([]);

  useEffect(() => {
    getSalesEntries()
  }, [])

  async function getSalesEntries() {
    try {
      // get expense items
      await fetch("https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/sale/", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }
      ).then(response => response.json()).then(data => {
        // save it to state
        setSalesEntries(data.sales)
      });
    } catch (error) {
      console.log(error);
    }
  }

  const openViewSaleModal = () => {
    setViewSaleModal(true);
  };

  const closeViewSaleModal = () => {
    setViewSaleModal(false);
  };

  function formatDate(saleDate) {
    const date = new Date(saleDate);
    return date.toLocaleDateString("en-US");
  }

  return (
    <div className="w-full px-6">

      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl">Sales Table</h3>
        <div className="flex flex-row items-baseline">
          <SearchButton />
          <button className="btn" onClick={() => {
            router.push("add_sale")
          }}>
            Add Sale
          </button>
        </div>
      </div>

      {viewSaleModal && <ViewSaleModal onClose={closeViewSaleModal} selectedRowData={selectedRowData} />}

      <div className="max-h-[55vh] overflow-y-auto custom-scrollbar">
        <table className="w-[98%] border border-gray-300 mr-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                UUID
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
                  {entry._id}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.amount}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {formatDate(entry.created_at)}
                </td>
                <td className="border-b border-gray-300 py-2">
                  <button className="btn-icon mr-2" onClick={() => {
                    setSelectedRowData(entry)
                    openViewSaleModal()
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

export default SalesTable;
