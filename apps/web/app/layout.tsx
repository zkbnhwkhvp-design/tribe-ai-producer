import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tribe GG OS | AI Creator Operating System",
  description: "Meet Your AI Production Team. Tribe GG OS helps creators plan, produce, broadcast, publish, and grow."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
