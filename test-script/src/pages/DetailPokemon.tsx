import Layout from "@/components/Layout";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";
import { deleteSymbol } from "@/utils/DeleteSymbols";
import { useParams } from "react-router-dom";
import Image from "@/components/Image";
import pokeball from "/pokeball.png";
import ListAbilities from "@/containers/detail-pokemon/ListAbilities";
import HorizontalChart from "@/components/charts/HorizontalChart";
import useGetPokemonSpecies from "@/hooks/useGetPokemonSpecies";
import useGetPokemonEvolution from "@/hooks/useGetPokemonEvolution";
import PokemonInfo from "@/components/detail-pokemon/PokemonInfo";
import ListEvolution from "@/containers/detail-pokemon/ListEvolution";

export default function DetailPokemon() {
  const { id } = useParams();
  const { pokemonDetail } = useGetPokemonDetail(id!);
  const { pokemonSpecies } = useGetPokemonSpecies(id!);
  const pokemonSpeciesUrl = pokemonSpecies?.evolution_chain.url;
  const { pokemonEvolution } = useGetPokemonEvolution(pokemonSpeciesUrl);

  const imagePokemon =
    pokemonDetail?.sprites.front_default ||
    pokemonDetail?.sprites.front_shiny ||
    pokeball;

  console.log(pokemonEvolution);
  return (
    <Layout title={`${pokemonDetail?.name}`}>
      <div className="flex flex-col gap-2 md:flex-row">
        {pokemonDetail && (
          <Image
            src={imagePokemon}
            alt={pokemonDetail?.name}
            className="w-[300px] h-[300px]"
          />
        )}
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-5xl mb-5">
              {deleteSymbol(pokemonDetail?.name)}
            </h1>
            <PokemonInfo pokemonDetail={pokemonDetail} />
          </div>
          <ListAbilities payload={pokemonDetail?.abilities} />
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <HorizontalChart payload={pokemonDetail?.stats} />
        <ListEvolution payload={pokemonEvolution} />
      </div>
    </Layout>
  );
}
