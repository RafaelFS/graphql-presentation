import ApolloClient from "apollo-boost";
import query from "./CharacterList.graphql";
import { GetCharactersList } from "./rick-types";

export function getCharacterList() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
  });

  return client.query<GetCharactersList>({ query });
}