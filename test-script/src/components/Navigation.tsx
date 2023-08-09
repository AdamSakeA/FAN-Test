import pokeball from "/pokeball.png";
import Image from "./Image";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToOtherPage = (url: string = "/") => {
    navigate(url);
  };

  return (
    <nav
      className={`bg-white text-gray-700  top-0 left-0 right-0 shadow-lg z-[999999] ${
        isFixed ? "sticky " : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-0 py-4 flex justify-between items-center cursor-pointer">
        <div
          onClick={() => goToOtherPage()}
          className="flex items-center gap-2"
        >
          <Image src={pokeball} alt="test" className="w-[20px]" />
          <h1 className="font-bold">Pokemon</h1>
        </div>
        <div
          onClick={() => goToOtherPage()}
          className="flex items-center gap-2 cursor-pointer"
        >
          <h1 className="font-bold text-sm">Go To Pokedex</h1>
        </div>
      </div>
    </nav>
  );
}
