import Link from "next/link";
import { FaArrowLeft, FaCamera, FaMicrophone } from "react-icons/fa";
import { 
  FaFistRaised, FaMapMarkedAlt, FaUserNinja, FaChild, FaLaughBeam, 
  FaUserSecret, FaTools, FaTheaterMasks, FaBinoculars, FaHome, 
  FaMagic, FaUtensils, FaLandmark, FaGhost, FaBalanceScale, 
  FaStethoscope, FaMusic, FaSearch, FaLeaf, FaHeartbeat, 
  FaRocket, FaFutbol, FaSkull, FaSkullCrossbones, FaPlane, 
  FaBomb, FaHatCowboy, FaUserLock 
} from "react-icons/fa";

const ALL_CATEGORIES = [
  { id: "action", name: "Acción", icon: FaFistRaised, bg: "from-red-600 to-orange-500" },
  { id: "adult", name: "Adultos", icon: FaUserLock, bg: "from-fuchsia-900 to-pink-900" },
  { id: "adventure", name: "Aventura", icon: FaMapMarkedAlt, bg: "from-green-600 to-lime-500" },
  { id: "anime", name: "Anime", icon: FaUserNinja, bg: "from-red-500 to-rose-700" },
  { id: "children", name: "Infantil", icon: FaChild, bg: "from-yellow-300 to-orange-400" },
  { id: "comedy", name: "Comedia", icon: FaLaughBeam, bg: "from-yellow-400 to-amber-600" },
  { id: "crime", name: "Crimen", icon: FaUserSecret, bg: "from-zinc-700 to-neutral-900" },
  { id: "diy", name: "Hazlo tú mismo", icon: FaTools, bg: "from-orange-700 to-amber-800" },
  { id: "drama", name: "Drama", icon: FaTheaterMasks, bg: "from-purple-600 to-pink-500" },
  { id: "espionage", name: "Espionaje", icon: FaBinoculars, bg: "from-slate-700 to-slate-900" },
  { id: "family", name: "Familia", icon: FaHome, bg: "from-sky-400 to-blue-500" },
  { id: "fantasy", name: "Fantasía", icon: FaMagic, bg: "from-emerald-500 to-teal-400" },
  { id: "food", name: "Cocina", icon: FaUtensils, bg: "from-orange-500 to-red-500" },
  { id: "history", name: "Historia", icon: FaLandmark, bg: "from-amber-700 to-yellow-800" },
  { id: "horror", name: "Terror", icon: FaGhost, bg: "from-slate-800 to-stone-700" },
  { id: "legal", name: "Legal", icon: FaBalanceScale, bg: "from-stone-500 to-gray-600" },
  { id: "medical", name: "Médicos", icon: FaStethoscope, bg: "from-teal-600 to-emerald-700" },
  { id: "music", name: "Música", icon: FaMusic, bg: "from-pink-500 to-rose-600" },
  { id: "mystery", name: "Misterio", icon: FaSearch, bg: "from-indigo-600 to-blue-800" },
  { id: "nature", name: "Naturaleza", icon: FaLeaf, bg: "from-green-500 to-emerald-600" },
  { id: "romance", name: "Romance", icon: FaHeartbeat, bg: "from-rose-500 to-pink-400" },
  { id: "science-fiction", name: "Ciencia Ficción", icon: FaRocket, bg: "from-blue-600 to-cyan-500" },
  { id: "sports", name: "Deportes", icon: FaFutbol, bg: "from-sky-500 to-blue-600" },
  { id: "supernatural", name: "Sobrenatural", icon: FaSkull, bg: "from-violet-700 to-purple-900" },
  { id: "thriller", name: "Suspenso", icon: FaSkullCrossbones, bg: "from-stone-600 to-gray-800" },
  { id: "travel", name: "Viajes", icon: FaPlane, bg: "from-cyan-500 to-blue-500" },
  { id: "war", name: "Bélico", icon: FaBomb, bg: "from-red-800 to-red-950" },
  { id: "western", name: "Western", icon: FaHatCowboy, bg: "from-yellow-700 to-amber-900" },
  { id: "reality", name: "Reality", icon: FaCamera, bg: "from-pink-600 to-purple-600" },
  { id: "talk-show", name: "Talk Show", icon: FaMicrophone, bg: "from-blue-700 to-indigo-900" },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-6 py-10 min-h-[80vh]">
      <div className="flex items-center gap-4 mb-10">
        <Link 
          href="/" 
          className="p-3 bg-white/10 text-white rounded-full hover:bg-amber-500 hover:text-black transition-colors"
        >
          <FaArrowLeft />
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Todas las <span className="text-amber-500">Categorías</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {ALL_CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <Link 
              key={category.id} 
              href={`/category/${category.id}`}
              className="group relative h-28 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bg} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full blur-lg group-hover:bg-white/20 transition-colors"></div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-3 text-center">
                <Icon className="text-3xl mb-2 drop-shadow-md group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-bold tracking-wide drop-shadow-md leading-tight">
                  {category.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}