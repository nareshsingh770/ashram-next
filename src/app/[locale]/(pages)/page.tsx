import { setRequestLocale } from "next-intl/server";
import Home from "@/components/atoms/Homepage";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Set the locale for this page
  setRequestLocale(locale);

  return <Home />;
}
