import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
 
  const[searchTerm, setSearchTerm] = useState('');
  const[searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() =>{
    const results = array.filter(char =>
      char.toLowerCase().includes(searchTerm)
      );
  },[searchTerm])
  return (
    <section className="search-form">
     <input 
      type='text' 
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}/>
    </section>
  );
}
