"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Usamos un debounce para no saturar la API en cada teclazo
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    router.push(`/search?${params.toString()}`);
  }, 500);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <input
        type="search"
        placeholder="Buscar serie o show..."
        defaultValue={searchParams.get('q')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full p-3 bg-[#294056] text-white rounded-lg border-none focus:ring-2 focus:ring-[#dbf6ff] outline-none transition-all"
      />
    </div>
  );
};