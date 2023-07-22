import React from "react";
import Modal from "../../../components/layouts/modal_layout";

const ViewTPIPModal = ({ onClose, selectedRowData }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <Modal header="TPIP Detail View">
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="flex flex-row gap-1 mb-4">
          <div className="flex flex-col basis-1/2 mb-4">
            <label className="text-xs mb-1 text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-64 h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={selectedRowData.name}
              disabled
            />
          </div>

          <div className="flex flex-col basis-1/4 mb-4">
            <label className="text-xs mb-1 text-gray-400">Amount</label>
            <input
              type="number"
              id="amount"
              name="number"
              className="w-28 h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required
              value={selectedRowData.amount}
              disabled
            />
          </div>
          <div className="flex flex-col basis-1/4 mb-4">
            <label className="text-xs mb-1 text-gray-400">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-28 h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required
              value={selectedRowData.date}
              disabled
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-xs text-gray-400">Description</label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
            required
            value={selectedRowData.category}
            disabled
          ></textarea>
        </div>

        <div className="flex flex-row justify-end gap-3">
          <button
            type="button"
            className="bg-gray-500 rounded text-black py-1 px-4 mt-4"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ViewTPIPModal;
