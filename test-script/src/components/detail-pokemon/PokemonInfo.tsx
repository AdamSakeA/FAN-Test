import { PokemonDetail } from "@/types/Pokemon";
import FadeUp from "../animations/FadeUp";

interface PokemonInfoProps {
  pokemonDetail?: PokemonDetail;
}

export default function PokemonInfo({ pokemonDetail }: PokemonInfoProps) {
  return (
    <FadeUp className="w-[100%]">
      <div className="bg-white p-3 rounded-md shadow-lg">
        <h1 className="font-bold text-lg">Pokemon Info</h1>
        <h1 className="font-light text-sm">Height : {pokemonDetail?.height}</h1>
        <h1 className="font-light text-sm">Weight : {pokemonDetail?.weight}</h1>
      </div>
    </FadeUp>
  );
}
