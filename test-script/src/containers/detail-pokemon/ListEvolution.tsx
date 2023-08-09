import { PokemonEvolution } from "@/types/Pokemon";
import Evolution from "./Evolution";

interface ListEvolutionProps {
  payload?: PokemonEvolution;
}

export default function ListEvolution({ payload }: ListEvolutionProps) {
  const arrEvolve: string[] = [];

  const chainning = payload?.chain;
  if (chainning) {
    arrEvolve.push(chainning.species.name || "");

    const firstChain = chainning.evolves_to;
    const first = firstChain?.map((item) => item.species.name);
    if (first && first.length) {
      arrEvolve.push(first.join(", "));
    }

    const secondChain = firstChain?.flatMap((item) => item.evolves_to);
    const second = secondChain?.map((subItem) => subItem.species.name);
    if (second && second.length) {
      arrEvolve.push(second.join(", "));
    }
  }

  const showEvolution = arrEvolve.map((item) => <Evolution payload={item} />);

  return (
    <div className="bg-white w-[100%] md:w-[50%] rounded-lg shadow-lg p-5 my-5">
      <h1 className="font-bold text-lg text-center mb-3">Evolution Species</h1>
      {showEvolution}
    </div>
  );
}
