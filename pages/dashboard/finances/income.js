import React, { useState }  from "react";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Rename the function to PascalCase to follow React component naming convention
const IncomeTable = () => {

    const [incomeEntries, setIncomeEntries] = useState([
        {
          id: 1,
          date: "2023-05-01",
          category: "Income",
          amount: 1000,
          editMode: false,
        },
        {
          id: 2,
          date: "2023-05-03",
          category: "Income",
          amount: 2000,
          editMode: false,
        },
        {
          id: 3,
          date: "2023-05-05",
          category: "Income",
          amount: 1500,
          editMode: false,
        },
      ]);

      const isValidDateEntry = (date) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(date);
      };

      const [error, setError] = useState("");
      const handleIncomeEntrySave = (id) => {
        const editedEntry = incomeEntries.find((entry) => entry.id === id);
        const { date, category, amount } = editedEntry;
        if (date !== "" && category !== "" && amount !== "") {
          if (!isNaN(amount)) {
            const isValidDate = isValidDateEntry(date);
            if (isValidDate) {
              updateIncomeEntry(id, "editMode", false);
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

      const [newIncomeEntry, setNewIncomeEntry] = useState({
        id: null,
        date: "",
        category: "Income",
        amount: "",
      });
    
      const handleIncomeInputChange = (id, field, value) => {
        updateIncomeEntry(id, field, value);
      };

      const deleteIncomeEntry = (id) => {
        const updatedEntries = incomeEntries.filter((entry) => entry.id !== id);
        setIncomeEntries(updatedEntries);
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
  
      const [editedEntryId, setEditedEntryId] = useState(null);

      const addIncomeEntry = () => {
        const newEntryId = incomeEntries.length + 1;
        setIncomeEntries((prevIncomeEntries) => [
          ...prevIncomeEntries,
          {
            id: newEntryId,
            date: newIncomeEntry.date,
            category: newIncomeEntry.category,
            amount: newIncomeEntry.amount,
            editMode: true,
          },
        ]);
      };


  return (
    <div className="w-full">
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl">Income Table</h3>
        <button className="btn btn-primary mr-2" onClick={addIncomeEntry}>
          Add Income
        </button>
      </div>
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
                      handleIncomeInputChange(entry.id, "date", e.target.value)
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
                      handleIncomeInputChange(entry.id, "amount", e.target.value)
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
                    <FontAwesomeIcon icon={faCheck} className="mr-2" />
                  </button>
                ) : (
                  <button
                    className="btn-icon mr-2"
                    onClick={() => {
                      setEditedEntryId(entry.id);
                      updateIncomeEntry(entry.id, "editMode", true);
                    }}
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
  );
};

export default IncomeTable;
