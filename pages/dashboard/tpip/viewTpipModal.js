import React, { useState } from "react";
import Modal from "../../../components/layouts/modal_layout";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ViewTPIPModal = ({ isOpen, onClose, selectedRowData }) => {

  const router = useRouter();
  const [name, setName] = useState(selectedRowData.name);
  const [email, setEmail] = useState(selectedRowData.email);
  const [password, setPassword] = useState(selectedRowData.password);
  const [secretKey, setSecretKey] = useState(selectedRowData.secret_key);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting");
  }

  const handleDelete = () => { 
    setIsConfirmingDelete(false)
  }

  const handleEdit = () => { 
    setIsEditMode(false)
  }

  const closeModal = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal header="TPIP Detail View" closeModal={closeModal}>
      <form onSubmit={handleSubmit}>

        <div className="flex flex-col gap-3 mb-3">

          <div className="flex flex-row">
            <div className="flex basis-full flex-col">
              <label className="text-xs mb-1 text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                required
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                  setError("")
                }}
                disabled={!isEditMode} // Disable input fields in view mode
              />
            </div>
          </div>


          <div className="flex flex-row">
            <div className="flex basis-full flex-col">
              <label className="text-xs mb-1 text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
                required // Make the field required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setError("")
                }}
                disabled={!isEditMode} // Disable input fields in view mode
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex basis-full flex-col">
              <label className="text-xs mb-1 text-gray-400">Password</label>
              <input
                type="text"
                id="password"
                placeholder="password"
                className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
                required // Make the field required
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  setError("")
                }}
                disabled={!isEditMode} // Disable input fields in view mode
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex basis-full flex-col">
              <label className="text-xs mb-1 text-gray-400">Password</label>
              <input
                type="text"
                id="secret_key"
                placeholder="secret key"
                className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
                required // Make the field required
                value={secretKey}
                onChange={(event) => {
                  setPassword(event.target.value)
                  setError("")
                }}
                disabled={true}
              />
            </div>
          </div>

        </div>



        {/* error message */}
        {error && (
          <div className='flex flex-row pt-1 text-xs font-semibold justify-center text-red-600'>{error}</div>
        )}

        {/* buttons */}
        {!isLoading && (<div className="flex flex-row justify-end gap-3">
          {!isEditMode && (<button type="reset" className="btn-sm bg-red-500 hover:bg-red-700 rounded text-white font-semibold text-sm py-1 px-4 mt-4" onClick={() => {
            if (!isConfirmingDelete) {
              setIsConfirmingDelete(true);
              return;
            } else {
              handleDelete();
            }
          }}>
            {isConfirmingDelete ? "Confirm Delete" : "Delete"}
            <FontAwesomeIcon icon={faTrash} className="ml-2" />
          </button>)}

          {(!isEditMode && !isConfirmingDelete) && (
            <button className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4" onClick={() => setIsEditMode(true)}>
              Edit Expense
            </button>
          )}

          {(isEditMode && !isConfirmingDelete) && (
            <button type="submit" className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4" onClick={handleEdit}>
              Confirm
            </button>
          )}
        </div>)}

      </form>
    </Modal>
  );
};

export default ViewTPIPModal;
