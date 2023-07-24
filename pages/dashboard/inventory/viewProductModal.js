import React, { useState } from 'react';
import Modal from '../../../components/layouts/modal_layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';

const ViewProductModal = ({ isOpen, onClose, selectedRowData }) => {

    const router = useRouter();
    const [isEditMode, setIsEditMode] = useState(false);
    const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
    const [name, setName] = useState(selectedRowData.name);
    const [price, setPrice] = useState(selectedRowData.price);
    const [stock, setStock] = useState(selectedRowData.stock);
    const [description, setDescription] = useState(selectedRowData.description);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEditMode(false);
    };

    async function handleDelete() {
        // delete expense
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/v1/expense/deleteProduct', {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    _id: selectedRowData._id
                })
            })
            if (response.ok) {
                closeModal();
                setIsLoading(false);
                setIsConfirmingDelete(false)
                setError("");
                router.reload();
            } else {
                setIsLoading(false);
                setIsConfirmingDelete(false)
                setError("Something went wrong, please try again!");
            }
        } catch (error) {
            setIsLoading(false);
            setError("Something went wrong, please try again!");
            setIsConfirmingDelete(false)
        }
    }

    async function handleEdit() {
        // edit expense
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/v1/product/editProduct', {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    _id: selectedRowData._id,
                    name: name,
                    stock: stock,
                    price: price,
                    description: description
                })
            })
            if (response.ok) {
                closeModal();
                setIsLoading(false);
                setError("");
                router.reload();
            } else {
                setIsLoading(false);
                setError("Something went wrong, please try again!");
            }
        } catch (error) {
            setIsLoading(false);
            setError("Something went wrong, please try again!");
            setIsEditMode(false)
        }
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
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col basis-3/5 mb-4">
                        <label className="text-xs mb-1 text-gray-400">Name</label>
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
                            disabled={!isEditMode} // Disable input fields in view mode
                        />
                    </div>

                    <div className="flex flex-col basis-2/5 mb-4">
                        <label className="text-xs mb-1 text-gray-400">Price (GHS)</label>
                        <input
                            type="number"
                            id="amount"
                            placeholder="GHC"
                            name="number"
                            className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
                            required // Make the field required
                            value={price}
                            onChange={(event) => {
                                setPrice(event.target.value)
                                setError("")
                            }}
                            disabled={!isEditMode} // Disable input fields in view mode
                        />
                    </div>
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-xs mb-1 text-gray-400">Stock</label>
                    <input
                        type="number"
                        id="amount"
                        className='w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out'
                        required // Make the field required
                        value={stock}
                        onChange={(event) => { setStock(event.target.value) }}
                        disabled={!isEditMode} // Disable input fields in view mode
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-xs text-gray-400">Description</label>
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
                        disabled={!isEditMode} // Disable input fields in view mode
                    ></textarea>
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
                            // handleDelete();
                            setIsConfirmingDelete(false);
                        }
                    }}>
                        {isConfirmingDelete ? "Confirm Delete" : "Delete"}
                        <FontAwesomeIcon icon={faTrash} className="ml-2" />
                    </button>)}

                    {(!isEditMode && !isConfirmingDelete) && (
                        <button className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4" onClick={() => setIsEditMode(true)}>
                            Edit Product
                        </button>
                    )}

                    {(isEditMode && !isConfirmingDelete) && (
                        <button type="submit" className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4" onClick={() => {
                            handleEdit()
                            // setIsEditMode(false);
                        }}>
                            Confirm
                        </button>
                    )}
                </div>)}

            </form>
        </Modal>
    );
};

export default ViewProductModal;