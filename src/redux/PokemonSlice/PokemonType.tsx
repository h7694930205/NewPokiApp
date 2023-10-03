export interface Pokemon {
  name: string;
  id: number;
  url: string;
  game_index: number;
  is_hidden: boolean;
  height: number;
}
export interface ImagePokemon {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  name: string;
  url: string;
  id: number;
  weight: number;
  order: number;
  height: number;
}

export interface PokemonList {
  list: Pokemon[];
  imagePokemonList: ImagePokemon;
  isLoading: boolean;
  id: number;
  offset: number;
  limit: number;
  total: number;
  weight: number;
  height: number;
  name: string;
  order: number;
}
