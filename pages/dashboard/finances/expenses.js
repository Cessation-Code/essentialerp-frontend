import React, { useState }  from "react";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExpenseTable = () => {

    const isValidDateEntry = (date) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(date);
      };

      const [expenseEntries, setExpenseEntries] = useState([
        {
          id: 1,
          date: "2023-05-02",
          category: "Expense",
          amount: 500,
          editMode: false,
        },
        {
          id: 2,
          date: "2023-05-04",
          category: "Expense",
          amount: 800,
          editMode: false,
        },
        {
          id: 3,
          date: "2023-05-05",
          category: "Expense",
          amount: 1500,
          editMode: false,
        },
      ]);
    
    
      const [newExpenseEntry, setNewExpenseEntry] = useState({
        id: null,
        date: "",
        category: "Expense",
        amount: "",
      });
    
      const [editedEntryId, setEditedEntryId] = useState(null);
    
      const [error, setError] = useState("");

    
      const addExpenseEntry = () => {
        const newEntryId = expenseEntries.length + 1;
        setExpenseEntries((prevExpenseEntries) => [
          ...prevExpenseEntries,
          {
            id: newEntryId,
            date: newExpenseEntry.date,
            category: newExpenseEntry.category,
            amount: newExpenseEntry.amount,
            editMode: true,
          },
        ]);
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
      
    
      const deleteExpenseEntry = (id) => {
        const updatedEntries = expenseEntries.filter((entry) => entry.id !== id);
        setExpenseEntries(updatedEntries);
      };
    
    
    
      const handleExpenseInputChange = (id, field, value) => {
        updateExpenseEntry(id, field, value);
      };
    
    
      
      const handleExpenseEntrySave = (id) => {
        const editedEntry = expenseEntries.find((entry) => entry.id === id);
        const { date, category, amount } = editedEntry;
        if (date !== "" && category !== "" && amount !== "") {
          if (!isNaN(amount)) {
            const isValidDate = isValidDateEntry(date);
            if (isValidDate) {
              updateExpenseEntry(id, "editMode", false);
              setError("");
            } else {
              setError("Incomplete entry data. Please fill in all fields.");
              alert("Invalid date entry. Please enter a valid date.");
            }
          } else {
            setError("Incomplete entry data. Please fill in all fields.");
            alert("The amount field should be a valid number.");
          }
        } else {
          setError("Incomplete entry data. Please fill in all fields.");
          alert("Incomplete entry data. Please fill in all fields.");
        }
      };
      

    
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl text ml-2 font-semibold">
          Expense Table
        </h3>

        <button className="btn btn-primary" onClick={addExpenseEntry}>
          Add Expense
        </button>
      </div>

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
                      handleExpenseInputChange(entry.id, "date", e.target.value)
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
                      handleExpenseInputChange(entry.id, "amount", e.target.value)
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
                    onClick={() => {
                      setEditedEntryId(entry.id);
                      updateExpenseEntry(entry.id, "editMode", true);
                    }}
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
  );
};

export default ExpenseTable;
