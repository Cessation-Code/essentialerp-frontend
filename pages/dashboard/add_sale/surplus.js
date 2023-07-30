import React, { useState, useEffect } from "react";
import SearchButton from "../../../components/search";
import withAuth from "../../../components/withAuth";

const AddSales = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [error,setError] = useState("");
  const [stage, setStage] = useState(1);
  const [name, setName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  
  const [invoiceDate, setInvoiceDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  
  const [billingAddress, setBillingAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");

  const [customerCountry, setCustomerCountry] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

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

  useEffect(() => {
    // Calculate the total amount based on the selected items
    const total = selectedItems.reduce(
      (accumulator, item) => accumulator + item.amount,
      0
    );
    setTotalAmount(total);
  }, [selectedItems]);

  const handleAddToCart = (item) => {
    const existingItem = selectedItems.find(
      (selectedItem) => selectedItem._id === item._id
    );

    if (existingItem) {
      // If the item is already in the cart, increase its quantity by one
      const updatedItems = selectedItems.map((selectedItem) =>
        selectedItem._id === item._id
          ? {
              ...selectedItem,
              quantity: selectedItem.quantity + 1,
              amount: (selectedItem.quantity + 1) * item.price,
            }
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
      stockItem._id === item._id
        ? { ...stockItem, stock: stockItem.stock - 1 }
        : stockItem
    );

    setInventoryItems(updatedStock);
  };

  const handleReduceQuantity = (itemId) => {
    const updatedItems = selectedItems.map((selectedItem) =>
      selectedItem._id === itemId
        ? {
            ...selectedItem,
            quantity: selectedItem.quantity > 0 ? selectedItem.quantity - 1 : 0,
            amount:
              (selectedItem.quantity > 0 ? selectedItem.quantity - 1 : 0) *
              selectedItem.price,
          }
        : selectedItem
    );

    // Remove the item from selectedItems if its quantity is zero
    const filteredItems = updatedItems.filter((item) => item.quantity > 0);

    setSelectedItems(filteredItems);

    // Increase the stock of the item when it is removed from the cart
    const itemToUpdateStock = selectedItems.find(
      (selectedItem) => selectedItem._id === itemId
    );

    if (itemToUpdateStock) {
      const updatedStock = inventoryItems.map((stockItem) =>
        stockItem._id === itemId
          ? { ...stockItem, stock: stockItem.stock + 1 }
          : stockItem
      );

      setInventoryItems(updatedStock);
    }

    setSelectedItems(updatedItems.filter((item) => item.quantity > 0));
  };
  const handleNextStage = () => {
    setStage(stage + 1);
  };

  const handlePreviousStage = () => {
    setStage(stage - 1);
  };

  return (
    <>
      {stage === 1 && (
        <>
          <div className="flex justify-center my-2 ">
            <ul className="steps w-1/3">
              <li className="step step-success">Add To Cart</li>
              <li className="step step-primary">Invoice</li>
            </ul>
          </div>
          <div className="w-[90%] h-[90%] p-4 mt-4 border-4 rounded-3xl relative m-10 ">
            <div className="flex flex-row h-full">
              {/* table of inventory items */}
              <div className="flex flex-col basis-1/2 px-7">
                <div className="flex flex-row mb-3 text-sm font-semibold">
                  <div className="flex basis-1/3">Select Products</div>
                  <div className="flex basis-2/3 place-content-end">
                    <SearchButton />
                  </div>
                </div>

                <div className="flex flex-col h-full overflow-y-auto border-2 border-gray-300 rounded-md custom-scrollbar mr-3">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase"
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase"
                        >
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
                              <div className="text-black">{item.name}</div>
                              <div className="text-gray-500">
                                {item.stock} in stock
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => {
                                handleAddToCart(item);
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

              <div className="divider lg:divider-horizontal"></div>

              {/* Selected Products List */}
              <div className="flex flex-col basis-1/2 px-7">
                <div className="flex flex-row mb-4">
                  <div className="flex basis-1/3 text-sm font-semibold">
                    Selected Products
                  </div>
                  <div className="flex basis-2/3 place-content-end">
                    <button
                      className="bg-green-600 border hover:border-green-900 text-sm font-semibold rounded-lg px-2 transition-all hover:scale-105"
                      onClick={handleNextStage}
                    >
                      Checkout
                    </button>
                  </div>
                </div>

                <div className="flex flex-col h-full overflow-y-auto border-2 border-gray-300 rounded-md custom-scrollbar">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase"
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase"
                        >
                          Amount(GHS)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-2 text-xs font-semibold text-left text-gray-500 uppercase"
                        >
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
                                className="bg-transparent"
                              />
                              <button
                                onClick={() => {
                                  handleReduceQuantity(item._id);
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
        </>
      )}
      {stage === 2 && (
        <>
          <div className="flex justify-center my-2 ">
            <ul className="steps w-1/3">
              <li className="step step-primary">Checkout</li>
              <li className="step step-secondary">Receipt</li>
            </ul>
          </div>
          <div className="w-[90%] h-[90%] p-4 mt-4 border-4 rounded-3xl relative m-10 ">
            <div className="flex flex-row h-full">
              <div className="flex flex-col basis-1/2 px-7">
                <div className="flex flex-row justify-between">
                  <div className="flex basis-1/3 text-sm font-semibold">
                    Checkout
                  </div>
                  <div className="flex basis-2/3 place-content-end">
                    <button
                      className="bg-red-600 border hover:border-green-900 text-sm font-semibold rounded-lg px-2 transition-all hover:scale-105"
                      onClick={handlePreviousStage}
                    >
                      Go Back
                    </button>
                  </div>
                </div>

                <form onSubmit={null}>
                  <div className="flex flex-row gap-2 mb-4">
                 
                      <div className="flex flex-col basis-1/2 mb-4">
                        <label className="text-xs mb-1 text-gray-400">
                          Customer Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                          required
                          value={name}
                          onChange={(event) => {
                            setName(event.target.value);
                            setError("");
                          }}
                        />
                      </div>

                      <div className="flex flex-col basis-1/2 mb-4">
                        <label className="text-xs mb-1 text-gray-400">
                          Invoice Number
                        </label>
                        <input
                          type="text"
                          id="invoiceNumber"
                          name="invoiceNumber"
                          className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                          required
                          value={invoiceNumber}
                          onChange={(event) => {
                            setInvoiceNumber(event.target.value);
                            setError("");
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mb-4">
                      <label className="text-xs text-gray-400">
                        Billing Address
                      </label>
                      <textarea
                        id="billingAddress"
                        name="billingAddress"
                        className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-24 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
                        placeholder="Enter billing address..."
                        required
                        value={billingAddress}
                        onChange={(event) => {
                          setBillingAddress(event.target.value);
                          setError("");
                        }}
                      ></textarea>
                    </div>

                    <div className="flex flex-col mb-4">
                      <label className="text-xs text-gray-400">
                        Payment Method
                      </label>
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
                        <option value="creditCard">Momo</option>
                        {/* Add more payment methods as needed */}
                      </select>
                    </div>

                    {/* ... More invoice-related fields ... */}

                    <div className="flex justify-end mt-6">
                      <button
                        className="bg-green-600 border hover:border-green-900 text-sm font-semibold rounded-lg px-2 transition-all hover:scale-105"
                        onClick={() => {
                          console.log("Submit invoice");
                        }}
                      >
                        Submit Invoice
                      </button>
                    </div>
                  
                </form>
              </div>

              <div className="divider lg:divider-horizontal"></div>

              {/* Selected Products List */}
              <div className="flex flex-col basis-1/2 px-7">
                <div className="flex flex-row mb-4">
                  <div className="flex basis-1/3 text-sm font-semibold">
                    Payment Receipt
                  </div>
                  <div className="flex basis-2/3 place-content-end">
                    <button
                      className="bg-green-600 border hover:border-green-900 text-sm font-semibold rounded-lg px-2 transition-all hover:scale-105"
                      onClick={() => {
                        console.log(selectedItems);
                      }}
                    >
                      Make Sale
                    </button>
                  </div>
                </div>

                <div className="flex flex-col h-full overflow-y-auto border-2 border-gray-300 rounded-md custom-scrollbar p-4">
                  <h1 class="font-bold text-2xl my-4 text-center text-blue-600">
                    Kwame's Store
                  </h1>
                  <hr class="mb-2" />
                  <div class="flex justify-between mb-6">
                  <h1 class="text-lg font-bold">Invoice</h1>
              <div class="text-gray-700">
                <div>Date: {invoiceDate}</div>
                <div>Invoice #: {invoiceNumber}</div>
              </div>
            </div>
            <div class="mb-8">
              <h2 class="text-lg font-bold mb-4">Bill To:</h2>
              <div class="text-gray-700 mb-2">{name}</div>
              <div class="text-gray-700 mb-2">{billingAddress}</div>
              {/* Add other customer details if needed */}
            </div>
            <table class="w-full mb-8">
              <thead>
                <tr>
                  <th class="text-left font-bold text-gray-700">Description</th>
                  <th class="text-right font-bold text-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item) => (
                  <tr key={item.id}>
                    <td class="text-left text-gray-700">{item.name}</td>
                    <td class="text-right text-gray-700">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td class="text-left font-bold text-gray-700">Total</td>
                  <td class="text-right font-bold text-gray-700">
                    ${totalAmount} {/* Replace totalAmount with the actual total amount */}
                  </td>
                </tr>
              </tfoot>
            </table>
                  <div className="flex flex-col mx-auto mt-8">
                    <div class="text-gray-700 mb-2 ">
                      You have a summary of the whole sale here
                    </div>
                    <div class="text-gray-700 text-sm">
                      Clicking on "Make a Sale" is an irreversible action{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default withAuth(AddSales);



{
  /* 
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information#
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      autoComplete="phone"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 mt-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      @essentialerp.company_a/
                    </span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="employee_a"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4 mt-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set Password
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="password"
                      id="password"
                      autoComplete="password"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="some_secure_combo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Contract Details and Permissions
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Set the contract type, duration, status and permissions that
                this employee has.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="contract-type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contract Type
                  </label>
                  <div className="">
                    <select
                      id="contract-type"
                      name="contract-type"
                      autoComplete="contract-type"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option className="px-2">Part-time</option>
                      <option className="px-2">Full-time</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="sm:col-span-3">
                    <label className="text-sm text-gray-600">Salary:</label>
                    <input
                      type="number"
                      className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      value={startDate}
                      onChange={handleSalaryChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="text-sm text-gray-600">Start Date</label>
                  <input
                    type="date"
                    className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="text-sm text-gray-600">End Date</label>
                  <input
                    type="date"
                    className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </div>
              </div>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Portal Access
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900"
                        >
                          HR
                        </label>
                        <p className="text-gray-500">
                          Has access to the HR tab and every other fields in it.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-900"
                        >
                          Inventory
                        </label>
                        <p className="text-gray-500">
                          Has access to the Inventory tab and every other fields
                          in it.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-900"
                        >
                          Finances
                        </label>
                        <p className="text-gray-500">
                          Has access to the Finances tab and every other fields
                          in it.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
</form> */
}

// <div className=" flex flex-row mt-6 ">
//               <label className="">Contract Type</label>
//               <select
//                 id="contract_type"
//                 name="contract_type"
//                 className="w-full h-8 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 value={contractType}
//                 onChange={(event) => {
//                   setContractType(event.target.value);
//                   setError("");
//                 }}
//               >
//                 <option value="" disabled></option>
//                 <option value="cash">Part Time</option>
//                 <option value="momo">FUll TIme</option>
//                 {/* Add more payment methods as needed */}
//               </select>
//             </div>
//             <div className=" flex mt-6 ">
//               <label className="">Salary</label>
//               <input
//                 type="number"
//                 id="salary"
//                 name="salary"
//                 className="w-[90%] h-8 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 value={salary}
//                 onChange={(event) => {
//                   setSalary(event.target.value);
//                   setError("");
//                 }}
//               />
//             </div>
//             <div className=" flex mt-6 ">
//               <label className="text-sm text-gray-600">Start Date</label>
//               <input
//                 type="date"
//                 className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 value={startDate}
//                 onChange={handleStartDateChange}
//               />
//             </div>
//             <div className=" flex mt-6 ">
//               <label className="text-sm text-gray-600">End Date</label>
//               <input
//                 type="date"
//                 className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 value={endDate}
//                 onChange={handleEndDateChange}
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm text-gray-600 mt-6">
//                 Portal Access
//               </label>
//               <div className="flex flex-row justify-between">
//                 <CheckBox
//                   name="HR"
//                   checked={hrChecked}
//                   onChange={(event) => {
//                     setHrChecked(event.target.checked);
//                   }}
//                 />
//                 <CheckBox
//                   name="Inventory"
//                   checked={inventoryChecked}
//                   onChange={(event) => {
//                     setInventoryChecked(event.target.checked);
//                   }}
//                 />
//                 <CheckBox
//                   name="Finance"
//                   checked={financeChecked}
//                   onChange={(event) => {
//                     setFinanceChecked(event.target.checked);
//                   }}
//                 />
//                 <CheckBox
//                   name="TPIP"
//                   checked={tpipChecked}
//                   onChange={(event) => {
//                     setTpipChecked(event.target.checked);
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

// <form onSubmit={handleSubmit}>
//           {/* First Row */}
//           <div className="flex flex-row gap-2 mb-2">
//             <div className="flex flex-col basis-1/3 mb-2">
//               <label className="text-xs mb-1 text-gray-400">First Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={firstName}
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handleFirstNameChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//             <div className="flex flex-col basis-1/3 mb-4">
//               <label className="text-xs mb-1 text-gray-400">Last Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={lastName}
//                 name="name"
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handleLastNameChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//             <div className="flex flex-col basis-1/3 mb-4">
//               <label className="text-xs mb-1 text-gray-400">Phone Number</label>
//               <input
//                 type="text"
//                 id="number"
//                 placeholder="+233"
//                 name="Phone"
//                 value={phone}
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 pl-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handlePhoneChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//           </div>

//           {/* Second Row */}
//           <div className="flex flex-row gap-2 mb-4">
//             <div className="flex flex-col basis-1/2 mb-4">
//               <label className="text-xs mb-1 text-gray-400">E-mail</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 name="email"
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handleEmailChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//             <div className="flex flex-col basis-1/2 mb-4">
//               <label className="text-xs mb-1 text-gray-400">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 className="w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 required
//                 onChange={handlePasswordChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//           </div>

//           {/* Third Row */}
//           <div className="flex flex-col">
//             <h2>Portal Access</h2>
//             <div className="flex flex-row justify-between">
//               <CheckBox
//                 name="HR"
//                 checked={hrChecked}
//                 onChange={handleHrChange}
//                 disabled={!isEditMode}
//               />
//               <CheckBox
//                 name="Inventory"
//                 checked={inventoryChecked}
//                 onChange={handleInventoryChange}
//                 disabled={!isEditMode}
//               />
//               <CheckBox
//                 name="Finance"
//                 checked={financeChecked}
//                 onChange={handleFinanceChange}
//                 disabled={!isEditMode}
//               />
//               <CheckBox
//                 name="TPIP"
//                 checked={tpipChecked}
//                 onChange={handleTpipChange}
//                 disabled={!isEditMode}
//               />
//             </div>
//           </div>

//           {/* Fourth Row */}
//           <div className="flex mt-4 flex-col">
//             <h2 className="font-bold">Contract Details</h2>
//             <div className="flex flex-row gap-5 justify-between">
//               <div className="flex flex-col basis-1/3">
//                 <label className="text-sm text-gray-600">Contract Type</label>
//                 <select
//                   className="block mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={contractType}
//                   onChange={handleContractTypeChange}
//                   disabled={!isEditMode}
//                 >
//                   <option value="">Select Type</option>
//                   {/* Add contract types as needed */}
//                 </select>
//               </div>
//               <div className="flex flex-col basis-1/3">
//                 <label className="text-sm text-gray-600">Start Date</label>
//                 <input
//                   type="date"
//                   className="block mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={startDate}
//                   onChange={handleStartDateChange}
//                   disabled={!isEditMode}
//                 />
//               </div>
//               <div className="flex flex-col basis-1/3">
//                 <label className="text-sm text-gray-600">End Date</label>
//                 <input
//                   type="date"
//                   className="block mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={endDate}
//                   onChange={handleEndDateChange}
//                   disabled={!isEditMode}
//                 />
//               </div>
//             </div>
//             <div class="flex flex-row mt-4 gap-3">
//               <div class="flex flex-row basis-1/2">
//                 <label class="text-sm text-gray-600">Salary:&nbsp;</label>
//                 <input
//                   type="number"
//                   className="border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={salary}
//                   onChange={handleSalaryChange}
//                   disabled={!isEditMode}
//                 />
//               </div>
//               <div class="flex flex-row basis-1/2">
//                 <label class="text-sm text-gray-600">Status:&nbsp;</label>
//                 <select
//                   className="border w-full rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={status}
//                   onChange={handleStatusChange}
//                   disabled={!isEditMode}
//                 >
//                   <option value="">Select Status</option>
//                   {/* Add status options as needed */}
//                 </select>
//               </div>
//             </div>

//             {/* Fifth Row */}
//             <div className="flex flex-col my-4">
//               <label className="text-xs text-gray-400">Description</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out"
//                 placeholder="Enter your description..."
//                 required
//                 onChange={handleDescriptionChange}
//                 disabled={!isEditMode}
//               ></textarea>
//             </div>
//           </div>

//           {/* Action Buttons Row */}
//           <div className="flex flex-row">
//             <div className="flex basis-2/5 justify-start text-xs text-red-500 mt-5"></div>
//             <div className="flex flex-auto justify-end gap-2">
//               {isLoading ? null : (
//                 <div className="flex flex-row">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="bg-transparent text-black text-sm py-1 px-4 mt-4"
//                   >
//                     Cancel
//                   </button>
//                   {isEditMode ? (
//                     <>
//                       <button
//                         type="submit"
//                         className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
//                       >
//                         Save
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       type="button"
//                       onClick={handleEdit}
//                       className="bg-[#C3A2FA] hover:bg-blue-600 text-white text-sm py-1 px-4 rounded mt-4"
//                     >
//                       Edit
//                     </button>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </form>
