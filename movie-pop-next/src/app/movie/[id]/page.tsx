
import { getMovieDetail } from "@/lib/services/movies";
import Image from "next/image";

export default async function MovieDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params; // Await aquí
  const movie = await getMovieDetail(id);
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={movie?.image?.original || "/assets/MovieDefaultImage.png"}
          alt="background"
          fill
          className="object-cover opacity-20 blur-xl scale-110"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          {/* Columna Izquierda: Poster y Rating */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <div className="shadow-2xl rounded-xl overflow-hidden border border-white/10">
              <Image
                src={movie?.image?.original || "/assets/MovieDefaultImage.png"}
                alt={movie.name}
                width={350}
                height={500}
                className="w-[20rem] h-auto object-cover"
              />
            </div>
            
            {/* Rating Simplificado (puedes usar una librería o estrellas manuales) */}
            <div className="bg-black/60 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20">
              <span className="text-yellow-400 text-xl font-bold">
                ⭐ {movie?.rating?.average ? (movie.rating.average / 2).toFixed(1) : "N/A"} / 5
              </span>
            </div>
          </div>

          {/* Columna Derecha: Información */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {movie.name}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8 text-sm font-medium">
              {movie.genres?.map((g: string) => (
                <span key={g} className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30">
                  {g}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-slate-300 text-lg">
              <p><span className="text-white font-bold">Lenguaje:</span> {movie.language}</p>
              <p><span className="text-white font-bold">Estreno:</span> {movie.premiered}</p>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 italic">Sinopsis</h2>
                <div 
                  className="leading-relaxed text-justify prose prose-invert"
                  dangerouslySetInnerHTML={{ __html: movie.summary }} 
                />
              </div>

              {movie.network && (
                <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-3">¿Dónde ver?</h3>
                  <p className="text-slate-400">
                    {movie.network.name} ({movie.network.country?.name})
                  </p>
                  {movie.officialSite && (
                    <a 
                      href={movie.officialSite} 
                      target="_blank" 
                      className="inline-block mt-4 text-amber-400 hover:text-amber-300 underline underline-offset-4"
                    >
                      Visitar Sitio Oficial
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}