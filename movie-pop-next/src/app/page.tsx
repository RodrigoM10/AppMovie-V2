import CoverFigure from "@/components/CoverFigure";


export default function HomePage() {
  return (
    // Flexbox de Tailwind: h-screen (toda la pantalla), d-flex, center...
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center">
        <CoverFigure />
        {/* Aquí podrías agregar un buscador rápido más adelante */}
      </div>
    </main>
  );
}