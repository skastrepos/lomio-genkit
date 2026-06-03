import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lomio GenKit",
  description:
    "Open-source AI SaaS development framework for shipping a first AI result fast."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
