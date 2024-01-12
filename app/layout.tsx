import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { HOME_PAGE_ROUTE } from "@/app/clientRoutes";

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
            <p aria-label="Navigate home">home</p>
          </Link>
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
