import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { API } from "../../config/API";
import { PokemonDetail } from "@/types/Pokemon";

const getPokemonByDetail = async (name: string): Promise<PokemonDetail> => {
  try {
    const response: AxiosResponse<PokemonDetail> = await API.get(
      `/pokemon/${name}/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function useGetPokemonDetail(name: string) {
  const { data, isLoading, isError } = useQuery([`/pokemon/${name}`], () =>
    getPokemonByDetail(name)
  );

  return {
    pokemonDetail: data,
    isLoading,
    isError,
  };
}
