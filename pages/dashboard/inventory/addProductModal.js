import React, { useState, useEffect } from 'react';
import ModalLayout from '../../../components/layouts/modal_layout';
import { useRouter } from 'next/router';

function addProductModal({ isOpen, onClose }) {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const productData = {
            name: name,
            price: price,
            description: description,
            stock: stock
        }
        if (!name || !price || !description || !stock) {
            setError("Please fill all fields!");
        }
        else {
            setIsLoading(true);
            // create product
            try {
                const response = await fetch("https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/product/createProduct", {
                    method: "POST",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(productData),
                });
                if (response.ok) {
                    console.log("Expense created successfully!");
                    setName("");
                    setPrice("");
                    setStock("");
                    setDescription("");
                    onClose();
                    setIsLoading(false);
                    setError("");
                    router.reload();
                } else if (response.status == 400){
                    setIsLoading(false);
                    setError("Make sure all fields are filled! or check if product name already exists");
                }
                else {
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
        setPrice("");
        setStock("");
        setDescription("");
        setError("");
        onClose();
    }

    if (!isOpen) {
        return null;
    }

    return (
        <ModalLayout header={'Add Product'} closeModal={closeModal}>
            {/* Form */}
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row gap-2">
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
                            Price
                        </label>
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
                        onChange={(event) => {setStock(event.target.value)}}
                    />
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

export default addProductModal;
