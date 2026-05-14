"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Props {
  movie: {
    id: number;
    name: string;
    image?: { medium: string };
  };
  isInitiallyFavorite?: boolean;
}

export const FavoriteButton = ({ movie, isInitiallyFavorite = false }: Props) => {
  const { data: session } = useSession();
  const [isFavorite, setIsFavorite] = useState(isInitiallyFavorite);
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();

  if (!session) return null;

  const toggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault(); 
    
    if (loading) return;
    setLoading(true);

    setIsFavorite(!isFavorite);

    try {
        const res = await fetch("/api/favorites", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            movieId: movie.id,
            movieName: movie.name,
            image: movie.image?.medium || "",
            }),
        });
        
        const data = await res.json();
        
        if (data.error) {
                setIsFavorite(isFavorite);
            } else {
                router.refresh(); 
            }
            } catch (error) {
            setIsFavorite(isFavorite);
            } finally {
            setLoading(false);
            }
    };

  return (
    <button
      onClick={toggleFavorite}
      disabled={loading}
      className="absolute top-2 right-2 p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/90 transition-all z-20 shadow-lg"
    >
      {isFavorite ? (
        <FaHeart className="text-red-500 text-xl animate-pulse" />
      ) : (
        <FaRegHeart className="text-white text-xl" />
      )}
    </button>
  );
};