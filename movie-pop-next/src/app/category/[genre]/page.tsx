import CardMovie from "@/components/CardMovie";
import { getMoviesByCategory } from "@/lib/services/movies";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/services/prisma";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Pagination } from "@/components/Pagination";

const ITEMS_PER_PAGE = 12;

const genreTranslations: Record<string, string> = {
  action: "Acción", adult: "Adultos", adventure: "Aventura", anime: "Anime",
  children: "Infantil", comedy: "Comedia", crime: "Crimen", diy: "Hazlo tú mismo",
  drama: "Drama", espionage: "Espionaje", family: "Familia", fantasy: "Fantasía",
  food: "Cocina", history: "Historia", horror: "Terror", legal: "Legal",
  medical: "Médicos", music: "Música", mystery: "Misterio", nature: "Naturaleza",
  romance: "Romance", "science-fiction": "Ciencia Ficción", sports: "Deportes",
  supernatural: "Sobrenatural", thriller: "Suspenso", travel: "Viajes",
  war: "Bélico", western: "Western",reality: "Reality Shows", "talk-show": "Talk Shows"
};

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ genre: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { genre } = await params;
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  
  const allCategoryMovies = await getMoviesByCategory(genre);

  // --- LÓGICA DE PAGINACIÓN ---
  const totalMovies = allCategoryMovies.length;
  const totalPages = Math.ceil(totalMovies / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedMovies = allCategoryMovies.slice(startIndex, endIndex);

  let favoriteMovieIds: number[] = [];
  const session = await getServerSession();
  
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { favorites: { select: { movieId: true } } }, 
    });
    if (user?.favorites) {
      favoriteMovieIds = user.favorites.map((fav) => fav.movieId);
    }
  }

  const tituloEspanol = genreTranslations[genre.toLowerCase()] || genre;

  return (
    <div className="container mx-auto p-6 min-h-[80vh]">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/" 
          className="p-3 bg-white/10 text-white rounded-full hover:bg-amber-500 hover:text-black transition-colors"
        >
          <FaArrowLeft />
        </Link>
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          Series de <span className="text-amber-500 capitalize">{tituloEspanol}</span>
        </h1>
      </div>

      {paginatedMovies.length > 0 ? (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
            {paginatedMovies.map((m: any, index: number) => (
                <CardMovie 
                key={m.show.id} 
                movie={m}
                isFavorite={favoriteMovieIds.includes(m.show.id)}
                priority={index < 10} 
                />
                ))}
            </div>
            <div className="mt-12 mb-8">
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
            />
          </div>
        </>
      ) : (
        <div className="text-center text-slate-400 mt-20">
          <p className="text-xl">No encontramos series en esta categoría por ahora.</p>
        </div>
      )}
    </div>
  );
}