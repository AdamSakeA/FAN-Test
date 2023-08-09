import { AbilityDetail } from "@/types/Ability";
import { deleteSymbol } from "@/utils/DeleteSymbols";
import FadeUp from "../animations/FadeUp";

interface CardAbilityProps {
  payload?: AbilityDetail;
}

export default function CardAbility({ payload }: CardAbilityProps) {
  const abilityLang = payload?.effect_entries?.filter(
    (item) => item.language.name === "en"
  );

  const handleAbility =
    abilityLang && abilityLang.length !== 0
      ? abilityLang[0].effect
      : "Effect is empty";

  return (
    <FadeUp>
      <h2 className=" font-bold text-md">{deleteSymbol(payload?.name)}</h2>
      <p className="font-light text-sm">{handleAbility}</p>
    </FadeUp>
  );
}
