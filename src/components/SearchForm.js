import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

const Search = styled.div`
margin-bottom: 1rem;
`;

export default function SearchForm(props) {
  let characters = props.char.map((ch)=>{
    return ch;
  });
  console.log('Search',characters);
  const[searchTerm, setSearchTerm] = useState('');
  const[searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() =>{
    const results = characters.filter(chars =>
      chars.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results)
  },[searchTerm])
  return (
    <section className="search-form">
      <Search>
     <input 
      type='text' 
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}/>
      </Search>
      {searchResults.map((char, index)=>(
        <CharacterCard 
          id={index}
          name={char.name}
          species={char.species}
          image={char.image}/>
      ))}

    </section>
  );
}
