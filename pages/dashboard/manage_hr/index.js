import React, { useState } from "react";
import withAuth from "../../../components/withAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt} from "@fortawesome/free-solid-svg-icons";
import AddEmployeeModal from "./addEmployeeModal";

const Employees = [
  {
    avatar: {},
    name: "Edem Jonathan",
    email: "unreshablekhon@example.com",
    editMode: false,
  },
  {
    avatar: {},
    name: "Kwame Koranteng",
    email: "kkopoku@example.com",
    editMode: false,
  },
  {
    avatar:
      {},
    name: "Big Chungus",
    email: "bigchungus@example.com",
    editMode: false,
  },
  {
    avatar:
      {},
    name: "Dr. Nunoo",
    email: "drnunoo@example.com",
    editMode: false,
  },
  {
    avatar:
      {},
    name: "Dr. Nunoo",
    email: "drnunoo@example.com",
    editMode: false,
  },
  {
    avatar:
      {},
    name: "Dr. Nunoo",
    email: "drnunoo@example.com",
    editMode: false,
  },
  {
    avatar:
      {},
    name: "Dr. Nunoo",
    email: "drnunoo@example.com",
    editMode: false,
  },
  {
    avatar:
      {},
    name: "Dr. Nunoo",
    email: "drnunoo@example.com",
    editMode: false,
  },
  
];


const Manage_HR = () => {
  const [isAddEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);

  const viewAddEmployeeModal = () => {
    setAddEmployeeModalOpen(true);
  };

  const closeAddEmployeeModal = () => {
    setAddEmployeeModalOpen(false);
  };

  return (
      <div className="max-w-screen max-h-screen p-4 mt-16 mx-10 border-4 rounded-3xl relative" >
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
          
           +  New member
          </button>
        </div >
        {isAddEmployeeModalOpen && <AddEmployeeModal isOpen={viewAddEmployeeModal} onClose={closeAddEmployeeModal} />}
           {/* {isAddExpenseModalOpen && <AddExpenseModal isOpen={openAddExpenseModal} onClose={closeAddExpenseModal} />} */}
        <div className="max-h-[calc(78vh-4rem)] overflow-y-auto custom-scrollbar mt-4">

        <ul className="mt-12 divide-y ">
          {Employees.map((item, idx) => (
            <li key={idx} className="py-5 flex items-start justify-between">
              <div className="flex gap-3">
                <div
                >
                  <FontAwesomeIcon icon={faUserAlt} className="flex-none w-12 h-12  "/>
                  
                </div>
                <div>
                  <span className="block text-sm text-gray-700 font-semibold">
                    {item.name}
                  </span>
                  <span className="block text-sm text-gray-600">
                    {item.email}
                  </span>
                </div>
              </div>
              <button
              onClick={() => {
                
              }}
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
