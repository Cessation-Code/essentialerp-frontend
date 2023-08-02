import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchButton = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="mr-3 flex flex-row">
      <input
        type="text"
        onChange={handleSearchInputChange}
        placeholder="Search"
        value={searchQuery}
        className="input placeholder:text-sm placeholder:font-medium input-bordered input-primary w-fit h-fit mr-3"
      />
      <button type="submit" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} fontSize={"15"} />
      </button>
    </form>
  );
};

export default SearchButton;
