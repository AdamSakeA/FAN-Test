import { PokemonDetail } from "@/types/Pokemon";
import { deleteSymbol } from "@/utils/DeleteSymbols";
import pokeball from "/pokeball.png";
import Image from "../Image";
import { useNavigate } from "react-router-dom";

interface CardEvolutionProps {
  payload?: PokemonDetail;
}

export default function CardEvolution({ payload }: CardEvolutionProps) {
  const navigate = useNavigate();
  const pokemonImage =
    payload?.sprites.front_shiny || payload?.sprites.front_default || pokeball;

  const goToOtherPage = (pokemonName?: string) => {
    const url = `/detail/${pokemonName}`;
    navigate(url);
  };
  return (
    <div
      onClick={() => goToOtherPage(payload?.name)}
      className=" bg-gray-100 mb-4 flex items-center cursor-pointer"
    >
      <Image src={pokemonImage} alt={payload?.name} className="w-[100px]" />
      <div>
        <h1 className="font-bold hover:text-blue-400">
          {deleteSymbol(payload?.name)}
        </h1>
        <div className="flex gap-2">
          {payload?.types.map((item, i) => {
            return (
              <p key={i} className=" font-light text-sm">
                {deleteSymbol(item.type.name)}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
