import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

import React, { Component } from 'react';
import './App.css';

interface CharacterListState {
  characters: any;
}


class App extends Component<{}, CharacterListState> {
  constructor(props: {}) {
    super(props);
    this.state = { characters: [] };
  }

  componentDidMount() {
    const client = new ApolloClient({
      uri: "https://rickandmortyapi.com/graphql"
    });

    client.query<any>({
      query: gql`
        {
          characters(,filter: { name: "rick" }) {
            results {
              id
              name
            }
          }
        }
      `
    })
    .then(result => {
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


function CharacterList(props: any) {
  const characters = props.characters;
  const listCharacters = characters.map((character: any) =>
   <p key={character.id}>{character.name}</p>
  );
  return (
    <div>{listCharacters}</div>
  );
}

export default App;
