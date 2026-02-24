import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Astrominchu",
    template: "%s | Astrominchu",
  },
  description:
    "AstroMinchu aims to inspire people to marvel at the various astronomical events, galaxies, nebulas, and other wonders that grace our universe.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div class="bg-bgPrimary text-textPrimary font-body leading-relaxed">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
