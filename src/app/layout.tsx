import type { Metadata } from "next";
import Link from 'next/link'
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Help clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul className="bg-green-500 w-full flex flex-row gap-4 items-center py-4 text-white font-semibold justify-center">
      <li>
        <Link href="/">Início</Link>
      </li>
      <li>
        <Link href="/reports">Relatórios</Link>
      </li>
      <li>
        <Link href="/patients">Pacientes</Link>
      </li>
      <li>
        <Link href="/employees">Funcionários</Link>
      </li>
    </ul> 

        {children}</body>
    </html>
  );
}
