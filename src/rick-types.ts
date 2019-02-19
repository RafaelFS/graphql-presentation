

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCharactersList
// ====================================================

export interface GetCharactersList_characters_results {
  __typename: "Character";
  id: ID | null;           // The id of the character.
  name: String | null;     // The name of the character.
  image: String | null;    // Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
  species: String | null;  // The species of the character.
}

export interface GetCharactersList_characters {
  __typename: "Characters";
  results: GetCharactersList_characters_results | null;
}

export interface GetCharactersList {
  characters: GetCharactersList_characters | null;  // Get the list of all characters
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================