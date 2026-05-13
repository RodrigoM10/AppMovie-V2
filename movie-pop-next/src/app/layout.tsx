import { NavbarMain } from "@/components/NavbarMain";
import "./globals.css"; // Asegurate de que Tailwind esté acá

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0f172a] min-h-screen"> 
        {/* bg-[#0f172a] es un azul oscuro muy "cinematográfico" */}
        <NavbarMain />
        <main>{children}</main>
      </body>
    </html>
  );
}