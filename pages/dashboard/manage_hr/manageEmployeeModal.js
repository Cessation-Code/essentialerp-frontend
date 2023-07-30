import React, { useState } from "react";
import withAuth from "../../../components/withAuth";
import { CheckBox } from "./addEmployeeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ManageEmployee = () => {
  const router = useRouter();

  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hrChecked, setHrChecked] = useState(false);
  const [inventoryChecked, setInventoryChecked] = useState(false);
  const [financeChecked, setFinanceChecked] = useState(false);
  const [tpipChecked, setTpipChecked] = useState(false);
  const [contractType, setContractType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    
  };


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleHrChange = (event) => {
    setHrChecked(event.target.checked);
  };

  const handleInventoryChange = (event) => {
    setInventoryChecked(event.target.checked);
  };

  const handleFinanceChange = (event) => {
    setFinanceChecked(event.target.checked);
  };

  const handleTpipChange = (event) => {
    setTpipChecked(event.target.checked);
  };

  const handleContractTypeChange = (event) => {
    setContractType(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    const queryParams = router.query;
    if (queryParams && queryParams.selectedRowData) {
      try {
        const selectedRowData = JSON.parse(queryParams.selectedRowData);
        setFirstName(selectedRowData.first_name);
        setLastName(selectedRowData.last_name);
        setPhone(selectedRowData.phone);
        setEmail(selectedRowData.email);
        setPassword(selectedRowData.password);
        setHrChecked(selectedRowData.hrChecked === "true");
        setInventoryChecked(selectedRowData.inventoryChecked === "true");
        setFinanceChecked(selectedRowData.financeChecked === "true");
        setTpipChecked(selectedRowData.tpipChecked === "true");
        setContractType(selectedRowData.contractType);
        setStartDate(selectedRowData.startDate);
        setEndDate(selectedRowData.endDate);
        setSalary(selectedRowData.salary);
        setStatus(selectedRowData.status);
      } catch (error) {
        console.error("Error parsing selectedRowData:", error);
        // Handle the error here, e.g., show an error message or set default values
      }
    }
  }, [router.query]);
  

   const handleCancel = () => {
    router.back();
  };

  

  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <div className="max-h-[90vh] bg-transparent text-gray-900 flex justify-center ">
      <div className="max-w-screen-2xl max-h-full m-0 sm:m-10 bg-gray-100 border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 ">
          <div className="flex flex-col item-center h-[30%] mt-6 justify-center">
            <FontAwesomeIcon icon={faUserAlt} fontSize={"170px"} />
            <div className="mt-4">
              <h2 className="text-center  text-bold">{firstName}&nbsp;{lastName}</h2>
              {/* <h2 className="text-center text-gray-500">Accountant</h2> */}
            </div>
            <div className="divider"></div>
          </div>
          <div className="flex flex-col justify-evenly h-[70%]">
            <div className="group relative block bg-slate-200 p-8 rounded">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  mb-2">
                    <label className="text-xs mb-1 text-gray-400">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="name"
                      value={firstName}
                      className="w-auto h-6 bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                      required
                      onChange={handleFirstNameChange}
                      disabled={!isEditMode}
                    />
                  </div>
                  <div className="flex flex-row mb-4">
                    <label className="text-xs mb-1 text-gray-400">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      name="name"
                      className="w-auto h-6 bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                      required
                      onChange={handleLastNameChange}
                      disabled={!isEditMode}
                    />
                  </div>
                  <div className="flex flex-row  mb-4">
                    <label className="text-xs mb-1 text-gray-400">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="number"
                      placeholder="+233"
                      name="Phone"
                      value={phone}
                      className="w-auto h-6 bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
                      required
                      onChange={handlePhoneChange}
                      disabled={!isEditMode}
                    />
                  </div>
                  <div className="flex flex-row  mb-4">
                    <label className="text-xs mb-1 text-gray-400">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      name="email"
                      className="w-auto h-6 bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                      required
                      onChange={handleEmailChange}
                      disabled={!isEditMode}
                    />
                  </div>
                  <div className="flex flex-row mb-4">
                    <label className="text-xs mb-1 text-gray-400">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      className="w-auto h-6 bg-transparent rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm border-gray-700 outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                      required
                      onChange={handlePasswordChange}
                      disabled={!isEditMode}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mt-4">
                      Portal Access
                    </label>
                    <div className="flex flex-row mt-2 gap-14">
                      <div className="flex flex-col">
                        <CheckBox
                          name="HR"
                          checked={hrChecked}
                          onChange={handleHrChange}
                          disabled={!isEditMode}
                        />
                        <CheckBox
                          name="Inventory"
                          checked={inventoryChecked}
                          onChange={handleInventoryChange}
                          disabled={!isEditMode}
                        />
                      </div>
                      <div className="flex flex-col">
                        <CheckBox
                          name="Finance"
                          checked={financeChecked}
                          onChange={handleFinanceChange}
                          disabled={!isEditMode}
                        />
                        <CheckBox
                          name="TPIP"
                          checked={tpipChecked}
                          onChange={handleTpipChange}
                          disabled={!isEditMode}
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
                        onClick={handleEdit}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="flex-1 h-[70%] text-center overflow-auto custom-scrollbar hidden lg:flex">
          <div className="m-6 xl:m-10 w-full bg-contain bg-center bg-no-repeat">
            <div className="flex flex-row justify-end rounded mb-4 ">
              <button className="bg-indigo-400 text-sm text-white px-3 py-3 rounded-lg" onClick={null}>Create New Contract

              </button>
              </div>
            <div className="group relative block h-fit bg-slate-200 p-8 rounded">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className="flex flex-row  mb-4">
                    <label className="text-xs mb-1 text-gray-400">
                      Contract Type
                    </label>
                    <select
                      type="contractType"
                      id="contractType"
                      value={contractType}
                      name="contractType"
                      className="w-auto h-6 bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                      required
                      onChange={handleContractTypeChange}
                      disabled={!isEditMode}
                    >
                      <option value="full_time">Full Time</option>
                      <option value="part_time">Part Time</option>
                    </select>
                  </div>
                  <div className="flex flex-row  mb-4">
                    <label className="text-sm text-gray-600">
                      Salary(GHS):
                    </label>
                    <input
                      type="number"
                      className=" w-auto h-6 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      value={salary}
                      onChange={handleSalaryChange}
                    />
                  </div>
                  <div className="flex flex-row  mb-4">
                    <label className="text-sm text-gray-600">Status:</label>
                    <select
                      type="status"
                      id="status"
                      value={status}
                      name="status"
                      className="w-auto h-6 bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                      required
                      onChange={handleStatusChange}
                      disabled={!isEditMode}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              
              <div className="flex flex-col">
              <div className="flex flex-row  mb-4">
                <label className="text-sm text-gray-600">Start Date</label>
                <input
                  type="date"
                  className=" w-auto h-6 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 bg-transparent focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </div>
              <div className="flex flex-row  mb-4">
                <label className="text-sm text-gray-600">End Date</label>
                <input
                  type="date"
                  className=" w-auto h-6 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </div>
            </div>
            
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ManageEmployee);
