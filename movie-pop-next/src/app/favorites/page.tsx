import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/services/prisma";
import CardMovie from "@/components/CardMovie";
import { redirect } from "next/navigation";

export default async function FavoritesPage() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      favorites: {
        orderBy: { createdAt: "desc" } 
      }
    },
  });

  const favorites = user?.favorites || [];

  const formattedMovies = favorites.map((fav) => ({
    show: {
      id: fav.movieId,
      name: fav.movieName,
      image: { medium: fav.image },
    },
  }));

  return (
    <div className="container mx-auto p-6 min-h-[80vh]">
      <h1 className="text-white text-3xl font-bold mb-8 flex items-center gap-3">
        ❤️ Mis Favoritos
      </h1>
      {formattedMovies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {formattedMovies.map((m: any, index: number) => (
            <CardMovie 
              key={m.show.id} 
              movie={m} 
              isFavorite={true}
              priority={index < 10} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-slate-400 mt-20">
          <p className="text-xl">Todavía no tenés películas en tu lista.</p>
          <p className="mt-2 text-sm">Buscá tus favoritas y tocale el corazón.</p>
        </div>
      )}
    </div>
  );
}