import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Modal = () => {
  return (
    <div>
      <button className="btn" onClick={() => window.my_modal_1.showModal()}>
        Add Expense
      </button>
      <dialog id="my_modal_1" className="modal w-full">
        <form method="dialog" className="modal-box">
          <div className="flex flex-row  justify-between">
          <h1 className="text-gray-600 text-lg font-bold mb-1  title-font">
            Add a new Expense
          </h1>
          <button className="fill-black h-fit w-fit ">
            x
          </button>
          </div>
          
          <div className="flex flex-row gap-4">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="Date"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="GHC"
              name="number"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Description
            </label>
            <textarea
              id="message"
              name="message"
              
              className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div >
          <div className=" flex flex-row gap-2 justify-end">
          <button className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Cancel
          </button>
          <button  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Confirm
          </button>
          </div>
          <p className="text-xs font-semibold text-gray-790 text-opacity-90 mt-3">
            <FontAwesomeIcon icon={faStickyNote} className="mr-2"/>
           Make sure to check well before finally clicking Confirm.
          </p>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;

