import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const FAQNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSiteLink = () => {
    const hostname = window.location.hostname;
    if (hostname.includes("localhost") || hostname.includes("127.0.0.1")) {
      return "http://localhost:8080";
    }
    return "https://personal-flavio.vercel.app";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled ? "bg-[#021329]/98 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container px-6 flex items-center justify-between py-5">
        <a href="/" className="font-display text-2xl text-white tracking-widest">
          FLÁVIO<span className="text-white/30">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href={getSiteLink()}
            className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase font-medium"
          >
            ← Voltar ao site
          </a>
          <a
            href="https://wa.me/5519983492257"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/50 text-white text-xs tracking-[0.2em] uppercase font-medium px-6 py-2.5 hover:bg-white hover:text-[#021329] transition-all duration-200"
          >
            Comece Agora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#021329] border-t border-white/10">
          <a
            href={getSiteLink()}
            onClick={() => setOpen(false)}
            className="block px-6 py-4 text-white/50 hover:text-white border-b border-white/5 transition-colors text-xs tracking-[0.2em] uppercase"
          >
            ← Voltar ao site
          </a>
          <div className="p-6">
            <a
              href="https://wa.me/5519983492257"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block border border-white/50 text-white text-xs tracking-[0.2em] uppercase font-medium px-6 py-3 text-center hover:bg-white hover:text-[#021329] transition-all"
            >
              Comece Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FAQNavbar;
