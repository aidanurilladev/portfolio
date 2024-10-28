import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import LayoutPage from "@/components/layout/LayoutPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aida ",
  description:
    "I am a passionate front-end developer with experience in modern web technologies.",
  keywords: "front-end developer, Aida, Aida Nurilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
