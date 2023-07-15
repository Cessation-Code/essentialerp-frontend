import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchButton = ({onSearch}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };



  return (
    <form onSubmit={handleSubmit} className="mr-3 ">
      <input
        className="outline rounded mr-3"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
        required
        minLength={3}
        maxLength={20}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchButton;