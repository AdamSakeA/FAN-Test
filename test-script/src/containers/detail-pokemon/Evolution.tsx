import CardEvolution from "@/components/detail-pokemon/CardEvolution";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";

interface EvolutionProps {
  payload?: string;
}

export default function Evolution({ payload }: EvolutionProps) {
  const { pokemonDetail, isLoading } = useGetPokemonDetail(payload as string);

  const showCardEvolution = <CardEvolution payload={pokemonDetail} />;

  if (isLoading) return <h1>Loading..</h1>;

  return <div>{showCardEvolution}</div>;
}
