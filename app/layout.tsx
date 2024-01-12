import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { HOME_PAGE_ROUTE } from "@/app/clientRoutes";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza Finder",
  description: "Critical pizza finding app closest to Livefront.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <Link href={HOME_PAGE_ROUTE}>
            <h1 aria-label="GioMaps, navigate home">GioMaps</h1>
          </Link>
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
