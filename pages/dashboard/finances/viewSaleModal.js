import React from "react";
import Modal from "../../../components/layouts/modal_layout";

const ViewSalesModal = ({ onClose, selectedRowData }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <Modal header="Sale Detail View" closeModal={closeModal}>
      <form onSubmit={(event) => event.preventDefault()}>

        <div className="flex flex-row gap-1 mb-4">
          <div className="flex flex-col basis-3/5 mb-4">
            <label className="text-xs mb-1 text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={selectedRowData.name}
              disabled
            />
          </div>

          <div className="flex flex-col basis-2/5 mb-4">
            <label className="text-xs mb-1 text-gray-400">Amount(GHS)</label>
            <input
              type="number"
              id="amount"
              name="number"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required
              value={selectedRowData.amount}
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
          {/* <button
            type="button"
            className="bg-gray-500 rounded text-black py-1 px-4 mt-4"
            onClick={closeModal}
          >
            Close
          </button> */}
        </div>
      </form>
    </Modal>
  );
};

export default ViewSalesModal;
