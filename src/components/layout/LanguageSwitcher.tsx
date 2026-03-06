"use client";

import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { locales, type Locale } from "@/i18n/routing";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ua: "UA",
  ru: "RU",
  ar: "AR",
};

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = (params.locale as Locale) || "en";

  const switchLocale = (locale: Locale) => {
    router.replace(pathname, { locale });
    setOpen(false);
  };

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/8 transition-all duration-200"
      >
        {localeLabels[currentLocale]}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.12 }}
            className="absolute top-full end-0 mt-2 rounded-xl py-1.5 min-w-[80px] bg-dark-secondary/95 backdrop-blur-xl border border-white/8 shadow-xl shadow-black/30 overflow-hidden"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`block w-full text-start px-4 py-2.5 text-sm transition-colors ${
                  locale === currentLocale
                    ? "text-ai-blue bg-ai-blue/8"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {localeLabels[locale]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
