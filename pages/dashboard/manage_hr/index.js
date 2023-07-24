import React, { useState } from "react";
import withAuth from "../../../components/withAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import AddEmployeeModal from "./addEmployeeModal";
import ManageEmployeeModal from "./manageEmployeeModal";

const Employees = [
  {
    avatar: {},
    firstName: "Edem",
    lastName: "Jonathan",
    password: "0010101",
    email: "unreshablekhon@example.com",
    phone: "+233123456789",
    department: ["HR", "Inventory"],
    contractType: "full_time",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    salary: "50000",
    status: "active",
  },
  {
    avatar: {},
    firstName: "Kwame",
    lastName: "Koranteng",
    password: "0010101",
    email: "kkopoku@example.com",
    phone: "+233987654321",
    department: ["Finance"],
    contractType: "part_time",
    startDate: "2023-02-15",
    endDate: "2023-12-31",
    salary: "35000",
    status: "inactive",
  },
  {
    avatar: {},
    firstName: "Kwame",
    lastName: "Koranteng",
    email: "kkopoku@example.com",
    phone: "+233987654321",
    password: "0010101",
    department: ["Finance"],
    contractType: "part_time",
    startDate: "2023-02-15",
    endDate: "2023-12-31",
    salary: "35000",
    status: "inactive",
  },
  {
    avatar: {},
    firstName: "Kwame",
    lastName: "Koranteng",
    email: "kkopoku@example.com",
    phone: "+233987654321",
    department: ["Finance"],
    contractType: "part_time",
    startDate: "2023-02-15",
    password: "0010101",
    endDate: "2023-12-31",
    salary: "35000",
    status: "inactive",
  },
  {
    avatar: {},
    firstName: "Kwame",
    lastName: "Koranteng",
    email: "kkopoku@example.com",
    phone: "+233987654321",
    department: ["Finance"],
    password: "0010101",
    contractType: "part_time",
    startDate: "2023-02-15",
    endDate: "2023-12-31",
    salary: "35000",
    status: "inactive",
  },
];


const Manage_HR = () => {
  const [isAddEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const viewAddEmployeeModal = () => {
    setAddEmployeeModalOpen(true);
  };

  const closeAddEmployeeModal = () => {
    setAddEmployeeModalOpen(false);

    
  };
  const openManageModal = (rowData) => {
    setSelectedRowData(rowData);
    setIsManageModalOpen(true);
  };

  const closeManageModal = () => {
    setSelectedRowData(null);
    setIsManageModalOpen(false);
  };
  return (
    <div className="max-w-screen max-h-screen p-4 mt-16 mx-10 border-4 rounded-3xl relative">
      <div className="items-start justify-between sm:flex">
        <div className="">
          <h4 className="text-gray-800 text-xl font-semibold">Employees</h4>
          <p className="mt-2 text-gray-600 text-base sm:text-sm">
            Manage your employees access to the system.
          </p>
        </div>
        <button
          onClick={viewAddEmployeeModal}
          className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
        >
          + New member
        </button>
      </div>
      {isAddEmployeeModalOpen && (
        <AddEmployeeModal
          isOpen={viewAddEmployeeModal}
          onClose={closeAddEmployeeModal}
        />
      )}
      {isManageModalOpen && (
      <ManageEmployeeModal
        isOpen={isManageModalOpen}
        onClose={closeManageModal}
        selectedRowData={selectedRowData}
      />
      )}
      <div className="max-h-[calc(78vh-4rem)] overflow-y-auto custom-scrollbar mt-4">
        <ul className="mt-12 divide-y ">
        {Employees.map((item, idx) => (
            <li key={idx} className="py-5 flex items-start justify-between">
              <div className="flex gap-3">
                <div>
                  <FontAwesomeIcon
                    icon={faUserAlt}
                    className="flex-none w-12 h-12  "
                  />
                </div>
                <div>
                  <span className="block text-sm text-gray-700 font-semibold">
                    {item.firstName}   &nbsp;
                    {item.lastName}
                  </span>
                  <span className="block text-sm text-gray-600">
                    {item.email}
                  </span>
                </div>
              </div>
              <button
                onClick={() => openManageModal(item)}
                href="javascript:void(0)"
                className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100"
              >
                Manage
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withAuth(Manage_HR);
