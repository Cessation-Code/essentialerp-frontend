import React, { useState, useEffect } from "react";
import ModalLayout from "../../../components/layouts/modal_layout";
import { useRouter } from "next/router";

function AddContractModal({ isOpen, onClose }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [contractType, setContractType] = useState("");
  const [Salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const NewContractDetails = {
      contractType: contractType,
      salary: Salary,
      status: status,
      startDate: startDate,
      endDate: endDate
    };
    if (!contractType ||!Salary || !status || !startDate || !endDate) {
      setError("Please fill all fields!");
    } else {
      setIsLoading(true);
      // create product
      try {
        const response = await fetch(
          "https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/product/createProduct",  //edit this fetch link accordingly and other parts of this function. i was playing with the edits to not have errors at my side
          {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(NewContractDetails),
          }
        );
        if (response.ok) {
          console.log("Expense created successfully!");
          setContractType("");
          setSalary("");
          setStatus("");
          setStartDate("");
          setEndDate("");
          onClose();
          setIsLoading(false);
          setError("");
          router.reload();
        } else {
          setIsLoading(false);
          setError("An Error Occured whiles creating expense!");
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setError(error);
      }
    }
  };

  const closeModal = async (event) => {
    event.preventDefault();
    console.log("Modal Cancelled");
   setContractType("")
   setSalary("")
   setStatus("")
   setStartDate("")
   setEndDate("")
    setError("");
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalLayout header={"Add New Contract"} closeModal={closeModal}>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col basis-2/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">Contract Type</label>
            <input
              type="text"
              id="contractType"
              name="contractType"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={contractType}
              onChange={(event) => {
                setContractType(event.target.value);
                setError("");
              }}
            />
          </div>
          <div className="flex flex-col basis-1/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
                className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={Salary}
              onChange={(event) => {
                setSalary(event.target.value);
                setError("");
              }}
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
            <label className="text-xs mb-1 text-gray-400">Status</label>
            <input
              type="text"
              id="status"
              name="status"
                className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={status}
              onChange={(event) => {
                setStatus(event.target.value);
                setError("");
              }}
            />
        </div>

        <div className="flex flex-col mb-4">
            <label className="text-xs mb-1 text-gray-400">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
                className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={startDate}
              onChange={(event) => {
                setStartDate(event.target.value);
                setError("");
              }}
            />
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-xs mb-1 text-gray-400">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
                className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={startDate}
              onChange={(event) => {
                setStartDate(event.target.value);
                setError("");
              }}
            />
        </div>
      </form>

      <div className="flex flex-row">
        <div className="flex basis-3/5 justify-start text-xs text-red-500 mt-5">
          {error && <p>{error}</p>}
        </div>
        <div className="flex basis-2/5 justify-end">
          {isLoading ? null : (
            <div className="flex flex-row">
              <button
                type="reset"
                className="bg-transparent text-black text-sm py-1 px-4 mt-4"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </ModalLayout>
  );
}

export default AddContractModal;
