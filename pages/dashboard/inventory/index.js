import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import withAuth from "../../../components/withAuth";

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
    <div>
      <div className="overflow-x-auto overflow-y-auto p-4 mt-16 mx-10 border-4 rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Inventory</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="input input-sm pr-10"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FontAwesomeIcon icon={faCheck}
                  className="text-gray-400" />
              </div>
            </div>
            {newItem ? (
              <button className="btn btn-icon" onClick={handleApproveItem}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleAddItem}>
                Add Item
              </button>
            )}
          </div>
        </div>
        <table className="table table-xs bg-white">
          <thead>
            <tr>
              <th className="bg-gray-200 rounded-tl-md">ID</th>
              <th className="bg-gray-200">Product Name</th>
              <th className="bg-gray-200">Category</th>
              <th className="bg-gray-200">Units</th>
              <th className="bg-gray-200">Cost</th>
              <th className="bg-gray-200 rounded-tr-md">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>
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
                <td>
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
                <td>
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
                <td>
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
                <td>
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
                        className="btn btn-icon"
                        onClick={() => handleEditItem(item.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <span className="mx-1"></span>
                      {/* Add some margin between buttons */}
                      <button
                        className="btn btn-icon"
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
                <th>{newItem.id}</th>
                <td>
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
                <td>
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
                <td>
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
                <td>
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
                <td>
                  <button
                    className="btn btn-icon"
                    onClick={handleApproveItem}
                  >
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

export default withAuth(Inventory);
