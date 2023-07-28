import { SearchRounded } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Paper component="form" onSubmit={handleSubmit} className="paper-container">
      <input
        className="search-bar"
        placeholder="Search...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        title="Search"
      />
      <IconButton  type="submit" title="Search">
        <SearchRounded type="submit" className="searchIcon" />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
