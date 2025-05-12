import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const getOutfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const getOvo = Ovo({
  variable: "--font-ovo",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mehrnaz Vaziri | Frontend developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${getOutfit.variable} ${getOvo.variable} antialiased leading-8 overflow-x-hidden bg-white text-black dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
