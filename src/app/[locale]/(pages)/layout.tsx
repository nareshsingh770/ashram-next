import { routing } from "@/i18n/routing";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "@/app/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
