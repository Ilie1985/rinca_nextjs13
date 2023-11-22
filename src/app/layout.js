import "./globals.css";
import HomeHeader from "@/components/HomeHeader";

export const metadata = {
  title: "Rinca",
  description: "Rinca app created using nextjs 13 ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-400">
        <HomeHeader/>
        {children}</body>
    </html>
  );
}
