import gql from "graphql-tag";

const query = gql`
  query GetCharactersList{
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

export default query;