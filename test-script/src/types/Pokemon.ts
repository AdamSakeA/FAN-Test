export type SpeciesPokemon = {
  name: string;
  url: string;
};

export type AbilityPokemon = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonSpecies = {
  evolution_chain: {
    url: string;
  };
};

export type EvolutionTo = {
  evolves_to: EvolutionTo[];
  species: {
    name: string;
    url: string;
  };
};

export interface PokemonEvolution {
  baby_trigger_item: string;
  chain: {
    evolution_details: [];
    evolves_to: EvolutionTo[];
    species: {
      name: string;
      url: string;
    };
  };
  id: number;
}

export type ImagePokemon = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type StatsPokemon = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export interface PokemonDetail {
  abilities: AbilityPokemon[];
  sprites: ImagePokemon;
  species: SpeciesPokemon;
  height: number;
  weight: number;
  stats: StatsPokemon[];
  name: string;
  types: PokemonType[];
}

export type Pokemon = {
  name: string;
  url: string;
};

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
