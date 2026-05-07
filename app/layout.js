import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartSlider from "../components/CartSlider";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Baby Parents Club | Powered by BabyTrend",
  description: "Baby Parents Club nace para ofrecer a padres y madres en Perú un lugar de encuentro, aprendizaje y apoyo. Con el respaldo de Baby Trend.",
  keywords: ["BabyTrend", "club de padres", "Perú", "cochecitos para bebes", "sillas de auto", "maternidad"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-PE" className={`${fredoka.variable} ${quicksand.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartSlider />
      </body>
    </html>
  );
}
