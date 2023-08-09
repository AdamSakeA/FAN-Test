import { useEffect, useState } from "react";
import Abilities from "./Abilities";
import { AbilityPokemon } from "@/types/Pokemon";
import { deleteSymbol } from "@/utils/DeleteSymbols";
import FadeUp from "@/components/animations/FadeUp";

interface ListAbilitiesProps {
  payload?: AbilityPokemon[];
}

export default function ListAbilities({ payload }: ListAbilitiesProps) {
  const [abilityName, setAbilityName] = useState<string>();
  const displayAbilities = <Abilities abilityName={abilityName} />;

  useEffect(() => {
    if (payload) setAbilityName(payload[0].ability.name);
  }, [payload]);

  const handleDisplay = (name: string) => {
    setAbilityName(name);
  };

  return (
    <FadeUp className="w-[100%] h-[60%] bg-white p-3 rounded-lg shadow-lg">
      <div className="flex gap-4 mb-2">
        {payload?.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => handleDisplay(item.ability.name)}
              className={`${
                abilityName === item.ability.name ? "text-blue-700" : ""
              } font-bold`}
            >
              {deleteSymbol(item.ability.name)}
            </button>
          );
        })}
      </div>
      {displayAbilities}
    </FadeUp>
  );
}
