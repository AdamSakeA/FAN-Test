import CardPokemon from "@/components/list-pokemon/CardPokemon";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";
// import { Pokemon } from "@/types/Pokemon";

interface ListCardProps {
  payload: string;
}

export default function ListCard({ payload }: ListCardProps) {
  const { pokemonDetail, isLoading } = useGetPokemonDetail(payload);

  const showPokemonCard = <CardPokemon payload={pokemonDetail} />;
  if (isLoading) return <h1>Loading..</h1>;

  return <>{showPokemonCard}</>;
}
