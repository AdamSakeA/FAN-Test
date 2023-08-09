import CardAbility from "@/components/detail-pokemon/CardAbility";
import useGetAbilityDetail from "@/hooks/useGetAbilityDetail";

interface AbilitiesProps {
  abilityName?: string;
}

export default function Abilities({ abilityName }: AbilitiesProps) {
  const { ability, isLoading } = useGetAbilityDetail(abilityName!);

  const showCardAbility = <CardAbility payload={ability} />;

  if (isLoading) return <h1>Loading...</h1>;

  return <>{showCardAbility}</>;
}
