import CardMovie from "@/components/CardMovie";
import { SearchForm } from "@/components/SearchForm";
import { getMovies } from "@/lib/services/movies";
import { prisma } from "@/lib/services/prisma";
import { getServerSession } from "next-auth";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>; 
}) {
  const { q } = await searchParams;
  const query = q || "";
  
  let movies = [];
  let favoriteMovieIds: number[] = [];

  if (query.length >= 2) {
    movies = await getMovies(query);
  }

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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-white text-3xl font-bold mb-8 text-center md:text-left">
        {query ? `Resultados para: ${query}` : "Explorar Películas"}
      </h1>

      <div className="mb-10">
        <SearchForm />
      </div>

      {movies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {movies.map((m: any, index: number) => {
            const isFav = favoriteMovieIds.includes(m.show.id);
            return (
              <CardMovie 
                key={m.show.id} 
                movie={m}
                isFavorite={isFav} // Ahora le pasamos true o false de verdad
                priority={index < 8} 
              />
            );
          })}
        </div>
      ) : (
        query && (
          <div className="text-center text-slate-400 mt-20">
            <p className="text-xl">No se encontraron resultados para "{query}"</p>
          </div>
        )
      )}
    </div>
  );
}