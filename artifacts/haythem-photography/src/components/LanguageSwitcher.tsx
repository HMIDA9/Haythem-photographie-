import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "ar", label: "العربية", flag: "🇹🇳" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 group px-3 py-1.5 rounded-full hover:bg-white/5 transition-all duration-300"
      >
        <Globe className="w-4 h-4 text-white/50 group-hover:text-amber-300 transition-colors" />
        <span className="text-xs tracking-widest uppercase text-white/70 group-hover:text-white">
          {language}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className={`absolute top-full mt-2 z-50 min-w-[140px] bg-[#141414] border border-white/10 backdrop-blur-xl p-1.5 shadow-2xl ${
                isRTL ? "left-0" : "right-0"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between w-full px-4 py-2.5 text-sm transition-all duration-300 hover:bg-white/5 ${
                    language === lang.code ? "text-amber-300" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className={lang.code === "ar" ? "font-arabic" : ""}>{lang.label}</span>
                  <span className="opacity-40">{lang.flag}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
