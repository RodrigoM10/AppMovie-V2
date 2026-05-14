import { NavbarMain } from "@/components/NavbarMain";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0f172a] min-h-screen">
        <Providers>
          <NavbarMain />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}