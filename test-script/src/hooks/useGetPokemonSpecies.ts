import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { API } from "../../config/API";
import { PokemonSpecies } from "@/types/Pokemon";

const getPokemonSpecies = async (
  pokemonName: string
): Promise<PokemonSpecies> => {
  try {
    const response: AxiosResponse<PokemonSpecies> = await API.get(
      `/pokemon-species/${pokemonName}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function useGetPokemonSpecies(pokemonName: string) {
  const { data, isLoading, isError } = useQuery(
    [`/species/${pokemonName}`],
    () => getPokemonSpecies(pokemonName),
    { enabled: !!pokemonName }
  );

  return {
    pokemonSpecies: data,
    isLoading,
    isError,
  };
}
