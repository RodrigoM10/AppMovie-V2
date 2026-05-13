import Image from 'next/image';
import cinemaImg from '../public/assets/cinema.png'; 

const CoverFigure = () => {
  return (
    <figure className="animate-fade-in">
    <Image 
        src={cinemaImg} 
        alt="Cinema Logo" 
        width={500} 
        height={300} 
        priority 
        className="max-w-[500px] w-auto h-auto" 
      />
      <h1 className="text-4xl font-bold mt-4 text-slate-800">
        MoviePop
      </h1>
    </figure>
  );
}

export default CoverFigure;