import React, { Component, CSSProperties } from 'react';
import { ApolloProvider } from "react-apollo";

import graphqlClient from "./GraphqlClient"

import './App.css';
import './CharacterCard.css'
import CharacterListWithData from  "./CharacterListWithData"

interface CharacterListState {
  characters: any;
}


class App extends Component<{}, CharacterListState> {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={graphqlClient}>
          <CharacterListWithData />
        </ApolloProvider>
      </div>
    );
  }
}


export function CharacterList(props: any) {
  const characters = props.characters;
  const cardStyle = {
    marginTop: "50px",
    marginRight: "15px"
  }
  const gridStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  }
  const listCharacters = characters.map((character: any) =>
  <div key={character.id} style={cardStyle}>
    <CharacterCard style={cardStyle} character={character}/>
  </div>
  );
  return (
    <div style={gridStyle}>{listCharacters}</div>
  );
}

function CharacterCard(props: any) {
  let { name, image, species} = props.character;
  return (
    <div className="card">
      <img src={image} alt="Avatar" className="card__img" />
      <div className="card__container">
        <h4><b>{name}</b></h4>
        <p>{species}</p>
      </div>
    </div>
  );
}

export default App;
