import React, { useState } from "react";
import withAuth from "../../../components/withAuth";
import { CheckBox } from "./addEmployeeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const ManageEmployee = ({ selectedRowData }) => {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [Error, setError] = useState("");
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
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data here, e.g., make an API call
    console.log("Form submitted!");
    // Reset form fields if needed
    resetFormFields();
  };

  // Function to handle form field changes
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

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Function to handle form cancel
  const handleCancel = () => {
    // Reset form fields and exit edit mode
    resetFormFields();
    setIsEditMode(false);
  };

  // Function to handle form edit
  const handleEdit = () => {
    setIsEditMode(true);
  };

  // Function to reset form fields
  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setHrChecked(false);
    setInventoryChecked(false);
    setFinanceChecked(false);
    setTpipChecked(false);
    setContractType("");
    setStartDate("");
    setEndDate("");
    setSalary("");
    setStatus("");
    setDescription("");
  };

  return (
    <div className="h-full bg-gray-100 text-gray-900 flex justify-center ">
      <div className="max-w-screen-2xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 ">
          <div className="flex flex-col item-center h-[40%] mt-6 justify-center">
            <FontAwesomeIcon icon={faUserAlt} fontSize={"250px"} />
            <div className="mt-4">
              <h2 className="text-center  text-bold">Edem Koranteng</h2>
              <h2 className="text-center text-gray-500">Accountant</h2>
            </div>
            <div className="divider"></div>
          </div>
          <div className="flex flex-col justify-evenly h-[60%]">
            <div className=" flex flex-row mt-6 ">
              <label className="">Contract Type</label>
              <select
                id="contract_type"
                name="contract_type"
                className="w-full h-8 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                required
                value={contractType}
                onChange={(event) => {
                  setContractType(event.target.value);
                  setError("");
                }}
              >
                <option value="" disabled></option>
                <option value="cash">Part Time</option>
                <option value="momo">FUll TIme</option>
                {/* Add more payment methods as needed */}
              </select>
            </div>
            <div className=" flex mt-6 ">
              <label className="">Salary</label>
              <input
                type="number"
                id="salary"
                name="salary"
                className="w-[90%] h-8 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                required
                value={salary}
                onChange={(event) => {
                  setSalary(event.target.value);
                  setError("");
                }}
              />
            </div>
            <div className=" flex mt-6 ">
              <label className="text-sm text-gray-600">Start Date</label>
              <input
                type="date"
                className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className=" flex mt-6 ">
              <label className="text-sm text-gray-600">End Date</label>
              <input
                type="date"
                className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mt-6">
                Portal Access
              </label>
              <div className="flex flex-row justify-between">
                <CheckBox
                  name="HR"
                  checked={hrChecked}
                  onChange={(event) => {
                    setHrChecked(event.target.checked);
                  }}
                />
                <CheckBox
                  name="Inventory"
                  checked={inventoryChecked}
                  onChange={(event) => {
                    setInventoryChecked(event.target.checked);
                  }}
                />
                <CheckBox
                  name="Finance"
                  checked={financeChecked}
                  onChange={(event) => {
                    setFinanceChecked(event.target.checked);
                  }}
                />
                <CheckBox
                  name="TPIP"
                  checked={tpipChecked}
                  onChange={(event) => {
                    setTpipChecked(event.target.checked);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="flex-1  text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 mt-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Set Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    @essentialerp.company_a/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="employee_a"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 mt-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Set Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="password"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="some_secure_combo"
                  />
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
{
  /* 
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information#
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      autoComplete="phone"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 mt-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      @essentialerp.company_a/
                    </span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="employee_a"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4 mt-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set Password
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="password"
                      id="password"
                      autoComplete="password"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="some_secure_combo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Contract Details and Permissions
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Set the contract type, duration, status and permissions that
                this employee has.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="contract-type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contract Type
                  </label>
                  <div className="">
                    <select
                      id="contract-type"
                      name="contract-type"
                      autoComplete="contract-type"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option className="px-2">Part-time</option>
                      <option className="px-2">Full-time</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="sm:col-span-3">
                    <label className="text-sm text-gray-600">Salary:</label>
                    <input
                      type="number"
                      className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      value={startDate}
                      onChange={handleSalaryChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="text-sm text-gray-600">Start Date</label>
                  <input
                    type="date"
                    className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="text-sm text-gray-600">End Date</label>
                  <input
                    type="date"
                    className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </div>
              </div>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Portal Access
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900"
                        >
                          HR
                        </label>
                        <p className="text-gray-500">
                          Has access to the HR tab and every other fields in it.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-900"
                        >
                          Inventory
                        </label>
                        <p className="text-gray-500">
                          Has access to the Inventory tab and every other fields
                          in it.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-900"
                        >
                          Finances
                        </label>
                        <p className="text-gray-500">
                          Has access to the Finances tab and every other fields
                          in it.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
</form> */
}

// <form onSubmit={handleSubmit}>
//           {/* First Row */}
//           <div className="flex flex-row gap-2 mb-2">
//             <div className="flex flex-col basis-1/3 mb-2">
//               <label className="text-xs mb-1 text-gray-400">First Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={firstName}
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handleFirstNameChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//             <div className="flex flex-col basis-1/3 mb-4">
//               <label className="text-xs mb-1 text-gray-400">Last Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={lastName}
//                 name="name"
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handleLastNameChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//             <div className="flex flex-col basis-1/3 mb-4">
//               <label className="text-xs mb-1 text-gray-400">Phone Number</label>
//               <input
//                 type="text"
//                 id="number"
//                 placeholder="+233"
//                 name="Phone"
//                 value={phone}
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handlePhoneChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//           </div>

//           {/* Second Row */}
//           <div className="flex flex-row gap-2 mb-4">
//             <div className="flex flex-col basis-1/2 mb-4">
//               <label className="text-xs mb-1 text-gray-400">E-mail</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 name="email"
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handleEmailChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//             <div className="flex flex-col basis-1/2 mb-4">
//               <label className="text-xs mb-1 text-gray-400">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handlePasswordChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//           </div>

//           {/* Third Row */}
//           <div className="flex flex-col">
//             <h2>Portal Access</h2>
//             <div className="flex flex-row justify-between">
//               <CheckBox
//                 name="HR"
//                 checked={hrChecked}
//                 onChange={handleHrChange}
//                 disabled={!isEditMode}
//               />
//               <CheckBox
//                 name="Inventory"
//                 checked={inventoryChecked}
//                 onChange={handleInventoryChange}
//                 disabled={!isEditMode}
//               />
//               <CheckBox
//                 name="Finance"
//                 checked={financeChecked}
//                 onChange={handleFinanceChange}
//                 disabled={!isEditMode}
//               />
//               <CheckBox
//                 name="TPIP"
//                 checked={tpipChecked}
//                 onChange={handleTpipChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//           </div>

//           {/* Fourth Row */}
//           <div className="flex mt-4 flex-col">
//             <h2 className="font-bold">Contract Details</h2>
//             <div className="flex flex-row gap-5 justify-between">
//               <div className="flex flex-col basis-1/3">
//                 <label className="text-sm text-gray-600">Contract Type</label>
//                 <select
//                   className="block mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={contractType}
//                   onChange={handleContractTypeChange}
//                   disabled={!isEditMode}
//                 >
//                   <option value="">Select Type</option>
//                   {/* Add contract types as needed */}
//                 </select>
//               </div>
//               <div className="flex flex-col basis-1/3">
//                 <label className="text-sm text-gray-600">Start Date</label>
//                 <input
//                   type="date"
//                   className="block mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={startDate}
//                   onChange={handleStartDateChange}
//                   disabled={!isEditMode}
//                 />
//               </div>
//               <div className="flex flex-col basis-1/3">
//                 <label className="text-sm text-gray-600">End Date</label>
//                 <input
//                   type="date"
//                   className="block mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={endDate}
//                   onChange={handleEndDateChange}
//                   disabled={!isEditMode}
//                 />
//               </div>
//             </div>
//             <div class="flex flex-row mt-4 gap-3">
//               <div class="flex flex-row basis-1/2">
//                 <label class="text-sm text-gray-600">Salary:&nbsp;</label>
//                 <input
//                   type="number"
//                   className="border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={salary}
//                   onChange={handleSalaryChange}
//                   disabled={!isEditMode}
//                 />
//               </div>
//               <div class="flex flex-row basis-1/2">
//                 <label class="text-sm text-gray-600">Status:&nbsp;</label>
//                 <select
//                   className="border w-full rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={status}
//                   onChange={handleStatusChange}
//                   disabled={!isEditMode}
//                 >
//                   <option value="">Select Status</option>
//                   {/* Add status options as needed */}
//                 </select>
//               </div>
//             </div>

//             {/* Fifth Row */}
//             <div className="flex flex-col my-4">
//               <label className="text-xs text-gray-400">Description</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 placeholder="Enter your description..."
//                 required
//                 onChange={handleDescriptionChange}
//                 disabled={!isEditMode}
//               ></textarea>
//             </div>
//           </div>

//           {/* Action Buttons Row */}
//           <div className="flex flex-row">
//             <div className="flex basis-2/5 justify-start text-xs text-red-500 mt-5"></div>
//             <div className="flex flex-auto justify-end gap-2">
//               {isLoading ? null : (
//                 <div className="flex flex-row">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="bg-transparent text-black text-sm py-1 px-4 mt-4"
//                   >
//                     Cancel
//                   </button>
//                   {isEditMode ? (
//                     <>
//                       <button
//                         type="submit"
//                         className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
//                       >
//                         Save
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       type="button"
//                       onClick={handleEdit}
//                       className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
//                     >
//                       Edit
//                     </button>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </form>
