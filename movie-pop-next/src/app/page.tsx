import Link from "next/link";
import { FaFistRaised, FaLaughBeam, FaTheaterMasks, FaRocket, FaGhost, FaHeartbeat, FaMagic, FaPencilRuler, FaUserSecret, FaMapMarkedAlt, FaSearch, FaUserNinja, FaSkullCrossbones, FaFutbol } from "react-icons/fa";


const CATEGORIES = [
  { id: "action", name: "Acción", icon: FaFistRaised, bg: "from-red-600 to-orange-500" },
  { id: "comedy", name: "Comedia", icon: FaLaughBeam, bg: "from-yellow-400 to-amber-600" },
  { id: "drama", name: "Drama", icon: FaTheaterMasks, bg: "from-purple-600 to-pink-500" },
  { id: "science-fiction", name: "Ciencia Ficción", icon: FaRocket, bg: "from-blue-600 to-cyan-500" },
  { id: "horror", name: "Terror", icon: FaGhost, bg: "from-slate-800 to-stone-700" },
  { id: "romance", name: "Romance", icon: FaHeartbeat, bg: "from-rose-500 to-pink-400" },

  { id: "crime", name: "Crimen", icon: FaUserSecret, bg: "from-zinc-700 to-neutral-900" },
  { id: "sports", name: "Deportes", icon: FaFutbol, bg: "from-green-600 to-lime-500" },
  { id: "anime", name: "Anime", icon: FaUserNinja, bg: "from-red-500 to-rose-700" },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      
      {/* BANNER PRINCIPAL HORIZONTAL */}
      <div className="relative w-full h-[30vh] min-h-[250px] rounded-3xl overflow-hidden shadow-2xl mb-16 group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3950] to-amber-900 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>

        <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 text-white">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl md:text-6xl">🎬</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
              Series & Tv Pop
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mt-4 font-light border-l-4 border-amber-500 pl-4">
            Explorá el catálogo definitivo de series, documentales y shows de TV. 
            Encontrá tu próxima maratón.
          </p>
        </div>
      </div>

      {/* SECCIÓN DE CATEGORÍAS */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            Explorar por Categoría <span className="text-amber-500">📺</span>
          </h2>
          <Link 
            href="/categories" 
            className="text-amber-500 hover:text-amber-400 font-medium transition-colors flex items-center gap-2 group"
          >
            Ver todas las categorías 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.id} 
                href={`/category/${category.id}`}
                className="group relative h-40 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bg} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
                <div className="absolute -left-6 -bottom-6 w-20 h-20 bg-black/10 rounded-full blur-lg"></div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
                  <Icon className="text-5xl mb-3 drop-shadow-md group-hover:scale-110 transition-transform" />
                  <span className="text-xl font-bold tracking-wide drop-shadow-md">
                    {category.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}