import { Dispatch, SetStateAction } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface PaginationProps {
  setOffset: Dispatch<SetStateAction<number>>;
  //   setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  setOffset,
}: //   setCurrentPage,
PaginationProps) {
  const nextPage = () => {
    setOffset((prevOffset) => prevOffset + 20);
    // setCurrentPage((currentPage) => currentPage + 1);
  };
  const previosPage = () => {
    setOffset((prevOffset) => prevOffset - 20);
    // setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <div className="flex gap-8 mt-[50px]">
      <div
        onClick={previosPage}
        className="flex items-center gap-1 cursor-pointer"
      >
        <AiFillCaretLeft />
        <button>Previous</button>
      </div>
      <div
        onClick={nextPage}
        className="flex items-center gap-1 cursor-pointer"
      >
        <button>Next</button>
        <AiFillCaretRight />
      </div>
    </div>
  );
}
