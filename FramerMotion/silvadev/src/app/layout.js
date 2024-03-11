import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SilvaDev - Rooted in Digital",
  description: "Let us guide you through the digital forest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen textParagprah">
          <div className="h-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <Header />
          </div>
          <div className="h-[calc(100vh-5rem)] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">{children}</div>
        </div>
      </body>
    </html>
  );
}
