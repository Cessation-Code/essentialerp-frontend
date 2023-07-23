import React, { useState } from "react";
import Modal from "../../../components/layouts/modal_layout";

const CheckBox = ({ name, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span>{name}</span>
    </label>
  );
};

const SelectOption = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};

const AddEmployeeModal = ({ isOpen, onClose }) => {
  const [hrChecked, setHrChecked] = useState(false);
  const [inventoryChecked, setInventoryChecked] = useState(false);
  const [financeChecked, setFinanceChecked] = useState(false);
  const [tpipChecked, setTpipChecked] = useState(false);
  const [contractType, setContractType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contractTypes = [
    { value: "full_time", label: "Full Time" },
    { value: "part_time", label: "Part Time" },
  ];

  const statusOptions = ["active", "inactive"];

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

  const closeModal = () => {
    setIsEditMode(false);
    onClose();
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleConfirm = () => {
    // Placeholder logic for handleConfirm.
    // You can add your specific logic here, such as form submission, API calls, etc.
    // For now, let's just log a message and close the modal.
    console.log("Form submitted successfully!");
    closeModal();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal header={"Add New Employee"} onClose={closeModal}>
      <form onSubmit={null}>
        {/*First Row */}
        <div className="flex flex-row gap-2 mb-2">
          <div className="flex flex-col basis-2/3 mb-2">
            <label className="text-xs mb-1 text-gray-400">First Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              // onChange={(event) => {
              //   setName(event.target.value);
              //   setError("");
              // }}
            />
          </div>
          <div className="flex flex-col basis-2/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">Last Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              // onChange={(event) => {
              //   setName(event.target.value);
              //   setError("");
              // }}
            />
          </div>
          <div className="flex flex-col basis-1/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">Phone Number</label>
            <input
              type="number"
              id="number"
              placeholder="+233"
              name="Phone"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required // Make the field required

              // onChange={(event) => {
              //   setAmount(event.target.value);
              //   setError("");
              // }}
            />
          </div>
          {/*Second Row */}
        </div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="flex flex-col basis-2/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required

              // onChange={(event) => {
              //   setName(event.target.value);
              //   setError("");
              // }}
            />
          </div>
          <div className="flex flex-col basis-2/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required

              // onChange={(event) => {
              //   setName(event.target.value);
              //   setError("");
              // }}
            />
          </div>
        </div>
        {/*Third Row */}
        <div className="flex flex-col">
          <h2>Portal Access</h2>
          <div className="flex flex-row justify-between">
            <CheckBox name="HR" checked={hrChecked} onChange={handleHrChange} />
            <CheckBox
              name="Inventory"
              checked={inventoryChecked}
              onChange={handleInventoryChange}
            />

            <CheckBox
              name="Finance"
              checked={financeChecked}
              onChange={handleFinanceChange}
            />
            <CheckBox
              name="TPIP"
              checked={tpipChecked}
              onChange={handleTpipChange}
            />
          </div>
        </div>

        {/*Fourth Row */}
        
        <div className="flex mt-4 flex-col ">
        <h2 className=" font-bold">Contract Details</h2>  
        <div className="flex flex-row gap-5  justify-between">
          <div className=" ">
            <label className="text-sm  text-gray-600">
              Contract Type
            </label>
            <select
              className="block w-36 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={contractType}
              onChange={handleContractTypeChange}
            >
              <option value="">Select Type</option>
              {contractTypes.map((option) => (
                <SelectOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </select>
          </div>
          <div className="">
            <label className="text-sm text-gray-600">Start Date</label>
            <input
              type="date"
              className="block w-36 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">End Date</label>
            <input
              type="date"
              className="block w-36 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
        <div className="flex flex-row mt-4 gap-4">
          <div className="flex flex-row">
            <label className="text-sm text-gray-600">Salary:</label>
            <input
              type="number"
              className="block full mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={salary}
              onChange={handleSalaryChange}
            />
          </div>
          <div className="flex flex-row">
            <label className="text-sm text-gray-600">Status:</label>
            <select
              className="block w-44 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="">Select Status</option>
              {statusOptions.map((option) => (
                <SelectOption key={option} value={option} label={option} />
              ))}
            </select>
          </div>
        </div>

        {/*Fifth Row */}
        <div className="flex flex-col my-4">
          <label className="text-xs text-gray-400">Description</label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
            placeholder="Enter your description..."
            required // Make the field required

            // onChange={(event) => {
            //   setDescription(event.target.value);
            //   setError("");
            // }}
          ></textarea>
        </div>
        </div>
      </form>

      {/*Action Buttons Row */}
      <div className="flex flex-row ">
        {/* <div className="flex basis-3/5 justify-start text-xs text-red-500 mt-5">
          {error && <p>{error}</p>}
        </div> */}
        {/*
         */}
        <div className="flex flex-auto justify-end gap-2">
          {isLoading ? null : (
            <div className="flex flex-row">
              <button
                type="reset"
                onClick={handleCancel}
                className="bg-transparent text-black text-sm py-1 px-4 mt-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleConfirm}
                className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;
