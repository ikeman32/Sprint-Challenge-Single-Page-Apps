import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import styled from "styled-components";

import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";

const Welcome = styled.div`
  display: flex;
`;

const Card = styled.div`
margin-left: 2rem;
`;

export default function App() {
  return (
    <main>
      <Header />

      
      <Welcome>
        <Route exact path="/" render={props => <WelcomePage />}/>
        <Card>
        <Route path="/" render={props => <CharacterList {...props} />} />
        </Card>
      </Welcome>
    </main>
  );
}
