import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    //const id = Number(props.match.params.id);
    //console.log(props.match.params);
    axios
    .get (`https://rickandmortyapi.com/api/character`)
    .then(res =>{
      setCharacter(res.data.results);
      console.log(res.data.results);
    })
    .catch(error => {
      console.error(error);
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.match.params]);

  return (
    
    <section className="character-list">
      <SearchForm {...props} char={character}/>
       {character.map((char, index)=>(
        <CharacterCard 
          id={index}
          name={char.name}
          species={char.species}
          image={char.image}/>
      ))} 
    </section>
  );
}
