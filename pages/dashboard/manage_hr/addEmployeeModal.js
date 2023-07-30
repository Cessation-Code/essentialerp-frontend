import React, { useState } from "react";
import Modal from "../../../components/layouts/modal_layout";
import { useRouter } from "next/router";

export const CheckBox = ({ name, checked, onChange }) => {
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

export const SelectOption = ({ value, label }) => {
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
  const [status, setStatus] = useState("Active");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter()

  const contractTypes = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
  ];

  const closeModal = () => {
    onClose();
  };

  const handleCancel = () => {
    closeModal();
  };

  async function handleSubmit(event) {

    // make end date null if contract type is full time
    if (contractType === "Full Time") {
      setEndDate(null);
    }

    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number_1: phone,
      email: email,
      password: password,
      role: role,
      description: description,
      status: status,
      // contract_type: contractType,
      // start_date: startDate,
      end_date: endDate,
      salary: salary,
      hr_management: hrChecked,
      inventory: inventoryChecked,
      finance: financeChecked,
      tpip: tpipChecked,
    }

    console.log(formData)

    event.preventDefault();
    setIsLoading(true);

    if (!firstName || !lastName || !email || !phone || !role) {
      setError("Please fill all fields");
      setIsLoading(false);
    } else {
      try {
        const response = await fetch("https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/employee/createEmployee", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        });
        // console.log(response)
        if (response.ok) {
          console.log("Employee created successfully!");
          setFirstName("");
          setLastName("");
          setPhone("");
          setEmail("");
          setPassword("");
          setRole("");
          setDescription("");
          setStatus("");
          setContractType("");
          setStartDate("");
          setEndDate("");
          setSalary("");
          setHrChecked(false);
          setInventoryChecked(false);
          setFinanceChecked(false);
          setTpipChecked(false);
          setError("");
          setIsLoading(false);
          closeModal();
          router.reload()
        } else {
          setIsLoading(false);
          setError("An Error Occured whiles creating employee!");
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setError(error);
      }
    }
  }

  if (!isOpen) {
    return null;
  }
  return (
    <Modal header={"Add New Employee"} closeModal={closeModal}>
      <form onSubmit={handleSubmit}>
        {/*First Row */}
        <div className="flex flex-row gap-2 mb-2">
          <div className="flex flex-col basis-1/3">
            <label className="text-xs text-gray-400">First Name</label>
            <input
              type="text"
              id="first_name"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              onChange={(event) => { setFirstName(event.target.value) }}
            />
          </div>
          <div className="flex flex-col basis-1/3">
            <label className="text-xs text-gray-400">Last Name</label>
            <input
              type="text"
              id="last_name"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              onChange={(event) => { setLastName(event.target.value) }}
            />
          </div>
          <div className="flex flex-col basis-1/3 ">
            <label className="text-xs text-gray-400">Phone Number</label>
            <input
              type="number"
              id="number"
              placeholder="+233"
              name="Phone"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required // Make the field required
              onChange={(event) => { setPhone(event.target.value) }}
            />
          </div>
        </div>
        {/*Second Row */}
        <div className="flex flex-row gap-2">
          <div className="flex flex-col basis-1/2">
            <label className="text-xs text-gray-400">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              onChange={(event) => { setEmail(event.target.value) }}
            />
          </div>
          <div className="flex flex-col basis-1/2 mb-4">
            <label className="text-xs text-gray-400">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              onChange={(event) => { setPassword(event.target.value) }}
            />
          </div>
        </div>
        {/*Third Row */}
        <div className="flex flex-col">
          <div className="font-semibold">Portal Access</div>
          <div className="flex flex-row justify-between">
            <CheckBox name="HR" checked={hrChecked} onChange={(event) => {
              setHrChecked(event.target.checked)
            }} />

            <CheckBox
              name="Inventory"
              checked={inventoryChecked}
              onChange={(event) => { setInventoryChecked(event.target.checked) }}
            />

            <CheckBox
              name="Finance"
              checked={financeChecked}
              onChange={(event) => { setFinanceChecked(event.target.checked) }}
            />
            <CheckBox
              name="TPIP"
              checked={tpipChecked}
              onChange={(event) => { setTpipChecked(event.target.checked) }}
            />
          </div>
        </div>

        {/*Fourth Row */}
        <div className="flex mt-4 flex-col mb-2">
          <div className=" font-semibold">Contract Details</div>
          <div className="flex flex-row gap-5  justify-between">
            <div className="flex flex-col basis-1/2">
              <label className="text-xs font-base text-gray-400">Contract Type</label>
              <select
                className="block border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={contractType}
                onChange={(event) => {
                  setContractType(event.target.value)
                }}
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
            {/* <div className="flex flex-col basis-1/3">
              <label className="text-xs font-base text-gray-400">Start Date</label>
              <input
                type="date"
                className="block border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={startDate}
                onChange={(event) => { setStartDate(event.target.value) }}
              />
            </div> */}
            {(contractType !== "Full Time") && (<div className="flex flex-col basis-1/2">
              <label className="text-xs font-base text-gray-400">End Date</label>
              <input
                type="date"
                className="block border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
                value={endDate}
                onChange={(event) => {
                  setEndDate(event.target.value)
                }}
              />
            </div>)}
          </div>

          <div className="flex flex-row mt-4 gap-3">
            <div className="flex flex-col  basis-1/2">
              <label className="text-xs font-base text-gray-400">Salary(GHS):&nbsp;</label>
              <input
                type="number"
                className="border border-black rounded-md px-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={salary}
                onChange={(event) => { setSalary(event.target.value) }}
              />
            </div>
            <div className="flex flex-col basis-1/2">
              <label className="text-xs font-base text-gray-400">Role:&nbsp;</label>
              <input
                className="px-2 border border-black w-full rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={role}
                onChange={(event) => {
                  setRole(event.target.value)
                }}
              />
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
              onChange={(event) => {
                setDescription(event.target.value);
                setError("");
              }}
            ></textarea>
          </div>
        </div>
      </form>

      {/* Error message */}
      {error && (<div className="flex flex-row justify-start text-xs text-red-500 mt-5">
        {error}
      </div>)}

      {/*Action Buttons Row */}
      <div className="flex flex-row gap-4">
        <div className="flex flex-auto justify-end ">
          {isLoading ? null : (
            <div className="flex flex-row ">
              <button
                type="reset"
                onClick={handleCancel}
                className="bg-slate-200 hover:bg-slate-300 text-black mr-2 text-sm py-1 px-4 mt-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#C4D7F8] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
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
