"use function"; // Asegurate de que diga "use client" arriba de todo
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaUserAlt, FaArrowLeft, FaHome, FaSearch } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';

export const NavbarMain = () => {
  const pathname = usePathname();
  // Extraemos la sesión y el estado de NextAuth
  const { data: session, status } = useSession(); 

  const isDetail = pathname.startsWith('/movie/');

  return (
    <nav className="bg-[#1F3950] h-[10vh] text-white flex items-center px-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Sección Autenticación */}
        <div className="flex items-center gap-4">
          {status === "loading" ? (
             // Un spinner chiquito mientras verifica si estás logueado
             <div className="w-8 h-8 rounded-full border-2 border-slate-500 border-t-amber-500 animate-spin"></div>
          ) : session?.user ? (
            <div className="flex items-center gap-3">
              {/* Usamos etiqueta <img> clásica para evitar el error de "unconfigured host" con los dominios de Google */}
              <img 
                src={session.user.image || ""} 
                alt="Avatar de usuario" 
                className="w-8 h-8 rounded-full border border-amber-500"
              />
              <div className="hidden lg:flex gap-3 text-sm items-center">
                <span className="text-slate-200 font-medium">
                  Hola, {session.user.name?.split(" ")[0]}
                </span>
                <button 
                  onClick={() => signOut()} 
                  className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  Salir <BiLogOutCircle />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <FaUserAlt className="text-xl text-slate-400" />
              <div className="hidden lg:flex gap-2 text-sm">
                <button 
                  onClick={() => signIn("google")} 
                  className="hover:text-amber-500 font-medium transition-colors"
                >
                  Entrar con Google
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sección Navegación */}
        <div className="flex gap-6 text-2xl">
          {isDetail ? (
            <Link href="/search" className="hover:text-amber-500 transition-colors">
              <FaArrowLeft />
            </Link>
          ) : (
            <>
              <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-amber-500' : 'hover:text-amber-500/70'}`}>
                <FaHome />
              </Link>
              <Link href="/search" className={`transition-colors ${pathname === '/search' ? 'text-amber-500' : 'hover:text-amber-500/70'}`}>
                <FaSearch />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};