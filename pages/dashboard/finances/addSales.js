import React, { useState } from "react";
import Modal from "../../../components/layouts/modal_layout";
import { Sales } from "./sales";

const AddSales = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const closeModal = () => {
    setCartItems([]); // Clear the cart when closing the modal
    onClose();
  };

  return (
    <Modal header="Add a Sale" closeModal={closeModal}>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="flex flex-row gap-1 mb-2">
          <div className="flex flex-col  mb-4">
            <label className="text-md mb-1 font-semibold text-slate-950 ">Select items</label>
            <div className="grid grid-cols-4 gap-4 ">
              {Sales.salesEntries.map((item) => (
                <div key={item.id} className=" gap-3">
                  <input
                    value={item.name}
                    className="rounded outline text-center w-16 mr-2"
                    disabled
                  />
                  <span className="">
                    <button onClick={() => addToCart(item)}>+</button>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Display the items in the cart */}
        <div>
          <h2 className="text-black text-lg">Cart:</h2>
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.name} - Quantity: {cartItem.quantity}
              </li>
            ))}
          </ul>
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

export default AddSales;
