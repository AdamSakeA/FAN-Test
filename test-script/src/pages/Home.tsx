import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import CardPokemon from "@/components/list-pokemon/CardPokemon";
import ListCard from "@/containers/list-pokemon/ListCard";
import StickySide from "@/containers/list-pokemon/StickySide";
import useGetAllPokemon from "@/hooks/useGetAllPokemon";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";
import { useState } from "react";

function Home() {
  const [offset, setOffset] = useState(0);
  const [pokemonSearch, setPokemonSearch] = useState<string | undefined>();
  const { pokemonList } = useGetAllPokemon(offset);
  const { pokemonDetail } = useGetPokemonDetail(pokemonSearch!);

  return (
    <Layout title="List Pokemon">
      <div className="flex flex-col-reverse md:grid grid-cols-8 gap-x-3">
        <div className="col-span-5">
          <div className="flex flex-wrap gap-8">
            {!pokemonSearch &&
              pokemonList &&
              pokemonList.map((item) => <ListCard payload={item.name} />)}
            {pokemonSearch && <CardPokemon payload={pokemonDetail} />}
          </div>
          <Pagination setOffset={setOffset} />
        </div>
        <aside className="col-span-3">
          <StickySide setPokemonSearch={setPokemonSearch} />
        </aside>
      </div>
    </Layout>
  );
}

export default Home;
