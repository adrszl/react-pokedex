import React, { createContext, useState } from 'react';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const defaultState = {
    pokemons: [
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Charmander' },
      { id: 3, name: 'Squirtle' }
    ],
    capturedPokemons: []
  };

  const pokemonReducer = (state, action) => { // returns the new state based on the action type
    switch (action.type) {
      case 'CAPTURE':
        // handle capture and return new state
      case 'RELEASE':
        // handle release and return new state
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(pokemonReducer, defaultState);

  // const [capturedPokemons, setCapturedPokemons] = useState([]);

  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};

export { PokemonContext, PokemonProvider };