import React, { useState, useEffect } from "react";
import withAuth from "../../../components/withAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import AddEmployeeModal from "./addEmployeeModal";
import ManageEmployeeModal from "./manageEmployeeModal";
import {  useRouter } from "next/router";


const Manage_HR = () => {
  const [isAddEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [employeeRecords, setEmployeeRecords] = useState([""]);
  const router = useRouter()


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

  async function getEmployees() {
    try {
      await fetch("https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/employee/", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }).then(response => response.json()).then(data => {
        setEmployeeRecords(data.employees)
      })
    } catch (error) {
      console.log(error);
    }
  }

  // get employees on page load
  useEffect(() => {
    getEmployees()
  }, [])


  return (
    <div className="max-w-screen max-h-screen p-4 mt-10 mx-10 border-4 rounded-3xl relative">
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
      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar mt-4">
        <ul className="mt-5 divide-y">
          {employeeRecords.map((employee) => (
            <li id={employee._id} key={employee.email} className="py-5 flex items-start justify-between">
              <div className="flex gap-3">
                <div>
                  <FontAwesomeIcon
                    icon={faUserAlt}
                    className="flex-none w-12 h-12 "
                  />
                </div>
                <div>
                  <span className="block text-sm text-gray-700 font-semibold">
                    {employee.first_name}   &nbsp;
                    {employee.last_name}
                  </span>
                  <span className="block text-sm text-gray-600">
                    {employee.email}
                  </span>
                </div>
              </div>
              <button
                // onClick={() => openManageModal(employee)}
                onClick={() => 
                // router.push("")
                router.push({
                  pathname: "manage_hr/manageEmployeeModal",
                 
                })
                  
                }
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
