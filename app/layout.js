import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div class="bg-bgPrimary text-textPrimary font-body leading-relaxed">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
