import React, { useState } from "react";
import ModalLayout from "../../../components/layouts/modal_layout";
import { useRouter } from "next/router";
import Link from "next/link";
import finances from "../finances";

const ConfirmAddSale = ({ isOpen, onClose }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [momoNumber, setMomoNumber] = useState("");
  const [stage, setStage] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!description) {
      setError("Please fill in the Notes field!");
    } else if (paymentMethod === "momo" && !momoNumber) {
      setError("Please enter the Momo number!");
    } else {
      setError("");
      setIsLoading(true);

      //   // Create expense
      //   try {
      //     const SalesData = {
      //       paymentMethod: paymentMethod,
      //       description: description,
      //     };

      //     if (paymentMethod === "momo") {
      //       SalesData.momoNumber = momoNumber;
      //     }

      //     const response = await fetch(
      //       "https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/sales/addSales",
      //       {
      //         method: "POST",
      //         headers: {
      //           "Access-Control-Allow-Origin": "*",
      //           "Content-Type": "application/json",
      //           Authorization: `Bearer ${localStorage.getItem("token")}`,
      //         },
      //         body: JSON.stringify(SalesData),
      //       }
      //     );

      //     if (response.ok) {
      //       console.log("Sale created successfully!");
      //       setDescription("");
      //       setMomoNumber("");
      //       setPaymentMethod("");
      //       onClose();
      //       setIsLoading(false);
      //       window.location.hash = "#sales";
      //       router.reload();
      //     } else {
      //       setIsLoading(false);
      //       setError("An Error Occurred while creating the sale!");
      //     }
      //   } catch (error) {
      //     setIsLoading(false);
      //     setError("An Error Occurred while creating the sale!");
      //     console.log(error);
      //   }
      onClose();
    }
  };

  const closeModal = () => {
    setDescription("");
    setMomoNumber("");
    setPaymentMethod("");
    setError("");
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const handleNextStage = () => {
    setStage(stage + 1);
  };

  const handlePreviousStage = () => {
    setStage(stage - 1);
  };

  return (
    <ModalLayout header="Confirm Sale" closeModal={closeModal}>
      {stage === 1 && (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-2 mb-4">
            <div className="flex flex-col basis-1/2 mb-4">
              <label className="text-xs text-gray-400">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                className="w-full h-8 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                required
                value={paymentMethod}
                onChange={(event) => {
                  setPaymentMethod(event.target.value);
                  setError("");
                }}
              >
                <option value="" disabled>
                  Select payment method
                </option>
                <option value="cash">Cash</option>
                <option value="momo">Momo</option>
                {/* Add more payment methods as needed */}
              </select>
            </div>

            {paymentMethod === "momo" && (
              <div className="flex flex-col basis-1/2 mb-4">
                <label className="text-xs text-gray-400">Momo Number</label>
                <input
                  type="number"
                  id="momoNumber"
                  name="momoNumber"
                  className="w-full h-8 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                  required
                  value={momoNumber}
                  onChange={(event) => {
                    setMomoNumber(event.target.value);
                    setError("");
                  }}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-xs text-gray-400">Notes</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
              placeholder="Enter your description..."
              required // Make the field required
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
                setError("");
              }}
            ></textarea>
          </div>

          <div className="flex flex-row">
            <div className="flex basis-2/5 justify-start text-xs text-red-500 mt-5">
              {error && <p>{error}</p>} 
            </div>

            <div className="flex basis-2/5 ">Total:</div>
            <div className="flex basis-2/5 justify-end">
              {isLoading ? null : (
                <div className="flex flex-row">
                  <button
                    type="button"
                    className="bg-transparent text-black text-sm py-1 px-4 mt-4"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
                    onClick={handleSubmit}
                  >
                    Confirm
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      )}

      {stage === 2 && (
        <div>
          <p>
            SALE ADDED, CHECK
            <Link className="text-blue" href={"./finances"}>
              FINANCES
            </Link>
            TAB TO SEE.
          </p>
        </div>
      )}
    </ModalLayout>
  );
};

export default ConfirmAddSale;
