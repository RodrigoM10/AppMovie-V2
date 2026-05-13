import CardMovie from "@/components/CardMovie";
import { SearchForm } from "@/components/SearchForm";
import { getMovies } from "@/lib/services/movies";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>; 
}) {
  const { q } = await searchParams;
  const query = q || "";
  
  let movies = [];

  if (query.length >= 2) {
    movies = await getMovies(query);
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
          {movies.map((m: any, index: number) => (
            <CardMovie 
              key={m.show.id} 
              movie={m} 
              priority={index < 8} // Las primeras 8 cargan instantáneo
            />
          ))}
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