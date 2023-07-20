import React, { useState } from 'react';
import Modal from '../../../components/layouts/modal_layout';

const ViewExpenseModal = ({ isOpen, onClose, rowData, setSelectedRowData }) => {
    console.log("did this")
    console.log("rowData", rowData);
  const today = new Date().toISOString().split('T')[0];
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the updated rowData details here
    // You can handle the form submission logic based on your requirement
    setIsEditMode(false);
  };

  const closeModal = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal header="Detailed View">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-1 mb-4">
          <div className="flex flex-col basis-1/2 mb-4">
            <label className="text-xs mb-1 text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-72 h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={rowData.name}
              onChange={(event) => {setSelectedRowData({...rowData, name: event.target.value})}}
              disabled={!isEditMode} // Disable input fields in view mode
            />
          </div>

          <div className="flex flex-col basis-1/4 mb-4">
            <label className="text-xs mb-1 text-gray-400">Date</label>
            <input
              type="date"
              id="date"
              name="Date"
              className="w-36 h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              min={today}
              max="2030-12-31"
              required
              value={rowData.date}
              onChange={(event) => {}}
              disabled={!isEditMode} // Disable input fields in view mode
            />
          </div>

          <div className="flex flex-col basis-1/4 mb-4">
            <label className="text-xs mb-1 text-gray-400">Amount</label>
            <input
              type="number"
              id="amount"
            //   placeholder="GHC"
              name="number"
              className="w-28 h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required
              value={rowData.amount}
              onChange={(event) => {}}
              disabled={!isEditMode} // Disable input fields in view mode
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-xs text-gray-400">Description</label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
            // placeholder="Enter your description..."
            required
            value={rowData.description}
            onChange={(event) => {}}
            disabled={!isEditMode} // Disable input fields in view mode
          ></textarea>
        </div>

        <div className="flex flex-row justify-end gap-3">
          {!isEditMode && (
            <button
              type="button"
              className="bg-gray-400 rounded text-black py-1 px-4 mt-4"
              onClick={() => setIsEditMode(true)} // Enable edit mode
            >
              Edit
            </button>
          )}
          <button
            type="button"
            className="bg-gray-500 rounded text-black py-1 px-4 mt-4"
            onClick={closeModal}
          >
            Cancel
          </button>
          {isEditMode && (
            <button
              type="submit"
              className="bg-[#C3A2FA] hover:bg-blue-600 text-white py-1 px-4 rounded mt-4"
            >
              Confirm
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default ViewExpenseModal;
