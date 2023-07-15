import React, { useState }  from "react";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchButton from "../../../components/search";

// Rename the function to PascalCase to follow React component naming convention
const SalesTable = () => {

    const [salesEntries, setSalesEntries] = useState([
        {
          id: 1,
          date: "2023-05-01",
          category: "Sales",
          amount: 1000,
          editMode: false,
        },
        {
          id: 2,
          date: "2023-05-03",
          category: "Sales",
          amount: 2000,
          editMode: false,
        },
        {
          id: 3,
          date: "2023-05-05",
          category: "Sales",
          amount: 1500,
          editMode: false,
        },
      ]);

      const isValidDateEntry = (date) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(date);
      };

      const [error, setError] = useState("");
      const handleSalesEntrySave = (id) => {
        const editedEntry = salesEntries.find((entry) => entry.id === id);
        const { date, category, amount } = editedEntry;
        if (date !== "" && category !== "" && amount !== "") {
          if (!isNaN(amount)) {
            const isValidDate = isValidDateEntry(date);
            if (isValidDate) {
              updatesalesEntry(id, "editMode", false);
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

      const [newSalesEntry, setNewSalesEntry] = useState({
        id: null,
        date: "",
        category: "Sales",
        amount: "",
      });
    
      const handleSalesInputChange = (id, field, value) => {
        updateSalesEntry(id, field, value);
      };

      const deleteSalesEntry = (id) => {
        const updatedEntries = salesEntries.filter((entry) => entry.id !== id);
        setSalesEntries(updatedEntries);
      };

      const updateSalesEntry = (id, field, value) => {
        setSalesEntries((prevSalesEntries) => {
          return prevSalesEntries.map((entry) => {
            if (entry.id === id) {
              return { ...entry, [field]: value };
            }
            return entry;
          });
        });
      };
  
      const [editedEntryId, setEditedEntryId] = useState(null);

      const addSalesEntry = () => {
        const newEntryId = salesEntries.length + 1;
        setSalesEntries((prevSalesEntries) => [
          ...prevSalesEntries,
          {
            id: newEntryId,
            date: newSalesEntry.date,
            category: newSalesEntry.category,
            amount: newSalesEntry.amount,
            editMode: true,
          },
        ]);
      };


  return (
    <div className="w-full px-6">
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-3xl">Sales Table</h3>
        <div className="flex flex-row items-baseline">
          <SearchButton/>
        <button className="btn btn-primary mr-2" onClick={addSalesEntry}>
          Add Sales
        </button>
        </div>
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
          {salesEntries.map((entry) => (
            <tr key={entry.id}>
              <td className="border-b border-gray-300 px-4 py-2">
                {entry.editMode ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                    value={entry.date}
                    onChange={(e) =>
                      handleSalesInputChange(entry.id, "date", e.target.value)
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
                      handleSalesInputChange(
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
                      handleSalesInputChange(entry.id, "amount", e.target.value)
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
                    onClick={() => handleSalesEntrySave(entry.id)}
                  >
                    <FontAwesomeIcon icon={faCheck} className="mr-2" />
                  </button>
                ) : (
                  <button
                    className="btn-icon mr-2"
                    onClick={() => {
                      setEditedEntryId(entry.id);
                      updateSalesEntry(entry.id, "editMode", true);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                )}
                <button
                  className="btn-icon"
                  onClick={() => deleteSalesEntry(entry.id)}
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

export default SalesTable;
