import React, { useState } from "react";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withAuth from "../../../components/withAuth";

const Finance = () => {
  const [incomeEntries, setIncomeEntries] = useState([
    { id: 1, date: "2023-05-01", category: "Income", amount: 1000 },
    { id: 3, date: "2023-05-03", category: "Income", amount: 2000 },
    { id: 5, date: "2023-05-05", category: "Income", amount: 1500 },
  ]);

  const [expenseEntries, setExpenseEntries] = useState([
    { id: 2, date: "2023-05-02", category: "Expense", amount: 500 },
    { id: 4, date: "2023-05-04", category: "Expense", amount: 800 },
  ]);

  const [newIncomeEntry, setNewIncomeEntry] = useState({
    id: null,
    date: "",
    category: "Income",
    amount: "",
    editMode: false,
  });

  const [newExpenseEntry, setNewExpenseEntry] = useState({
    id: null,
    date: "",
    category: "Expense",
    amount: "",
    editMode: false,
  });

  const addIncomeEntry = () => {
    const newEntryId = incomeEntries.length + 1;
    const entry = { id: newEntryId, date: "", category: "", amount: "", editMode: true };
    setIncomeEntries((prevIncomeEntries) => [...prevIncomeEntries, entry]);
  };

  const addExpenseEntry = () => {
    const newEntryId = expenseEntries.length + 1;
    const entry = { id: newEntryId, date: "", category: "", amount: "", editMode: true };
    setExpenseEntries((prevExpenseEntries) => [...prevExpenseEntries, entry]);
  };

  const updateIncomeEntry = (id, field, value) => {
    setIncomeEntries((prevIncomeEntries) => {
      return prevIncomeEntries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, [field]: value };
        }
        return entry;
      });
    });
  };

  const updateExpenseEntry = (id, field, value) => {
    setExpenseEntries((prevExpenseEntries) => {
      return prevExpenseEntries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, [field]: value };
        }
        return entry;
      });
    });
  };

  const deleteIncomeEntry = (id) => {
    const updatedEntries = incomeEntries.filter((entry) => entry.id !== id);
    setIncomeEntries(updatedEntries);
  };

  const deleteExpenseEntry = (id) => {
    const updatedEntries = expenseEntries.filter((entry) => entry.id !== id);
    setExpenseEntries(updatedEntries);
  };

  const handleIncomeInputChange = (id, field, value) => {
    updateIncomeEntry(id, field, value);
  };

  const handleExpenseInputChange = (id, field, value) => {
    updateExpenseEntry(id, field, value);
  };


  const [error, setError] = useState("");

  const handleIncomeEntrySave = (id) => {
    const editedEntry = incomeEntries.find((entry) => entry.id === id);
    const { date, category, amount } = editedEntry;
    if (date !== "" && category !== "" && amount !== "") {
      updateIncomeEntry(id, "editMode", false);
      setError("");
    } else {
      setError("Incomplete entry data. Please fill in all fields.");
      alert("Incomplete entry data. Please fill in all fields.");
    }
  };

  const handleExpenseEntrySave = (id) => {
    const editedEntry = expenseEntries.find((entry) => entry.id === id);
    const { date, category, amount } = editedEntry;
    if (date !== "" && category !== "" && amount !== "") {
      updateExpenseEntry(id, "editMode", false);
      setError("");
    } else {
      setError("Incomplete entry data. Please fill in all fields.");
      alert("Incomplete entry data. Please fill in all fields.");
    }
  };

  

  return (
    <div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="flex flex-row justify-between">
                <h3 className="text-3xl font-bold mb-2">
                  Finances - Income and Expenses
                </h3>
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded px-2 py-1 mb-3"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-auto justify-between">
                  <button
                    className="btn btn-primary mr-2"
                    onClick={addIncomeEntry}
                  >
                    Add Income
                  </button>
                  <button className="btn btn-primary" onClick={addExpenseEntry}>
                    Add Expense
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2">
                {/* Income Table */}
                <div className="w-full">
                  <table className="w-full border border-gray-300 mr-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border-b border-gray-300 px-4 py-2 text-left">
                          Date
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left">
                          Category
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left">
                          Amount
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {incomeEntries.map((entry) => (
                        <tr key={entry.id}>
                          <td className="border-b border-gray-300 px-4 py-2">
                            {entry.editMode ? (
                              <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                value={entry.date}
                                onChange={(e) =>
                                  handleIncomeInputChange(
                                    entry.id,
                                    "date",
                                    e.target.value
                                  )
                                }
                              />
                            ) : (
                              entry.date
                            )}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2">
                            {entry.editMode ? (
                              <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                value={entry.category}
                                onChange={(e) =>
                                  handleIncomeInputChange(
                                    entry.id,
                                    "category",
                                    e.target.value
                                  )
                                }
                              />
                            ) : (
                              entry.category
                            )}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2">
                            {entry.editMode ? (
                              <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                value={entry.amount}
                                onChange={(e) =>
                                  handleIncomeInputChange(
                                    entry.id,
                                    "amount",
                                    e.target.value
                                  )
                                }
                              />
                            ) : (
                              entry.amount
                            )}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2">
                            {entry.editMode ? (
                              <button
                                className="btn-icon"
                                onClick={() => handleIncomeEntrySave(entry.id)}
                              >
                                <FontAwesomeIcon icon={faCheck}  className="mr-2"/>
                              </button>
                            ) : (
                              <button
                                className="btn-icon mr-2"
                                onClick={() =>
                                  updateIncomeEntry(entry.id, "editMode", true)
                                }
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                            )}
                            <button
                              className="btn-icon"
                              onClick={() => deleteIncomeEntry(entry.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Expense Table */}
                <div className="w-full">
                  <table className="w-full border border-gray-300 ml-2">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border-b border-gray-300 px-4 py-2 text-left">
                          Date
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left">
                          Category
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left">
                          Amount
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {expenseEntries.map((entry) => (
                        <tr key={entry.id}>
                          <td className="border-b border-gray-300 px-4 py-2">
                            {entry.editMode ? (
                              <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                value={entry.date}
                                onChange={(e) =>
                                  handleExpenseInputChange(
                                    entry.id,
                                    "date",
                                    e.target.value
                                  )
                                }
                              />
                            ) : (
                              entry.date
                            )}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2">
                            {entry.editMode ? (
                              <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                value={entry.category}
                                onChange={(e) =>
                                  handleExpenseInputChange(
                                    entry.id,
                                    "category",
                                    e.target.value
                                  )
                                }
                              />
                            ) : (
                              entry.category
                            )}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2">
                            {entry.editMode ? (
                              <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                value={entry.amount}
                                onChange={(e) =>
                                  handleExpenseInputChange(
                                    entry.id,
                                    "amount",
                                    e.target.value
                                  )
                                }
                              />
                            ) : (
                              entry.amount
                            )}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2">
                            {entry.editMode ? (
                              <button
                                className="btn-icon"
                                onClick={() => handleExpenseEntrySave(entry.id)}
                              >
                                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                              </button>
                            ) : (
                              <button
                                className="btn-icon mr-2"
                                onClick={() =>
                                  updateExpenseEntry(entry.id, "editMode", true)
                                }
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                            )}
                            <button
                              className="btn-icon"
                              onClick={() => deleteExpenseEntry(entry.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
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
    </div>
  );
};

export default withAuth(Finance);
