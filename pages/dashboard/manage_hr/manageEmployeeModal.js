import React, { useState, useEffect } from "react";
import Modal from "../../../components/layouts/modal_layout";
import { CheckBox, SelectOption } from "./addEmployeeModal";

const ManageEmployeeModal = ({ isOpen, onClose, selectedRowData }) => {
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Populate the modal with the selectedRowData when it changes
    if (selectedRowData) {
      setFirstName(selectedRowData.firstName || "");
      setLastName(selectedRowData.lastName || "");
      setEmail(selectedRowData.email || "");
      setPhone(selectedRowData.phone || "");
      setPassword(selectedRowData.password || "");
      setHrChecked(selectedRowData.department?.includes("HR") || false);
      setInventoryChecked(
        selectedRowData.department?.includes("Inventory") || false
      );
      setFinanceChecked(
        selectedRowData.department?.includes("Finance") || false
      );
      setTpipChecked(selectedRowData.department?.includes("TPIP") || false);
      setContractType(selectedRowData.contractType || "");
      setStartDate(selectedRowData.startDate || "");
      setEndDate(selectedRowData.endDate || "");
      setSalary(selectedRowData.salary || "");
      setStatus(selectedRowData.status || "");
    }
  }, [selectedRowData]);

  const contractTypes = [
    { value: "full_time", label: "Full Time" },
    { value: "part_time", label: "Part Time" },
  ];

  const statusOptions = ["active", "inactive"];
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

  if (!isOpen || !selectedRowData) {
    return null;
  }

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    // If in edit mode, discard changes and switch back to view mode
    if (isEditMode) {
      setIsEditMode(false);
      closeModal();
    } else {
      // If not in edit mode, simply close the modal
      closeModal();
    }
  };

  const handleSave = () => {
    // Implement your logic to save the edited data here
    console.log("Data saved successfully!");
    setIsEditMode(false);
    closeModal();
  };

  const closeModal = () => {
    setIsEditMode(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      header={isEditMode ? "Edit Employee" : "View Employee"}
      closeModal={closeModal}
    >
      <form onSubmit={null}>
        {/*First Row */}
        <div className="flex flex-row gap-2 mb-2">
          <div className="flex flex-col basis-1/3 mb-2">
            <label className="text-xs mb-1 text-gray-400">First Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={firstName}
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="flex flex-col basis-1/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">Last Name</label>
            <input
              type="text"
              id="name"
              value={lastName}
              name="name"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              onChange={handleLastNameChange}
            />
          </div>
          <div className="flex flex-col basis-1/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">Phone Number</label>
            <input
              type="text"
              id="number"
              placeholder="+233"
              name="Phone"
              value={phone}
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required // Make the field required
              onChange={handlePhoneChange}
            />
          </div>
          {/*Second Row */}
        </div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="flex flex-col basis-1/2 mb-4">
            <label className="text-xs mb-1 text-gray-400">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col basis-1/2 mb-4">
            <label className="text-xs mb-1 text-gray-400">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              onChange={handlePasswordChange}
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
            <div className="flex flex-col basis-1/3">
              <label className="text-sm  text-gray-600">Contract Type</label>
              <select
                className="block  mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <div className="flex flex-col basis-1/3">
              <label className="text-sm text-gray-600">Start Date</label>
              <input
                type="date"
                className="block  mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="flex flex-col basis-1/3">
              <label className="text-sm text-gray-600">End Date</label>
              <input
                type="date"
                className="block  mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>
          <div class="flex flex-row mt-4 gap-3">
            <div class="flex flex-row  basis-1/2">
              <label class="text-sm text-gray-600">Salary:&nbsp;</label>
              <input
                type="number"
                className="border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={salary}
                onChange={handleSalaryChange}
              />
            </div>
            <div class="flex flex-row  basis-1/2">
              <label class="text-sm text-gray-600">Status:&nbsp;</label>
              <select
                className="border w-full rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              // onChange={handleDescriptionChange} // Need to come back to this.
            ></textarea>
          </div>
        </div>
      </form>

      {/* Action Buttons Row */}
      <div className="flex flex-row">
        <div className="flex basis-2/5 justify-start text-xs text-red-500 mt-5"></div>
        <div className="flex flex-auto justify-end gap-2">
          {isLoading ? null : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-transparent text-black text-sm py-1 px-4 mt-4"
              >
                Cancel
              </button>
              {isEditMode ? (
                <>
                  <button
                    type="submit"
                    onClick={handleSave}
                    className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
                  >
                    Save
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleEdit}
                  className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
                >
                  Edit
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ManageEmployeeModal;
