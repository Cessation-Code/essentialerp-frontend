import React, { useState } from "react";
import withAuth from "../../../components/withAuth";

const Finance = () => {
  const [entries, setEntries] = useState([
    { id: 1, date: "2023-05-01", category: "Income", income: 1000, expense: 0 },
    { id: 2, date: "2023-05-02", category: "Expense", income: 0, expense: 500 },
    { id: 3, date: "2023-05-03", category: "Income", income: 2000, expense: 0 },
    { id: 4, date: "2023-05-04", category: "Expense", income: 0, expense: 800 },
    { id: 5, date: "2023-05-05", category: "Income", income: 1500, expense: 0 },
  ]);

  const [filterDate, setFilterDate] = useState("");
  const [newEntry, setNewEntry] = useState({
    id: null,
    date: "",
    category: "",
    income: "",
    expense: "",
    editMode: true,
  });

  const addEntry = () => {
    const newEntryId = entries.length + 1;
    const entry = { ...newEntry, id: newEntryId };
    setEntries([...entries, entry]);
    setNewEntry({ id: null, date: "", category: "", income: "", expense: "", editMode: true });
  };

  const updateEntry = (id, field, value) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, [field]: value };
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  const handleFilterChange = (event) => {
    setFilterDate(event.target.value);
  };

  const filteredEntries = filterDate ? entries.filter((entry) => entry.date === filterDate) : entries;

  const handleEditEntry = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, editMode: true };
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const handleDoneEntry = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, editMode: false };
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const handleDeleteEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  return (
    <div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="text-3xl font-bold mb-2">Finances - Income and Expenses</h3>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <button className="btn btn-primary mr-2" onClick={addEntry}>
                    Add Entry
                  </button>
                  <input
                    type="text"
                    placeholder="Filter by Date"
                    className="border border-gray-300 rounded px-2 py-1"
                    value={filterDate}
                    onChange={handleFilterChange}
                  />
                </div>
                <input type="text" placeholder="Search" className="border border-gray-300 rounded px-2 py-1" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border-b border-gray-300 px-4 py-2 text-left">Date</th>
                      <th className="border-b border-gray-300 px-4 py-2 text-left">Category</th>
                      <th className="border-b border-gray-300 px-4 py-2 text-left">Income</th>
                      <th className="border-b border-gray-300 px-4 py-2 text-left">Expense</th>
                      <th className="border-b border-gray-300 px-4 py-2 text-left">Overall Balance</th>
                      <th className="border-b border-gray-300 px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEntries.map((entry) => (
                      <tr key={entry.id}>
                        <td className="border-b border-gray-300 px-4 py-2">
                          {entry.editMode ? (
                            <input
                              type="text"
                              className="border border-gray-300 rounded px-2 py-1"
                              value={entry.date}
                              onChange={(e) => updateEntry(entry.id, "date", e.target.value)}
                            />
                          ) : (
                            entry.date
                          )}
                        </td>
                        <td className="border-b border-gray-300 px-4 py-2">
                          {entry.editMode ? (
                            <select
                              className="border border-gray-300 rounded px-2 py-1"
                              value={entry.category}
                              onChange={(e) => updateEntry(entry.id, "category", e.target.value)}
                            >
                              <option value="Income">Income</option>
                              <option value="Expense">Expense</option>
                            </select>
                          ) : (
                            entry.category
                          )}
                        </td>
                        <td className="border-b border-gray-300 px-4 py-2">
                          {entry.editMode ? (
                            <div className="flex">
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => updateEntry(entry.id, "income", entry.income + 1)}
                              >
                                +
                              </button>
                              <input
                                type="number"
                                className="border border-gray-300 rounded px-2 py-1 w-16 text-right mx-2"
                                value={entry.income}
                                onChange={(e) => updateEntry(entry.id, "income", e.target.value)}
                              />
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => updateEntry(entry.id, "income", entry.income - 1)}
                              >
                                -
                              </button>
                            </div>
                          ) : (
                            entry.income
                          )}
                        </td>
                        <td className="border-b border-gray-300 px-4 py-2">
                          {entry.editMode ? (
                            <div className="flex">
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => updateEntry(entry.id, "expense", entry.expense + 1)}
                              >
                                +
                              </button>
                              <input
                                type="number"
                                className="border border-gray-300 rounded px-2 py-1 w-16 text-right mx-2"
                                value={entry.expense}
                                onChange={(e) => updateEntry(entry.id, "expense", e.target.value)}
                              />
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => updateEntry(entry.id, "expense", entry.expense - 1)}
                              >
                                -
                              </button>
                            </div>
                          ) : (
                            entry.expense
                          )}
                        </td>
                        <td className="border-b border-gray-300 px-4 py-2">{entry.income - entry.expense}</td>
                        <td className="border-b border-gray-300 px-4 py-2">
                          {entry.editMode ? (
                            <button className="btn btn-primary mr-2" onClick={() => handleDoneEntry(entry.id)}>
                              Done
                            </button>
                          ) : (
                            <button className="btn btn-primary mr-2" onClick={() => handleEditEntry(entry.id)}>
                              Edit
                            </button>
                          )}
                          <button className="btn btn-danger" onClick={() => handleDeleteEntry(entry.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default withAuth(Finance);
