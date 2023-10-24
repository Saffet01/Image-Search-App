import React from "react";
import { useState } from "react";


const SearchHeader = ({ search }) => {
  const [valueInput, setValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Aradığınız kelimeyi giriniz..</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchHeader;
