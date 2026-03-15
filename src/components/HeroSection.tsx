import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import flavioHero from "@/assets/flavio-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#021329] overflow-hidden flex items-center">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-28">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-px bg-white/30" />
              <span className="text-white/40 text-xs tracking-[0.35em] uppercase font-medium">
                Personal Trainer & Educador Físico
              </span>
            </motion.div>

            <motion.h1
              className="font-display leading-none mb-10"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-white block">TRANSFORME</span>
              <span className="text-white block">SEU CORPO.</span>
              <span className="text-white/25 block">SUPERE SEUS</span>
              <span className="text-white/25 block">LIMITES.</span>
            </motion.h1>

            <motion.p
              className="text-white/45 text-base md:text-lg max-w-md mb-12 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Com treinos personalizados e acompanhamento nutricional, ajudo
              pessoas reais a conquistarem resultados duradouros e mais autoconfiança.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#planos"
                className="bg-white text-[#021329] font-semibold px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-white/90 transition-colors duration-200 text-center"
              >
                Ver Planos
              </a>
              <a
                href="#sobre"
                className="border border-white/25 text-white/60 px-10 py-4 text-xs tracking-[0.25em] uppercase hover:border-white/60 hover:text-white transition-all duration-200 text-center"
              >
                Saiba Mais
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src={flavioHero}
              alt="Personal Trainer Flávio Cerqueira"
              className="w-full max-w-sm lg:max-w-lg xl:max-w-xl object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
