import Link from 'next/link';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#152636] text-slate-300 py-8 mt-auto border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white tracking-wider flex items-center gap-2 justify-center md:justify-start">
            🎬 MoviePop 
          </h3>
          <div  className="text-center">
            <span className="text-amber-500 text-sm border border-amber-500 px-2 py-0.5 rounded-md">TV Edition</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-sm flex items-center gap-1">
            Desarrollado con <FaHeart className="text-red-500" /> para los fanáticos de las series.
          </p>
          <p className="text-xs opacity-50 mt-1">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        <div className="flex gap-4 text-2xl">
          <Link href="#" className="hover:text-white transition-colors">
            <FaGithub />
          </Link>
          <Link href="#" className="hover:text-amber-500 transition-colors">
            <FaLinkedin />
          </Link>
        </div>

      </div>
    </footer>
  );
};