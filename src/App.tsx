import React, { Component, CSSProperties } from 'react';
import gql from "graphql-tag";

import graphqlClient from "./GraphqlClient"

import './App.css';
import './CharacterCard.css'

interface CharacterListState {
  characters: any;
}


class App extends Component<{}, CharacterListState> {
  constructor(props: {}) {
    super(props);
    this.state = { characters: [] };
  }

  componentDidMount() {

    graphqlClient.query<any>({
      query: gql`
        {
          characters(,filter: { name: "rick" }) {
            results {
              id
              name
              image
              species
            }
          }
        }
      `
    }).then((result) => {
      this.setState((state, props) => ({
        ...state,
        characters: result.data.characters.results
      }));
    });
  }


  render() {
    return (
      <div className="App">
        <CharacterList characters={this.state.characters} />
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
