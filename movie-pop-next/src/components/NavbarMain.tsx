"use client"; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserAlt, FaArrowLeft, FaHome, FaSearch } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';

export const NavbarMain = () => {
  const pathname = usePathname();
  const isAuthenticated = false; 

  const isDetail = pathname.startsWith('/movie/');

  return (
    <nav className="bg-[#1F3950] h-[10vh] text-white flex items-center px-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Sección Autenticación */}
        <div className="flex items-center gap-4">
          <FaUserAlt />
          <div className="hidden lg:flex gap-2 text-sm">
            {isAuthenticated ? (
              <button className="flex items-center gap-1 hover:text-amber-500">
                Logout <BiLogOutCircle />
              </button>
            ) : (
              <>
                <Link href="/login" className="hover:text-amber-500">Login</Link>
                <span>/</span>
                <Link href="/register" className="hover:text-amber-500">Register</Link>
              </>
            )}
          </div>
        </div>

        {/* Sección Navegación */}
        <div className="flex gap-6 text-2xl">
          {isDetail ? (
            <Link href="/search" className="hover:text-amber-500">
              <FaArrowLeft />
            </Link>
          ) : (
            <>
              <Link href="/" className={`${pathname === '/' ? 'text-amber-500' : ''}`}>
                <FaHome />
              </Link>
              <Link href="/search" className={`${pathname === '/search' ? 'text-amber-500' : ''}`}>
                <FaSearch />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};