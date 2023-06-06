import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Tutorial",
  description: "Learning to work with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
