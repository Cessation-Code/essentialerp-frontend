import React, { useState } from "react";
import withAuth from "../../../components/withAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AddContractModal from "./AddContract";
import ChangePasswordModal from "./changePasswordModal";

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
  const [error, setError] = useState("");
  const [isAddContractModalOpen, setIsAddContractModalOpen] = useState(false);
  const [IsChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});
  const [success, setSuccess] = useState("");


  const CheckBox = ({ name, checked, onChange, disabled }) => {
    return (
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="form-checkbox h-5 w-5 text-gray-600 bg-transparent"
          disabled={disabled}
        />
        <span>{name}</span>
      </label>
    );
  };


  async function handleSubmit(event){
    event.preventDefault();
    setIsLoading(true);
    try{
      const resopnse = await fetch(`https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/employee/updateEmployee`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          _id: selectedRowData._id,
          first_name: firstName,
          last_name: lastName,
          phone_number_1: phone,
          email: email,
          hr_management: hrChecked,
          inventory: inventoryChecked,
          finance: financeChecked,
          tpip: tpipChecked,
        }),
      });
      if (resopnse.ok) {
        setIsLoading(false);
        setSuccess("Employee Updated Successfully");
        setIsEditMode(false)
        console.log(isLoading)
      }else{
        setIsLoading(false);
        setError("An Error Occured");
        setIsEditMode(false)
      }
    }catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("An Error Occured");
      setIsEditMode(false)

    }


  };



  const contracts = [
    {
      start_date: "2023-08-01",
      end_date: "2023-12-31",
      type: "Full-time",
      salary: 50000,
      status: "Active",
    },
    {
      start_date: "2023-09-15",
      end_date: "2024-09-14",
      type: "Part-time",
      salary: 30000,
      status: "Active",
    },
    {
      start_date: "2023-07-01",
      end_date: "2024-06-30",
      type: "Contract",
      salary: 60000,
      status: "Inactive",
    },
    {
      start_date: "2023-08-01",
      end_date: "2023-12-31",
      type: "Full-time",
      salary: 50000,
      status: "Active",
    },
    {
      start_date: "2023-09-15",
      end_date: "2024-09-14",
      type: "Part-time",
      salary: 30000,
      status: "Active",
    },
    {
      start_date: "2023-07-01",
      end_date: "2024-06-30",
      type: "Contract",
      salary: 60000,
      status: "Inactive",
    },
    // Add more contract objects as needed
  ];



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

  useEffect(() => {
    const queryParams = router.query;
    if (queryParams && queryParams.selectedRowData) {
      try {
        const selectedRowData = JSON.parse(queryParams.selectedRowData);
        console.log("selectedRowData:", selectedRowData);
        setSelectedRowData(selectedRowData);
        setFirstName(selectedRowData.first_name);
        setLastName(selectedRowData.last_name);
        setPhone(selectedRowData.phone_number_1);
        setEmail(selectedRowData.email);
        setPassword(selectedRowData.password);
        setHrChecked(selectedRowData.hr_management);
        setInventoryChecked(selectedRowData.inventory);
        setFinanceChecked(selectedRowData.finance);
        setTpipChecked(selectedRowData.tpip);
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

  const openAddContractModal = () => {
    setIsAddContractModalOpen(true);
  };

  const closeAddContractModal = () => {
    setIsAddContractModalOpen(false);
  };

  const openChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  }

  const closeChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
  }

  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <div className="flex flex-row h-full bg-transparent content-around">

      <div className="flex flex-col basis-1/2 p-10 lg:p-20">

        <div className="flex flex-col item-center h-[30%] mt-6 justify-center">
          <FontAwesomeIcon icon={faUserAlt} className="text-[8vh]" />
          <div className="text-center text-bold">
            {firstName}&nbsp;{lastName}
          </div>
          <div className="divider"></div>
        </div>

        <div className="flex flex-col justify-evenly">
          <form onSubmit={handleSubmit}>

            {/* First Row */}
            <div className="flex flex-row gap-3 justify-between">
              <div className="flex flex-col basis-1/2">
                <label className="text-xs text-gray-400">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="name"
                  value={firstName}
                  className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                  required
                  onChange={handleFirstNameChange}
                  disabled={!isEditMode}
                />
              </div>

              <div className="flex flex-col basis-1/2 ">
                <label className="text-xs text-gray-400">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  name="name"
                  className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                  required
                  onChange={handleLastNameChange}
                  disabled={!isEditMode}
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-row gap-3 justify-between mt-3">
              <div className="flex flex-col basis-1/2">
                <label className="text-xs text-gray-400">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  placeholder="+233"
                  name="Phone"
                  value={phone}
                  className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
                  required
                  onChange={handlePhoneChange}
                  disabled={!isEditMode}
                />
              </div>

              <div className="flex flex-col basis-1/2">
                <label className="text-xs text-gray-400">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                  required
                  onChange={handleEmailChange}
                  disabled={!isEditMode}
                />
              </div>
            </div>


            {/* Checkboxes */}
            <div className="mt-6">
              <div className="text-sm text-gray-600">
                Portal Access
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col basis-1/2">
                  <CheckBox
                    name="HR"
                    checked={hrChecked}
                    onChange={(event)=>{
                      setHrChecked(event.target.checked)
                    }}
                    disabled={!isEditMode}
                  />
                  <CheckBox
                    name="Inventory"
                    checked={inventoryChecked}
                    onChange={(event)=>{
                      setInventoryChecked(event.target.checked)
                    }}
                    disabled={!isEditMode}
                  />
                </div>

                <div className="flex flex-col basis-1/2">
                  <CheckBox
                    name="Finance"
                    checked={financeChecked}
                    onChange={(event)=>{
                      setFinanceChecked(event.target.checked)
                    }}
                    disabled={!isEditMode}
                  />
                  <CheckBox
                    name="TPIP"
                    checked={tpipChecked}
                    onChange={(event)=>{
                      setTpipChecked(event.target.checked)
                    }}
                    disabled={!isEditMode}
                  />
                </div>
              </div>

              {success && (<div className="flex flex-row-reverse text-green-500 text-xs mt-4 font-semibold">{success}</div>)}
              {error && (<div className="flex flex-row-reverse  text-red-500 text-xs mt-4">{error}</div>)}

              {(!isLoading) && (<div className="mt-6 flex items-center justify-end gap-x-6">
                {(!isEditMode) &&  (<button type='button' className="btn-sm rounded bg-slate-200 hover:scale-110 transition-all" onClick={()=>{
                  openChangePasswordModal()
                }}>
                  Change Password
                </button>)}
                {(isEditMode && !isLoading) ? (
                  // Render the "Save" button when in edit mode
                  <button
                    type="button"
                    className="rounded-md w-16  bg-[#5F5BFF] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5F5BFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
                    onClick={(event)=>{
                      handleSubmit(event)
                      setError('')
                      setSuccess('')
                    }}
                  >
                    Save
                  </button>
                ) : (
                  // Render the "Edit" button when in view mode
                  <button
                    type="button"
                    className="rounded-md w-16 bg-[#5F5BFF] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
                    onClick={()=>{setIsEditMode(true)}}
                  >
                    Edit
                  </button>
                )}
              </div>)}
            </div>
          </form>

        </div>
      </div>

      {/* Add New contract modal */}
      {isAddContractModalOpen && (<AddContractModal isOpen={openAddContractModal} onClose={closeAddContractModal} />)}
      {IsChangePasswordModalOpen && (<ChangePasswordModal onClose={closeChangePasswordModal} employee={selectedRowData._id} />)}

      <div className="divider divider-horizontal"></div>

      {/* Contracts */}
      <div className="flex flex-col basis-1/2 p-10 w-full content-center">

        <div className="flex flex-row-reverse mb-4 w-full">
          <button className="btn-primary text-sm text-white px-2 py-2 rounded-lg" onClick={openAddContractModal}>
            New Contract
          </button>
        </div>

        <div className="container custom-scrollbar overflow-y-scroll h-[70vh] text-sm">
          {contracts.map((contract, index) => (
            <div key={index} className="mb-8">
              <div className=" rounded-xl border p-4 mx-2 bg-slate-100">
                <div className="flex flex-row justify-between gap-3">
                  <div className="flex flex-col basis-1/2">
                    <label className="text-xs text-gray-700">
                      Contract Type
                    </label>
                    <input
                      type="text"
                      value={contract.type}
                      className="w-full px-2 bg-white rounded border"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col basis-1/2">
                    <label className="text-xs text-gray-700">Salary(GHS):</label>
                    <input
                      type="number"
                      className="w-full px-2 bg-white rounded border"
                      value={contract.salary}
                      disabled
                    />
                  </div>
                </div>

                <div className="flex flex-row justify-between gap-3">
                  <div className="flex flex-col basis-1/2">
                    <label className="text-xs text-gray-700">Start Date</label>
                    <input
                      type="date"
                      className="w-full px-2 bg-white rounded border"
                      value={contract.start_date}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col basis-1/2">
                    <label className="text-xs text-gray-700">End Date</label>
                    <input
                      type="date"
                      className="w-full px-2 bg-white rounded border"
                      value={contract.end_date}
                      disabled
                    />
                  </div>
                </div>


                <div className="flex flex-row">
                  <div className="flex flex-col basis-1/2">
                    <label className="text-sm text-gray-700">Status:</label>
                    <input
                      type="text"
                      value={contract.status}
                      className="w-full px-2 bg-white rounded border"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div >
  );
};

export default withAuth(ManageEmployee);
