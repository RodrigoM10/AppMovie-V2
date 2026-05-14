import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/services/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { movieId, movieName, image } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });

    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_movieId: {
          userId: user.id,
          movieId: Number(movieId),
        },
      },
    });

    if (existingFavorite) {
      await prisma.favorite.delete({
        where: { id: existingFavorite.id },
      });
      return NextResponse.json({ message: "Removido de favoritos", isFavorite: false });
    } else {
      await prisma.favorite.create({
        data: {
          movieId: Number(movieId),
          movieName,
          image,
          userId: user.id,
        },
      });
      return NextResponse.json({ message: "Agregado a favoritos", isFavorite: true });
    }
  } catch (error) {
    console.error("Error en favoritos:", error);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}