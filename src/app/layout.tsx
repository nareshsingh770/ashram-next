import "@/app/globals.css";
import { Poppins } from "next/font/google";
import StoreProvider from "@/store/StoreProvider";
import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
