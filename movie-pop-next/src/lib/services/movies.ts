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