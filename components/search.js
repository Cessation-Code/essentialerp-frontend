import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchButton = ({ onSearch }) => {
  const [value, setValue] = useState("");

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(value);
  // };

  return (
    <form onSubmit={null} className="mr-3 flex flex-row">
      <input
        type="text"
        placeholder="  Search"
        className="input input-bordered input-primary w-full max-w-xs mr-3"
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchButton;
