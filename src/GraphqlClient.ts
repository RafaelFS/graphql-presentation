import ApolloClient from "apollo-boost";

const graphqlClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

export default graphqlClient;