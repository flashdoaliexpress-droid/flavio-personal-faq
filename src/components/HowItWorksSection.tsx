import { motion } from "framer-motion";
import { ClipboardCheck, Target, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Avaliação Inicial",
    description:
      "Conheço seus objetivos, rotina e histórico para criar o plano ideal para você.",
  },
  {
    icon: Target,
    number: "02",
    title: "Planejamento",
    description:
      "Monto treinos e plano alimentar ajustados às suas necessidades e metas específicas.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Acompanhamento",
    description:
      "Ofereço feedback, ajuste de treinos e suporte motivacional durante toda sua jornada.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Resultados",
    description:
      "Juntos, alcançamos uma evolução real e sustentável, com foco em qualidade de vida.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-[#F4F7FB]">
      <div className="container px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#021329]/25" />
            <span className="text-[#021329]/40 text-xs tracking-[0.35em] uppercase font-medium">
              Metodologia
            </span>
          </div>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-[#021329] leading-none">
            COMO EU<br />TRABALHO
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#021329]/5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F4F7FB] p-8 group hover:bg-[#021329] transition-colors duration-300 cursor-default"
            >
              <div className="font-display text-[5rem] text-[#021329]/6 group-hover:text-white/6 mb-4 leading-none transition-colors duration-300">
                {step.number}
              </div>
              <step.icon className="w-7 h-7 text-[#021329]/60 group-hover:text-white/70 mb-5 transition-colors duration-300" />
              <h3 className="font-display text-2xl text-[#021329] group-hover:text-white mb-3 transition-colors duration-300">
                {step.title.toUpperCase()}
              </h3>
              <p className="text-gray-400 group-hover:text-white/45 text-sm leading-relaxed transition-colors duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-[#021329]/35 text-lg mt-14 max-w-2xl font-light italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          "O resultado é consequência do seu esforço. E eu estou aqui para
          fazer você chegar lá."
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
