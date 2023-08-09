import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { API } from "../../config/API";
import { PokemonResponse } from "@/types/Pokemon";

const ITEMS_PER_PAGE = 20;

const getAllPokemon = async (endpoint: string): Promise<PokemonResponse> => {
  try {
    const response: AxiosResponse<PokemonResponse> = await API.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function useGetAllPokemon(offset: number) {
  const { data, isLoading, isError } = useQuery([`pokemonList/${offset}`], () =>
    getAllPokemon(`/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`)
  );

  const totalPokemon = data?.count || 0;
  const totalPages = Math.ceil(totalPokemon / ITEMS_PER_PAGE);

  return {
    pokemonList: data?.results,
    isLoading,
    isError,
    totalPages,
  };
}
