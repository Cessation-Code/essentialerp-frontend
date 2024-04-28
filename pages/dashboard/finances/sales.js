import React, { useState, useEffect } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewSaleModal from "./viewSaleModal";
import { useRouter } from "next/router";

const SalesTable = ({ salesEntries }) => {
  const [viewSaleModal, setViewSaleModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState("");
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

        <h3 className="text-3xl ml-2 font-semibold">Sales Table</h3>

        <button
          className="bg-blue-500 py-1 px-2 rounded-md"
          onClick={() => {
            router.push("add_sale");
          }}
        >
          Add Sale
        </button>


      </div>

      {viewSaleModal && (
        <ViewSaleModal
          onClose={closeViewSaleModal}
          selectedRowData={selectedRowData}
        />
      )}

      <div className="min-h-[55vh] overflow-y-auto custom-scrollbar w-full">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-gray-300 px-4 py-2 text-left font-normal">
                Amount
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left font-normal">
                Date
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {(searchQuery.trim() === "" || searchResults.length === 0
              ? salesEntries
              : searchResults
            ).map((entry) => (
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
                  <button
                    className="btn-icon mr-2"
                    onClick={() => {
                      setSelectedRowData(entry);
                      openViewSaleModal();
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

export default SalesTable;
