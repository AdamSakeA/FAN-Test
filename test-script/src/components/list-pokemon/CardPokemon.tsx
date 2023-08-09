import { PokemonDetail } from "@/types/Pokemon";
import { deleteSymbol } from "@/utils/DeleteSymbols";
import { useNavigate } from "react-router-dom";
import pokeball from "/pokeball.png";
import Image from "../Image";
import FadeUp from "../animations/FadeUp";

interface CardPokemonProps {
  payload?: PokemonDetail;
}

export default function CardPokemon({ payload }: CardPokemonProps) {
  const navigate = useNavigate();

  const navigateToDetailPokemon = (pokemonName?: string) => {
    const url = `/detail/${pokemonName}`;
    navigate(url);
  };

  return (
    <FadeUp>
      <div
        className=" cursor-pointer p-[30px] bg-white rounded-lg shadow-lg flex flex-col justify-center items-center w-[150px] "
        onClick={() => navigateToDetailPokemon(payload?.name)}
      >
        {payload && (
          <Image
            src={
              payload.sprites.front_shiny ||
              payload.sprites.front_default ||
              pokeball
            }
            alt={"test"}
            className="w-[100px]"
          />
        )}
        <h1 className="font-bold text-lg">{deleteSymbol(payload?.name)}</h1>
        <div className="flex gap-2 mt-4">
          {payload?.types.map((item, i) => {
            return (
              <p key={i} className="text-sm">
                {deleteSymbol(item.type.name)}
              </p>
            );
          })}
        </div>
      </div>
    </FadeUp>
  );
}
