import React from "react";
import { useState } from "react";
import SearchButton from "../../../components/search";
import ViewTPIPModal from "./viewTpipModal";
import AddTPIPModal from "./addTpipModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const tpipData = [
  {
    _id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "pass123",
    secret_key: "abc123xyz"
  },
  {
    _id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "hello@321",
    secret_key: "def456uvw"
  },
  {
    _id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    password: "qwerty987",
    secret_key: "ghi789rst"
  },
  {
    _id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    password: "myp@ssword",
    secret_key: "jkl012pqr"
  },
  {
    _id: 5,
    name: "Robert Lee",
    email: "robert.lee@example.com",
    password: "secretpass",
    secret_key: "mno345stu"
  },
  {
    _id: 6,
    name: "Sophia Wang",
    email: "sophia.wang@example.com",
    password: "p@ssw0rd!",
    secret_key: "vwx678yz0"
  },
]

const TPIP = () => {
  const [selectedRowData, setSelectedRowData] = useState("");
  const [viewTPIPModal, setViewTPIPModal] = useState(false);
  const [addTPIPModal, setAddTPIPModal] = useState(false);

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
