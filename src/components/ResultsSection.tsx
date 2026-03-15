import { motion } from "framer-motion";
import result1 from "@/assets/result-1.png";
import result2 from "@/assets/result-2.png";

const results = [
  { image: result1, alt: "Resultado de transformação - aluna 1" },
  { image: result2, alt: "Resultado de transformação - aluna 2" },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-24 md:py-32 bg-white">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#021329]/25" />
            <span className="text-[#021329]/40 text-xs tracking-[0.35em] uppercase font-medium">
              Transformações
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-[#021329] leading-none">
              RESULTADOS<br />REAIS
            </h2>
            <p className="text-gray-400 text-base max-w-xs md:mb-1 leading-relaxed">
              Inspiração, superação e muita disciplina. Resultados reais dos meus alunos.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-100">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="overflow-hidden group relative bg-white"
            >
              <img
                src={result.image}
                alt={result.alt}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#021329]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/5519983492257"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#021329] text-[#021329] font-medium px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#021329] hover:text-white transition-all duration-200"
          >
            Quero Meu Resultado
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
