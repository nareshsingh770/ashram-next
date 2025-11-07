"use client";

import { LOCALES } from "@/constant/appConstant";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    if (newLocale !== locale) {
      if (newLocale === "en") {
        // For English, redirect to root paths without locale prefix
        const segments = pathname.split("/");
        if (segments[1] && LOCALES.includes(segments[1] as any)) {
          // Remove locale prefix for English
          segments.splice(1, 1);
        }
        const newPath = segments.join("/") || "/";
        router.replace(newPath);
      } else {
        // For other locales, add locale prefix
        const segments = pathname.split("/");
        if (segments[1] && LOCALES.includes(segments[1] as any)) {
          // Replace existing locale
          segments[1] = newLocale;
        } else {
          // Add locale prefix
          segments.splice(1, 0, newLocale);
        }
        const newPath = segments.join("/");
        router.replace(newPath);
      }
    }
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="border p-2 rounded"
    >
      {LOCALES.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
