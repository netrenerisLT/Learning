import "./globals.css";
import Header from "@/components/main-header/header";

export const metadata = {
  title: "iFood",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
