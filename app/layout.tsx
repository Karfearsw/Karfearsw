import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Credit Catalyst AI",
  description: "AI-powered credit repair and financial intelligence MVP"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
