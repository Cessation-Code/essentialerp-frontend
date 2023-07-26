import React, { useState, useEffect } from "react";
import SearchButton from "../../../components/search";

const AddSales = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  async function getInventoryItems() {
    try {
      // Fetch inventory items
      const response = await fetch(
        "https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/product/",
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch inventory items.");
      }
      const data = await response.json();
      setInventoryItems(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  // Get inventory items on page load
  useEffect(() => {
    getInventoryItems();
  }, []);

  const handleAddToCart = (item) => {
    // Check if the product is already in the cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingCartItem) {
      // Product already exists in the cart, increase the quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Product doesn't exist in the cart, add it with quantity 1
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }

    // Reduce the stock of the selected product in the inventory items
    setInventoryItems((prevInventoryItems) =>
      prevInventoryItems.map((inventoryItem) =>
        inventoryItem.id === item.id
          ? { ...inventoryItem, stock: inventoryItem.stock - 1 }
          : inventoryItem
      )
    );
  };

  const handleRemoveFromCart = (itemId) => {
    // Check if the product is in the cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemId);

    if (existingCartItem && existingCartItem.quantity > 1) {
      // Product exists in the cart and its quantity is greater than 1, reduce the quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );

      // Increase the stock of the selected product in the inventory items
      setInventoryItems((prevInventoryItems) =>
        prevInventoryItems.map((inventoryItem) =>
          inventoryItem.id === itemId
            ? { ...inventoryItem, stock: inventoryItem.stock + 1 }
            : inventoryItem
        )
      );
    } else {
      // Product doesn't exist in the cart or its quantity is 1, remove it from the cart
      setCartItems((prevCartItems) =>
        prevCartItems.filter((cartItem) => cartItem.id !== itemId)
      );

      // If the product is removed from the cart, reset its stock to the original value in the inventory items
      setInventoryItems((prevInventoryItems) =>
        prevInventoryItems.map((inventoryItem) =>
          inventoryItem.id === itemId
            ? { ...inventoryItem, stock: inventoryItem.originalStock }
            : inventoryItem
        )
      );
    }
  };

  return (
    <div className="w-[85vw] h-full p-4 mt-6 mx-3 border-4 rounded-3xl relative">
      <div className="items-start gap-4 justify-between sm:flex grid grid-cols-2">
        {/* The select products column */}
        <div className="col-span-1 w-full flex flex-col">
          <div className="text-gray-800 text-base font-semibold">
            Select Products
          </div>
          <div className="flex flex-row pt-10">
            <SearchButton />
          </div>

          <div className="overflow-y-auto max-h-[50vh] custom-scrollbar">
            <table className="w-full border-collapse my-4 border">
              <thead>
                <tr className="bg-gray-200 rounded">
                  <th className="border px-4 py-2 text-left">Name</th>
                  <th className="border px-4 py-2 text-left">Stock</th>
                  <th className="border px-4 py-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {inventoryItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.stock}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="border rounded p-1"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        -
                      </button>
                      <input
                        className="w-8 outline mx-2 text-center rounded"
                        type="number"
                        value={
                          cartItems.find((cartItem) => cartItem.id === item.id)
                            ?.quantity || 0
                        }
                        readOnly
                      />
                      <button
                        className="border rounded p-1"
                        onClick={() => handleAddToCart(item)}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        {/* The selected products column */}
        <div className="col-span-1 w-full flex flex-col">
          <h4 className="text-gray-800 text-lg font-semibold">
            Selected Products
          </h4>
          <button
            className="bg-primary w-fit content-end text-lg  text-white p-2 rounded"
            onClick={() => console.log(selectedProducts)}
          >
            Checkout
          </button>

          <div className="overflow-y-auto max-h-[50vh]">
            <table className="w-full border-collapse border my-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Amount</th>
                  <th className="border px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.quantity}</td>
                    <td className="border px-4 py-2">{item.price}</td>
                    <td className="border px-4 py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSales;
