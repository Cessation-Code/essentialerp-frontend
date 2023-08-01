import React from "react";
import { useState, useEffect } from "react";
import SearchButton from "../../../components/search";
import ViewTPIPModal from "./viewTpipModal";
import AddTPIPModal from "./addTpipModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";


const TPIP = () => {
  const [selectedRowData, setSelectedRowData] = useState("");
  const [viewTPIPModal, setViewTPIPModal] = useState(false);
  const [addTPIPModal, setAddTPIPModal] = useState(false);
  const [tpipData, setTpipData] = useState([]);

  useEffect(() => {
    getTpips();
  }, []);

  async function getTpips() {
    try {
      const response = await fetch("http://localhost:8000/api/v1/auth_tpip/getTPIP", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setTpipData(data.tpip);
    } catch (error) {
      console.log(error);
    }
  }

  const openViewTPIPModal = () => {
    setViewTPIPModal(true);
  };

  const closeViewTPIPModal = () => {
    setViewTPIPModal(false);
  };

  const openAddTPIPModal = () => {
    setAddTPIPModal(true);
  }

  const closeAddTPIPModal = () => {
    setAddTPIPModal(false);
  }

  return (

    <div className="w-full px-6">
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl">TPIP Table</h3>
        <div className="flex flex-row items-baseline">
          <SearchButton />
          <button
            className="btn"
            onClick={() => {
              setAddTPIPModal(true)
            }}
          >
            Add TPIP
          </button>
        </div>
      </div>

      {viewTPIPModal && (<ViewTPIPModal isOpen={setViewTPIPModal} onClose={closeViewTPIPModal} selectedRowData={selectedRowData} />)}
      {addTPIPModal && <AddTPIPModal isOpen={openAddTPIPModal} onClose={closeAddTPIPModal} />}

      <div className="max-h-[55vh] overflow-y-auto custom-scrollbar">
        <table className="w-[98%] border border-gray-300 mr-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Secret Key
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {tpipData.map((entry) => (
              <tr key={entry.name}>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.name}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.email}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {entry.secret_key}
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
