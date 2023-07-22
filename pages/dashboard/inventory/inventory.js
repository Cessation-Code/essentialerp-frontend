import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import SearchButton from "../../../components/search";

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([
    {
      id: 1,
      productName: "Waakye",
      category: "Breakfast",
      units: 50,
      cost: 50,
    },
    {
      id: 2,
      productName: "Bacon",
      category: "Lunch",
      units: 100,
      cost: 100,
    },
    {
      id: 3,
      productName: "Tombrown",
      category: "Brunch",
      units: 75,
      cost: 75,
    },
    {
      id: 4,
      productName: "Gobe",
      category: "Dessert",
      units: 120,
      cost: 120,
    },
  ]);
  const [newItem, setNewItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);

  const handleEdit = (id, field, value) => {
    const updatedData = inventoryData.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setInventoryData(updatedData);
  };

  const handleAddItem = () => {
    const newId =
      inventoryData.length > 0
        ? inventoryData[inventoryData.length - 1].id + 1
        : 1;
    setNewItem({
      id: newId,
      productName: "",
      category: "Category 1",
      units: "",
      cost: "",
    });
  };

  const handleApproveItem = () => {
    setInventoryData((prevData) => [...prevData, newItem]);
    setNewItem(null);
  };

  const handleRemoveItem = (id) => {
    const updatedData = inventoryData.filter((item) => item.id !== id);
    setInventoryData(updatedData);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditItem = (id) => {
    setEditingItemId(id);
  };

  const handleApproveEdit = (id) => {
    setEditingItemId(null);
  };

  const filteredData = inventoryData.filter(
    (item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full px-6">
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl text ml-2 font-semibold">Inventory Table</h3>
        <div className="flex flex-row items-baseline">
          <SearchButton />
          <button className="btn" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
      </div>
      <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
        <table className="w-[98%] border border-gray-300 ">
          <thead className="bg-gray-200">
            <tr>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Product Name
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Category
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Units
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                Cost
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-left rounded-tr-md">
                Actions
              </th>
            </tr>
          </thead>
          <tbody >
            {inventoryData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-left">
                  {editingItemId === item.id ? (
                    <input
                      type="text"
                      className="input input-sm"
                      value={item.productName}
                      onChange={(e) =>
                        handleEdit(item.id, "productName", e.target.value)
                      }
                    />
                  ) : (
                    item.productName
                  )}
                </td>
                <td className="px-4 py-2 text-left">
                  {editingItemId === item.id ? (
                    <select
                      className="input input-sm"
                      value={item.category}
                      onChange={(e) =>
                        handleEdit(item.id, "category", e.target.value)
                      }
                    >
                      <option value="Category 1">Category 1</option>
                      <option value="Category 2">Category 2</option>
                      <option value="Category 3">Category 3</option>
                      <option value="Category 4">Category 4</option>
                    </select>
                  ) : (
                    item.category
                  )}
                </td>
                <td className="px-4 py-2 text-left">
                  {editingItemId === item.id ? (
                    <input
                      type="number"
                      className="input input-sm"
                      value={item.units}
                      onChange={(e) =>
                        handleEdit(item.id, "units", e.target.value)
                      }
                    />
                  ) : (
                    item.units
                  )}
                </td>
                <td className="px-4 py-2 text-left">
                  {editingItemId === item.id ? (
                    <input
                      type="number"
                      className="input input-sm"
                      value={item.cost}
                      onChange={(e) =>
                        handleEdit(item.id, "cost", e.target.value)
                      }
                    />
                  ) : (
                    item.cost
                  )}
                </td>
                <td className="px-4 py-2 text-left">
                  {editingItemId === item.id ? (
                    <button
                      className="btn btn-icon"
                      onClick={() => handleApproveEdit(item.id)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  ) : (
                    <>
                      <button
                        className=""
                        onClick={() => handleEditItem(item.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <span className="mx-1"></span>
                      <button
                        className=""
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {newItem && (
              <tr>
                <td className="px-4 py-2 text-left">
                  <input
                    type="text"
                    className="input input-sm"
                    placeholder="Product Name"
                    value={newItem.productName}
                    onChange={(e) =>
                      setNewItem({ ...newItem, productName: e.target.value })
                    }
                  />
                </td>
                <td className="px-4 py-2 text-left">
                  <select
                    className="input input-sm"
                    value={newItem.category}
                    onChange={(e) =>
                      setNewItem({ ...newItem, category: e.target.value })
                    }
                  >
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                    <option value="Category 4">Category 4</option>
                  </select>
                </td>
                <td className="px-4 py-2 text-left">
                  <input
                    type="number"
                    className="input input-sm"
                    placeholder="Units"
                    value={newItem.units}
                    onChange={(e) =>
                      setNewItem({ ...newItem, units: e.target.value })
                    }
                  />
                </td>
                <td className="px-4 py-2 text-left">
                  <input
                    type="number"
                    className="input input-sm"
                    placeholder="Cost"
                    value={newItem.cost}
                    onChange={(e) =>
                      setNewItem({ ...newItem, cost: e.target.value })
                    }
                  />
                </td>
                <td className="px-4 py-2 text-left">
                  <button className="btn btn-icon" onClick={handleApproveItem}>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
