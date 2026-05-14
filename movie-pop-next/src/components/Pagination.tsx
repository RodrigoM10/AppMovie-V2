import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  currentPage: number;
  totalPages: number;
  query: string;
}

export const Pagination = ({ currentPage, totalPages, query }: Props) => {
  if (totalPages <= 1) return null;

  const createPageURL = (pageNumber: number | string) => {
    return `/search?q=${query}&page=${pageNumber}`;
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <Link
        href={createPageURL(currentPage - 1)}
        className={`p-3 rounded-full bg-[#1F3950] text-white transition-all ${
          currentPage <= 1 ? "opacity-30 pointer-events-none" : "hover:bg-amber-500"
        }`}
      >
        <FaChevronLeft />
      </Link>

      <div className="flex items-center gap-2">
        <span className="text-slate-400 text-sm">Página</span>
        <span className="text-white font-bold bg-amber-500/20 px-3 py-1 rounded-md border border-amber-500/50">
          {currentPage}
        </span>
        <span className="text-slate-400 text-sm">de {totalPages}</span>
      </div>

      <Link
        href={createPageURL(currentPage + 1)}
        className={`p-3 rounded-full bg-[#1F3950] text-white transition-all ${
          currentPage >= totalPages ? "opacity-30 pointer-events-none" : "hover:bg-amber-500"
        }`}
      >
        <FaChevronRight />
      </Link>
    </div>
  );
};