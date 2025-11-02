import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Home from "@/components/atoms/Homepage";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <Home />;
}

// function HomePageContent() {
//   const t = useTranslations("home");

//   return (
//     <main>
//       <h1>{t("title")}</h1>
//       <p>{t("description")}</p>
//     </main>
//   );
// }
