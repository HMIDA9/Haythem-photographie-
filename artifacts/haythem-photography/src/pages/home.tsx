import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const INSTAGRAM_URL = "https://www.instagram.com/haythemphotography/";
const WHATSAPP_URL = "https://wa.me/21696250505";
const PHONE = "+216 96 250 505";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "30%"]);
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  useEffect(() => {
    document.title = "Haythem Photography";
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 mix-blend-normal">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl font-light tracking-[0.25em] uppercase text-white drop-shadow-lg"
        >
          Haythem
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-6"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300"
          >
            Contact
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
            src="/haythem-bg.jpeg"
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
            Through the Lens
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.8 }}
            className="text-6xl sm:text-8xl md:text-9xl font-thin tracking-tight text-white leading-none mb-6"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Haythem
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-base sm:text-lg font-light tracking-[0.15em] text-white/60 uppercase mb-10"
          >
            Photography
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
              Follow on Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-3.5 bg-amber-300/10 border border-amber-300/30 hover:border-amber-300/70 hover:bg-amber-300/20 text-amber-200 hover:text-amber-100 text-sm tracking-widest uppercase transition-all duration-400 backdrop-blur-sm"
            >
              <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Book a Session
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
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
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
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-amber-300/70 mb-5">About</p>
            <h2 className="text-4xl sm:text-5xl font-thin mb-8 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              Capturing moments<br />
              <span className="text-amber-200/70">that last forever</span>
            </h2>
            <p className="text-white/50 leading-relaxed text-lg font-light mb-6">
              A passionate photographer dedicated to revealing the beauty in every scene — from golden-hour landscapes to intimate human moments.
            </p>
            <p className="text-white/40 leading-relaxed font-light">
              Each frame is crafted with intention, patience, and an eye for the extraordinary hidden within the ordinary.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-amber-300/10 -rotate-2" />
            <div className="absolute -inset-4 border border-white/5 rotate-1" />
            <img
              src="/haythem-bg.jpeg"
              alt="Haythem at work"
              className="relative w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
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
            <p className="text-xs tracking-[0.4em] uppercase text-amber-300/70 mb-4">Services</p>
            <h2 className="text-4xl sm:text-5xl font-thin" style={{ fontFamily: "'Georgia', serif" }}>
              What I Offer
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-[#0d0d0d] p-10 group hover:bg-[#141414] transition-colors duration-300"
              >
                <div className="text-amber-300/60 mb-6 text-3xl">{svc.icon}</div>
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
          <p className="text-xs tracking-[0.4em] uppercase text-amber-300/70 mb-5">Get in Touch</p>
          <h2 className="text-4xl sm:text-6xl font-thin mb-6 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Let's Create<br />
            <span className="text-white/40">Something Beautiful</span>
          </h2>
          <p className="text-white/40 mb-12 font-light text-lg leading-relaxed">
            Available for portrait sessions, events, landscapes, and commercial projects across Tunisia and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-amber-300 hover:bg-amber-200 text-[#0d0d0d] text-sm font-medium tracking-widest uppercase transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp Me
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-4 border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm tracking-widest uppercase transition-all duration-300"
            >
              <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Instagram
            </a>
          </div>

          <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center text-white/30 text-sm">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-amber-300/70 transition-colors">
              <PhoneIcon className="w-4 h-4" />
              {PHONE}
            </a>
            <span className="hidden sm:inline text-white/10">|</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-300/70 transition-colors">
              <InstagramIcon className="w-4 h-4" />
              @haythemphotography
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6 text-center text-white/20 text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Haythem Photography — All rights reserved</p>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: "◆",
    title: "Portrait Sessions",
    desc: "Intimate one-on-one sessions capturing your authentic self in natural or studio settings.",
  },
  {
    icon: "◇",
    title: "Landscape & Nature",
    desc: "Breathtaking scenery and golden-hour magic — the world through a patient, artistic eye.",
  },
  {
    icon: "○",
    title: "Events",
    desc: "Weddings, celebrations, and gatherings preserved in timeless, documentary-style imagery.",
  },
  {
    icon: "□",
    title: "Commercial",
    desc: "Brand and product photography that tells your story with elegance and precision.",
  },
  {
    icon: "△",
    title: "Fine Art Prints",
    desc: "Gallery-quality prints of selected works, available for your home or office.",
  },
  {
    icon: "✕",
    title: "Custom Projects",
    desc: "Have a unique vision? Let's collaborate and bring your idea to life.",
  },
];

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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006.9 6.9l1.15-1.16a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
