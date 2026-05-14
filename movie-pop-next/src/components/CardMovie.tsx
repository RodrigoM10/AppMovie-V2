import Image from 'next/image';
import Link from 'next/link';
import defaultImage from '../public/assets/MovieDefaultImage.png'
import { FavoriteButton } from './FavoriteButton';

interface MovieProps {
  movie: {
    show: {
      id: number;
      name: string;
      image?: { medium: string };
    };
  };
  isFavorite?: boolean;
  priority?: boolean;
}

const CardMovie = ({ movie, priority = false, isFavorite = false }: MovieProps) => {
  const { show } = movie;
  
  const movieImage = show.image?.medium || defaultImage;

  return (
    <div className="w-full max-w-[300px] bg-transparent transition-transform duration-300 hover:scale-105">
      <FavoriteButton isInitiallyFavorite={isFavorite} movie={show} />
      <Link href={`/movie/${show.id}`} className="no-underline group">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={movieImage}
            alt={show.name}
            width={300}
            height={450}
            className="w-full h-[250px] md:h-[320px] object-cover"
          />
          
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        </div>
        
        <h5 className="py-2 text-white text-center font-medium text-lg truncate">
          {show.name}
        </h5>
      </Link>
    </div>
  );
};

export default CardMovie;