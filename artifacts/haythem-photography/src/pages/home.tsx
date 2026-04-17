import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const INSTAGRAM_URL = "https://www.instagram.com/haythemphotography/";
const WHATSAPP_URL = "https://wa.me/21696250505";
const PHONE = "+216 96 250 505";
const EMAIL = "haythemessayem@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/haythem.essayem?locale=fr_FR";

export default function Home() {
  const { t, isRTL } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "30%"]);
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  useEffect(() => {
    document.title = "Haythem Photography";
  }, []);

  return (
    <div className={`min-h-screen bg-[#0d0d0d] text-white font-sans overflow-x-hidden ${isRTL ? "text-right" : "text-left"}`}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 mix-blend-normal">
        <motion.span
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl font-light tracking-[0.25em] uppercase text-white drop-shadow-lg"
        >
          {t("hero.title")}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-6"
        >
          <div className="flex items-center gap-4">
             <LanguageSwitcher />
             <a
               href={INSTAGRAM_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="group flex items-center gap-2 text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300"
             >
               <InstagramIcon className="w-5 h-5" />
             </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300"
          >
            {t("nav.contact")}
          </a>
        </motion.div>
      </nav>

      {/* HERO */}
      <div ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: bgY, opacity: bgOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/haythem.jpeg"
            alt="Haythem Photography"
            className="w-full h-full object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#0d0d0d]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xs sm:text-sm tracking-[0.4em] uppercase text-amber-300/80 mb-4 font-light"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.8 }}
            className={`text-6xl sm:text-8xl md:text-9xl font-thin tracking-tight text-white leading-none mb-6 ${isRTL ? "font-arabic" : ""}`}
            style={{ fontFamily: isRTL ? "inherit" : "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-base sm:text-lg font-light tracking-[0.15em] text-white/60 uppercase mb-10"
          >
            {t("hero.tagline")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-3.5 border border-white/30 hover:border-amber-300/60 text-white/80 hover:text-white text-sm tracking-widest uppercase transition-all duration-400 backdrop-blur-sm hover:bg-white/5"
            >
              <InstagramIcon className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              {t("hero.ctaFollow")}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-3.5 bg-amber-300/10 border border-amber-300/30 hover:border-amber-300/70 hover:bg-amber-300/20 text-amber-200 hover:text-amber-100 text-sm tracking-widest uppercase transition-all duration-400 backdrop-blur-sm"
            >
              <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {t("hero.ctaBook")}
            </a>
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-[0.3em] uppercase">{t("hero.scroll")}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>

      {/* ABOUT */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className={isRTL ? "order-1" : "order-none"}>
            <p className="text-xs tracking-[0.4em] uppercase text-amber-300/70 mb-5">{t("about.title")}</p>
            <h2 className={`text-4xl sm:text-5xl font-thin mb-8 leading-tight ${isRTL ? "font-arabic" : ""}`} style={{ fontFamily: isRTL ? "inherit" : "'Georgia', serif" }}>
              {t("about.heading")}<br />
              <span className="text-amber-200/70">{t("about.headingAccent")}</span>
            </h2>
            <p className="text-white/50 leading-relaxed text-lg font-light mb-6">
              {t("about.text1")}
            </p>
            <p className="text-white/40 leading-relaxed font-light">
              {t("about.text2")}
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-amber-300/10 -rotate-2" />
            <div className="absolute -inset-4 border border-white/5 rotate-1" />
            <img
              src="/mamma-alik.jpeg"
              alt="Haythem at work"
              className="relative w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-amber-300/70 mb-4">{t("gallery.subtitle")}</p>
            <h2 className={`text-4xl sm:text-5xl font-thin ${isRTL ? "font-arabic" : ""}`} style={{ fontFamily: isRTL ? "inherit" : "'Georgia', serif" }}>
              {t("gallery.title")}
            </h2>
          </motion.div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
                className="relative group break-inside-avoid overflow-hidden bg-[#1a1a1a]"
              >
                <img
                  src={`/gallery/${src}`}
                  alt={`Portfolio ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REELS */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-amber-300/70 mb-4">{t("reels.subtitle")}</p>
            <h2 className={`text-4xl sm:text-5xl font-thin ${isRTL ? "font-arabic" : ""}`} style={{ fontFamily: isRTL ? "inherit" : "'Georgia', serif" }}>
              {t("reels.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
             <InstagramReel id="DUvz0jHiHUt" index={0} />
             <InstagramReel id="DRzoYTZiHMt" index={1} isMiddle />
             <InstagramReel id="DPeiEoziFuJ" index={2} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-amber-300/70 mb-4">{t("services.title")}</p>
            <h2 className={`text-4xl sm:text-5xl font-thin ${isRTL ? "font-arabic" : ""}`} style={{ fontFamily: isRTL ? "inherit" : "'Georgia', serif" }}>
              {t("services.heading")}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
            {(t("services.items") as any[]).map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-[#0d0d0d] p-10 group hover:bg-[#141414] transition-colors duration-300"
              >
                <div className="text-amber-300/60 mb-6 text-3xl">{servicesIcons[i]}</div>
                <h3 className="text-lg font-light tracking-wider mb-3 text-white/90">{svc.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed font-light">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-amber-300/70 mb-5">{t("contact.title")}</p>
          <h2 className={`text-4xl sm:text-6xl font-thin mb-6 leading-tight ${isRTL ? "font-arabic" : ""}`} style={{ fontFamily: isRTL ? "inherit" : "'Georgia', serif" }}>
            {t("contact.heading")}<br />
            <span className="text-white/40">{t("contact.headingAccent")}</span>
          </h2>
          <p className="text-white/40 mb-12 font-light text-lg leading-relaxed">
            {t("contact.text")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-amber-300 hover:bg-amber-200 text-[#0d0d0d] text-sm font-medium tracking-widest uppercase transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t("contact.ctaWhatsapp")}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-4 border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm tracking-widest uppercase transition-all duration-300"
            >
              <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t("contact.ctaInstagram")}
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-4 border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm tracking-widest uppercase transition-all duration-300"
            >
              <FacebookIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Facebook
            </a>
          </div>

          <div className={`border-t border-white/5 pt-10 flex flex-wrap gap-x-10 gap-y-6 justify-center items-center text-white/30 text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-amber-300/70 transition-colors">
              <PhoneIcon className="w-4 h-4" />
              {PHONE}
            </a>
            <span className="hidden sm:inline text-white/10">|</span>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-amber-300/70 transition-colors">
              <MailIcon className="w-4 h-4" />
              {EMAIL}
            </a>
            <span className="hidden sm:inline text-white/10">|</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-300/70 transition-colors">
              <InstagramIcon className="w-4 h-4" />
              Instagram
            </a>
            <span className="hidden sm:inline text-white/10">|</span>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-300/70 transition-colors">
              <FacebookIcon className="w-4 h-4" />
              Facebook
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6 text-center text-white/20 text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} {t("hero.title")} {t("hero.tagline")} — {t("footer.rights")}</p>
      </footer>
    </div>
  );
}

const servicesIcons = ["◆", "◇", "○", "□", "△", "✕"];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}


function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006.9 6.9l1.15-1.16a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}


function InstagramReel({ id, index, isMiddle }: { id: string; index: number; isMiddle?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="flex flex-col items-center gap-4 w-full"
    >
      <div 
        className={`relative w-full max-w-[320px] aspect-[9/12.8] bg-[#0d0d0d] rounded-2xl overflow-hidden border shadow-2xl transition-all duration-500 hover:shadow-amber-300/10 ${
          isMiddle ? "border-amber-300/30 scale-105 z-10" : "border-white/5"
        }`}
      >
        {/* The "Safe Crop" Wrapper */}
        <div className="absolute inset-x-0 top-[-44px] h-[calc(100%+120px)] w-full">
          <iframe
            src={`https://www.instagram.com/reel/${id}/embed`}
            className="w-full h-full border-none z-0"
            allowFullScreen
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        
        {/* Top/Bottom masks to blend with background if any sliver of white shows */}
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#0d0d0d] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent pointer-events-none z-10" />
      </div>

      <a
        href={`https://www.instagram.com/reel/${id}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-amber-300/10 hover:border-amber-300/40 transition-all duration-300"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 group-hover:text-amber-200">View on Instagram</span>
        <ExternalLinkIcon className="w-3.5 h-3.5 text-white/30 group-hover:text-amber-200" />
      </a>
    </motion.div>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const galleryImages = [
  "0A90315D-9925-45B0-8E11-BE6062911B41.jpeg",
  "F08BDC74-791F-46B8-97D5-EC5DFC8CC6F3.jpeg",
  "IMG_0015.jpeg", "IMG_0017.jpeg", "IMG_0020.jpeg", "IMG_0022.jpeg",
  "IMG_0026.jpeg", "IMG_0031.jpeg", "IMG_0033.jpeg", "IMG_0038.jpeg",
  "IMG_0039.jpeg", "IMG_0042.jpeg", "IMG_0044.jpeg", "IMG_0045.jpeg",
  "IMG_0047.jpeg", "IMG_0391.jpeg", "IMG_0392.jpeg", "IMG_0393.jpeg",
  "IMG_3554.jpeg", "IMG_3555.jpeg", "IMG_3595.jpeg", "IMG_4315.jpeg",
  "IMG_4317.jpeg", "IMG_4321.jpeg", "IMG_5003.jpeg", "IMG_5005.jpeg",
  "IMG_5007.jpeg", "IMG_5331.jpeg", "IMG_5337.jpeg", "IMG_5338.jpeg",
  "IMG_5340.jpeg", "IMG_5594.jpeg", "IMG_5596.jpeg", "IMG_6460.jpeg",
  "IMG_6462.jpeg", "IMG_6464.jpeg", "IMG_6466.jpeg", "IMG_6468.jpeg"
];

