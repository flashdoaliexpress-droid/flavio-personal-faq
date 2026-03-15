import { motion } from "framer-motion";
import fabioGym from "@/assets/fabio-gym.png";

const highlights = [
  "Educador físico desde 2009",
  "Treinamento 100% personalizado e individualizado",
  "Abordagem holística: físico e equilíbrio emocional",
  "Sempre disponível para tirar dúvidas e orientar",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={fabioGym}
                alt="Flávio Cerqueira - Personal Trainer"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#021329]/10 -z-10 pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#021329]/25" />
              <span className="text-[#021329]/40 text-xs tracking-[0.35em] uppercase font-medium">
                Conheça
              </span>
            </div>

            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-[#021329] leading-none mb-8">
              FLÁVIO<br />CERQUEIRA
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
              Educador físico dedicado, atuando desde 2009 com o objetivo de
              auxiliar pessoas a alcançarem seus resultados através de um
              programa de exercícios eficaz, seguro e individualizado.
            </p>

            {/* Key highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 text-gray-600 text-sm md:text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#021329]/40 flex-shrink-0 mt-2" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <a
              href="https://wa.me/5519983492257"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#021329] text-white font-semibold px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-black transition-colors duration-200"
            >
              Fale Comigo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
