import React, { useState } from 'react';
import Modal from '../../../components/layouts/modal_layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ViewExpenseModal = ({ isOpen, onClose, selectedRowData }) => {

  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(selectedRowData.name);
  const [amount, setAmount] = useState(selectedRowData.amount);
  const [description, setDescription] = useState(selectedRowData.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditMode(false);
  };

  const handleDelete = () => {
    console.log("Delete expense");
  }

  const closeModal = () => {
    setIsEditMode(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal header="Detailed View" closeModal={closeModal}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4 mb-4">
          <div className="flex flex-col basis-3/5 mb-4">
            <label className="text-xs mb-1 text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={name}
              onChange={(event) => { event.target.value }}
              disabled={!isEditMode} // Disable input fields in view mode
            />
          </div>

          <div className="flex flex-col basis-2/5 mb-4">
            <label className="text-xs mb-1 text-gray-400">Amount</label>
            <input
              type="number"
              id="amount"
              name="number"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required
              value={amount}
              onChange={(event) => { event.target.value }}
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
            value={description}
            onChange={(event) => { event.target.value }}
            disabled={!isEditMode} // Disable input fields in view mode
          ></textarea>
        </div>

        <div className="flex flex-row justify-end gap-3">
          {!isEditMode && (<button type="reset" className="btn-sm bg-red-500 hover:bg-red-700 rounded text-white font-semibold text-sm py-1 px-4 mt-4" onClick={handleDelete}>
            Delete
            <FontAwesomeIcon icon={faTrash} className="ml-2" />
          </button>)}

          {!isEditMode && (
            <button className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4" onClick={() => setIsEditMode(true)}>
              Edit Expense
            </button>
          )}

          {isEditMode && (
            <button type="submit" className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4">
              Confirm
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default ViewExpenseModal;