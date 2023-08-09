import { PokemonEvolution } from "@/types/Pokemon";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const getPokemonEvolution = async (url: string): Promise<PokemonEvolution> => {
  const API = axios.create({
    baseURL: url,
    headers: { "Content-Type": "application/json" },
  });

  try {
    const response: AxiosResponse<PokemonEvolution> = await API.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function useGetPokemonEvolution(url?: string | null) {
  const { data, isLoading, isError } = useQuery(
    [url],
    () => getPokemonEvolution(url!),
    { enabled: !!url }
  );

  return { pokemonEvolution: data, isLoading, isError };
}
