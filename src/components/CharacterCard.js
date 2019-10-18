import React from "react";
import styled from 'styled-components';

const Cards = styled.div`
display: Flex;
margin-bottom: 1rem;
border: 1px solid grey;

`;

const Bio = styled.div`
margin-left: 1rem;
`;

export default function CharacterCard(props) {
  return(
    <Cards>
      <img src={props.image}/>
      <Bio>
        <h1>{props.name}</h1>
        <p>{props.species}</p>
      </Bio>
    </Cards>
  );
}
