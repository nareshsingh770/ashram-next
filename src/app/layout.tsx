import "@/app/globals.css";
import StoreProvider from "@/store/StoreProvider";
import AuthProvider from "@/components/AuthProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Poppins, Lora } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // For root layout, default to English
  const locale = "en";
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${poppins.variable} ${lora.variable}`}>
      <body>
        <StoreProvider>
          <AuthProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
