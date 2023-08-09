import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { API } from "../../config/API";
import { AbilityDetail } from "@/types/Ability";

const getAbilityDetail = async (name: string): Promise<AbilityDetail> => {
  try {
    const response: AxiosResponse<AbilityDetail> = await API.get(
      `/ability/${name}/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default function useGetAbilityDetail(name: string) {
  const { data, isLoading, isError } = useQuery(
    [`/ability/${name}`],
    () => getAbilityDetail(name),
    {
      enabled: !!name,
    }
  );

  return {
    ability: data,
    isLoading,
    isError,
  };
}
