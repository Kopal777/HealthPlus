import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "HealthPlus",
  description: "Find & Book Appointments!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#010814]">
        <div className={inter.className}>
          <Header/>
        </div>
        {children}
        </body>
    </html>
  );
}
