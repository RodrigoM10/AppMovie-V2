const BASE_URL = 'https://api.tvmaze.com';

export async function getMovies(query: string) {
  const res = await fetch(`${BASE_URL}/search/shows?q=${query}`);
  if (!res.ok) throw new Error('Error al traer películas');
  return res.json(); 
}

export async function getMovieDetail(id: string) {
  const res = await fetch(`${BASE_URL}/shows/${id}`);
  if (!res.ok) throw new Error('Error al traer detalle');
  return res.json();
}

export const getDefaultMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}/shows`);
    if (!res.ok) throw new Error("Error fetching default movies");
    
    const data = await res.json();
  
    return data.slice(0, 100).map((show: any) => ({
      show: show
    }));
  } catch (error) {
    console.error("Error en getDefaultMovies:", error);
    return [];
  }
};