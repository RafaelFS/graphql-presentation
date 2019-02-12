import React, { Component, CSSProperties } from 'react';
import { Query } from "react-apollo";

import query from "./CharacterList.graphql";
import { CharacterList } from "./App";

interface CharacterListState {
  characters: any;
}


class CharacterListWithData extends Component<{}, CharacterListState> {
  constructor(props: {}) {
    super(props);
    this.state = { characters: [] };
  }

  render() {
    return (
      <Query query={query} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return   <CharacterList characters={data.characters.results} />
      }}
    </Query>

    );
  }
}

export default CharacterListWithData;
