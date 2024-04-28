import React, { useState, useEffect } from 'react';
import ModalLayout from '../../../components/layouts/modal_layout';
import { useRouter } from 'next/router';
import PropTypes from "prop-types";

function AddExpenseModal({ isOpen, onClose }) {

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleSubmit = async (event) => {

    const expenseData = {
      name: name,
      amount: amount,
      description: description
    }

    event.preventDefault();

    if (!name || !amount || !description) {
      setError("Please fill all fields!");
    }
    else {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/api/v1/expense/createExpense`, {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(expenseData),
        });
        if (response.ok) {
          console.log("Expense created successfully!");
          setName("");
          setAmount("");
          setDescription("");
          onClose();
          setIsLoading(false);
          setError("");
          window.location.hash = '#expenses'
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
  }

  const closeModal = async (event) => {
    event.preventDefault();
    console.log("Modal Cancelled")
    setName("");
    setAmount("");
    setDescription("");
    setError("");
    onClose();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <ModalLayout header={'Expenses'} closeModal={closeModal}>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-2 mb-4">

          <div className="flex flex-col basis-2/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value)
                setError("")
              }}
            />
          </div>

          <div className="flex flex-col basis-1/3 mb-4">
            <label className="text-xs mb-1 text-gray-400">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="GHC"
              name="number"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required // Make the field required
              value={amount}
              onChange={(event) => {
                setAmount(event.target.value)
                setError("")
              }}
            />
          </div>

        </div>

        <div className="flex flex-col mb-4">
          <label className="text-xs text-gray-400">
            Description
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
            placeholder="Enter your description..."
            required // Make the field required
            value={description}
            onChange={(event) => {
              setDescription(event.target.value)
              setError("")
            }}
          ></textarea>
        </div >
      </form>

      <div className="flex flex-row">
        <div className="flex basis-3/5 justify-start text-xs text-red-500 mt-5">
          {error && <p>{error}</p>}
        </div>
        <div className="flex basis-2/5 justify-end">
          {isLoading ? (null) :
            (<div className='flex flex-row'>
              <button type="reset" className="bg-transparent text-black text-sm py-1 px-4 mt-4" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4" onClick={handleSubmit}>
                Confirm
              </button>
            </div>)}
        </div>
      </div>

    </ModalLayout>
  );
}

AddExpenseModal.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AddExpenseModal;
