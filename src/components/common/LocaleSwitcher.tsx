"use client";

import { LOCALES } from "@/constant/appConstant";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

// ignore @typescript-eslint/no-explicit-any

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    if (newLocale !== locale) {
      const segments = pathname.split("/");
      if (segments[1] && LOCALES.includes(segments[1] as any)) {
        segments[1] = newLocale;
      } else {
        segments.splice(1, 0, newLocale);
      }
      const newPath = segments.join("/");
      router.replace(newPath);
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
