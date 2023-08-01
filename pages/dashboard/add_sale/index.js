import React, { useState, useEffect } from "react";
import SearchButton from "../../../components/search";
import withAuth from "../../../components/withAuth";
import ConfirmAddSale from "./confirmAddSaleModal";

const AddSales = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showConfirmAddSaleModal, setShowConfirmAddSaleModal] = useState(false);


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
    const existingItem = selectedItems.find((selectedItem) => selectedItem._id === item._id);

    if (existingItem) {
      // If the item is already in the cart, increase its quantity by one
      const updatedItems = selectedItems.map((selectedItem) =>
        selectedItem._id === item._id
          ? { ...selectedItem, quantity: selectedItem.quantity + 1, amount: (selectedItem.quantity + 1) * item.price }
          : selectedItem
      );
      setSelectedItems(updatedItems);
    } else {
      // If the item is not in the cart, add it with a quantity of one
      const newItem = {
        ...item,
        quantity: 1,
        amount: item.price,
      };
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, newItem]);
    }

    // Reduce the stock of the item
    const updatedStock = inventoryItems.map((stockItem) =>
      stockItem._id === item._id ? { ...stockItem, stock: stockItem.stock - 1 } : stockItem
    );

    setInventoryItems(updatedStock);

  };

 
  const handleReduceQuantity = (itemId) => {
    const updatedItems = selectedItems.map((selectedItem) =>
      selectedItem._id === itemId
        ? {
          ...selectedItem,
          quantity: selectedItem.quantity > 0 ? selectedItem.quantity - 1 : 0,
          amount: (selectedItem.quantity > 0 ? selectedItem.quantity - 1 : 0) * selectedItem.price,
        }
        : selectedItem
    );

    // Remove the item from selectedItems if its quantity is zero
    const filteredItems = updatedItems.filter((item) => item.quantity > 0);

    setSelectedItems(filteredItems);

    // Increase the stock of the item when it is removed from the cart
    const itemToUpdateStock = selectedItems.find((selectedItem) => selectedItem._id === itemId);

    if (itemToUpdateStock) {
      const updatedStock = inventoryItems.map((stockItem) =>
        stockItem._id === itemId ? { ...stockItem, stock: stockItem.stock + 1 } : stockItem
      );

      setInventoryItems(updatedStock);
    }

    setSelectedItems(updatedItems.filter((item) => item.quantity > 0));
  };

  const openConfirmSalesModal = () => {
    setShowConfirmAddSaleModal(true);
  };

  const closeConfirmSalesModal = () => {
    setShowConfirmAddSaleModal(false);
  }


  return (
    <div className="w-[90%] h-[90%] p-4 mt-32 border-4 rounded-3xl relative m-10">
      <div className="flex flex-row h-full">

        {/* table of inventory items */}
        <div className="flex flex-col basis-1/2 px-7">

          <div className="flex flex-row mb-3 text-sm font-semibold">
            <div className="flex basis-1/3">
              Select Products
            </div>
            <div className="flex basis-2/3 place-content-end">
              <SearchButton />
            </div>
          </div>

          <div className="flex flex-col h-full overflow-y-auto border-2 border-gray-300 rounded-md custom-scrollbar mr-3">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase">
                    Price
                  </th>
                  <th scope="col" className="relative px-6 py-2">
                    <span className="sr-only">Add to cart</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryItems.map((item) => (
                  <tr key={item.id}>
                    <td className="flex items-center px-6 py-1 whitespace-nowrap">
                      <div className="text-sm font-medium">
                        <div className="text-black">
                          {item.name}
                        </div>
                        <div className="text-gray-500">
                          {item.stock} in stock
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => {
                        handleAddToCart(item)
                      }}
                        className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-lg"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Selected Products List */}
        <div className="flex flex-col basis-1/2 px-7">

          <div className="flex flex-row mb-4">
            <div className="flex basis-1/3 text-sm font-semibold">
              Selected Products
            </div>
            <div className="flex basis-2/3 place-content-end">
              <button className="bg-green-600 border hover:border-green-900 text-xs font-semibold rounded-lg px-2 transition-all hover:scale-105"
                onClick={openConfirmSalesModal}>Checkout
              </button>
            </div>
          </div>

          {showConfirmAddSaleModal && <ConfirmAddSale selectedProducts={selectedItems} isOpen={openConfirmSalesModal} onClose={closeConfirmSalesModal} />}

          <div className="flex flex-col h-full overflow-y-auto border-2 border-gray-300 rounded-md custom-scrollbar">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase">
                    Amount(GHS)
                  </th>
                  <th scope="col" className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 text-sm text-black">
                      {item.name}
                    </td>
                    <td className="px-6 text-sm text-gray-500">
          
                      {item.amount}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex flex-row items-center justify-center gap-2">
                        <input
                          type="number"
                          disabled
                          value={item.quantity}
                          className="bg-transparent" />
                        <button onClick={() => {
                          handleReduceQuantity(item._id)
                        }}
                          className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg"
                        />
                      </div>
                    </td>
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

export default withAuth(AddSales);
