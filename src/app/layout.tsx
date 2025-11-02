import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import StoreProvider from "@/store/StoreProvider";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import Home from "@/components/atoms/Homepage";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
