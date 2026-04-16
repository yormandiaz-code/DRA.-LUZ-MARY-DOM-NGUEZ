import type { Metadata } from "next";
import "./globals.css"; // Asegúrate de tener este archivo o créalo vacío

export const metadata: Metadata = {
  title: "Dra. Luz Domínguez | Estética Dental",
  description: "Diseño de sonrisa y estética dental avanzada en Barranquilla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}