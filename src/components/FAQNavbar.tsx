import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/Logo.png";

const SITE_URL = "https://personal-flavio.vercel.app/";

const FAQNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSite = () => {
    window.location.href = SITE_URL;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled ? "bg-[#021329]/98 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container px-6 flex items-center justify-between py-5">
        <button onClick={goToSite} className="cursor-pointer">
          <img src={Logo} alt="Flávio" className="h-20 w-auto" />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={goToSite}
            className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase font-medium cursor-pointer"
          >
            ← Voltar ao site
          </button>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYWVGnLSLc6KYpqYMhe4-6W2c1UtUVpSPxpWt8DPM2Z4Tnng/viewform"
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
          <button
            onClick={goToSite}
            className="block w-full text-left px-6 py-4 text-white/50 hover:text-white border-b border-white/5 transition-colors text-xs tracking-[0.2em] uppercase cursor-pointer"
          >
            ← Voltar ao site
          </button>
          <div className="p-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYWVGnLSLc6KYpqYMhe4-6W2c1UtUVpSPxpWt8DPM2Z4Tnng/viewform"
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
