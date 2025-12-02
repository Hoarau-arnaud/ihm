import { Pokemon, POKEMONS } from './pokemon';

export interface Deck {
  id: number;
  name: string;
  pokemons: Pokemon[];
}

export const DECKS: Deck[] = [
  {
    id: 1,
    name: 'Deck Eau Légendaires',
    pokemons: [POKEMONS[0], POKEMONS[1], POKEMONS[3]]
  },
  {
    id: 2,
    name: 'Deck Dragons',
    pokemons: [POKEMONS[4], POKEMONS[5]]
  }
];
