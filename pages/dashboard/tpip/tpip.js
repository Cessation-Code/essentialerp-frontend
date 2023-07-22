import React from "react";
import { useState } from "react";
import SearchButton from "../../../components/search";
import ViewTPIPModal from "./viewTpipModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const Tpip = {
  tpipData: [
    {
      id: 1,
      name: "TPIP 1",
      date: "2023-05-01",
      category: "TPIPs",
      amount: 1000,
      editMode: false,
    },
    {
      id: 2,
      name: "TPIP 2",
      date: "2023-05-03",
      category: "TPIPs",
      amount: 2000,
      editMode: false,
    },
    {
      id: 3,
      name: "TPIP 3",
      date: "2023-05-05",
      category: "TPIPs",
      amount: 1500,
      editMode: false,
    },
    {
      id: 4,
      name: "TPIP 4",
      date: "2023-05-07",
      category: "TPIPs",
      amount: 1800,
      editMode: false,
    },
    {
      id: 5,
      name: "TPIP 5",
      date: "2023-05-09",
      category: "TPIPs",
      amount: 1200,
      editMode: false,
    },
    {
      id: 6,
      name: "TPIP 6",
      date: "2023-05-11",
      category: "TPIPs",
      amount: 2500,
      editMode: false,
    },
  ],
};
const TPIP = () => {
  const [selectedRowData, setSelectedRowData] = useState("");
  const [viewTPIPModal, setViewTPIPModal] = useState(false);

  const openViewTPIPModal = () => {
    setViewTPIPModal(true);
  };

  const closeViewTPIPModal = () => {
        setViewTPIPModal(false);
  };

  return (
    
      <div className="w-full px-6">
        <div className="flex flex-row justify-between mb-4">
          <h3 className="text-3xl">TPIP Table</h3>
          <div className="flex flex-row items-baseline">
            <SearchButton />
            <button
              className="btn"
              onClick={null}
            >
              Add TPIP
            </button>
          </div>
        </div>

        {viewTPIPModal && (
          <ViewTPIPModal
            onClose={closeViewTPIPModal}
            selectedRowData={selectedRowData}
          />
        )}

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
              {Tpip.tpipData.map((entry) => (
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
                      onClick={() => {
                        setSelectedRowData(entry);
                        openViewTPIPModal();
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

export default TPIP;
