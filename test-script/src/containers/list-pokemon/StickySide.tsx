import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

interface StickySideProps {
  setPokemonSearch: Dispatch<SetStateAction<string | undefined>>;
}

export default function StickySide({ setPokemonSearch }: StickySideProps) {
  const [search, setSearch] = useState<string>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOnClick = () => {
    setPokemonSearch(search?.toLowerCase());
  };

  return (
    <div className="sticky top-[110px] mb-[100px]">
      <div className="bg-white shadow-lg rounded-md px-4 py-3 gap-2 flex">
        <IoSearchCircleSharp className="text-3xl" />
        <input
          className=" bg-transparent w-full outline-none "
          placeholder="Search pokemon"
          value={search}
          onChange={handleInputChange}
        />
        <button
          onClick={() => handleOnClick()}
          className="shadow-lg px-4 py-1 hover:text-blue-400"
        >
          Search
        </button>
      </div>
    </div>
  );
}
