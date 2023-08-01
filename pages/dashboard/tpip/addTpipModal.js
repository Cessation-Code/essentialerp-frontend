import React, { useState, useEffect } from 'react';
import ModalLayout from '../../../components/layouts/modal_layout';
import { useRouter } from 'next/router';

function AddTPIPModal({ isOpen, onClose }) {

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret_key, setSecret_key] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {

    const tpipData = {
      name: name,
      email: email,
      password: password
    }

    event.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill all fields!");
      setIsLoading(false);
    } else {
      setIsLoading(true);
      // create tpip
      try {
        // const response = await fetch("https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/auth/creatTPIP", {
        const response = await fetch("http://localhost:8000/api/v1/auth_tpip/createTPIP", {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(tpipData),
        });
        if (response.ok) {
          setName("");
          setEmail("");
          setPassword("");
          setSecret_key("")
          onClose();
          setIsLoading(false);
          setError("");
          router.reload();
        } else {
          setIsLoading(false);
          setError("An Error Occured whiles creating TPIP!");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(error);
      }
    }
  }

  const closeModal = async (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setError("");
    setIsLoading(false)
    onClose();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <ModalLayout header="TPIP" closeModal={closeModal}>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-2">

          <div className="flex flex-col basis-1/2 mb-4">
            <label className="text-xs mb-1 text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="name"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value)
                setError("")
              }}
            />
          </div>

          <div className="flex flex-col basis-1/2 mb-4">
            <label className="text-xs mb-1 text-gray-400">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="email"
              className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
              required // Make the field required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError("")
              }}
            />
          </div>

        </div>
        <div className='flex flex-row'>
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
            />
          </div>
        </div>
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

export default AddTPIPModal;
