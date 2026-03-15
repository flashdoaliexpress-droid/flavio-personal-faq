import { motion } from "framer-motion";
import { Apple, Salad, HeartPulse } from "lucide-react";

const items = [
  {
    icon: Apple,
    title: "Planos Alimentares Individuais",
    desc: "Cada aluno recebe um plano nutricional adaptado ao seu objetivo e estilo de vida.",
  },
  {
    icon: Salad,
    title: "Acompanhamento Contínuo",
    desc: "Ajustes constantes para que sua alimentação evolua junto com seu treino.",
  },
  {
    icon: HeartPulse,
    title: "Saúde em Primeiro Lugar",
    desc: "Nutrição saudável e sustentável, sem dietas restritivas ou modismos.",
  },
];

const NutritionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#021329]">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/25" />
              <span className="text-white/35 text-xs tracking-[0.35em] uppercase font-medium">
                Nutrição
              </span>
            </div>
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-none mb-8">
              PARCERIA COM<br />NUTRICIONISTAS
            </h2>
            <p className="text-white/45 text-base md:text-lg leading-relaxed mb-6">
              Para resultados completos, trabalho lado a lado com nutricionistas
              especializados, garantindo planos alimentares personalizados para
              cada fase do seu desenvolvimento.
            </p>
            <p className="text-white font-medium text-base md:text-lg">
              Treino + alimentação = a combinação perfeita para a sua transformação.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid gap-px bg-white/5"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex gap-6 p-7 bg-[#021329] hover:bg-white/5 transition-colors"
              >
                <item.icon className="w-6 h-6 text-white/50 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white text-base mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
