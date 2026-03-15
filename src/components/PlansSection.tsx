import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    tag: "Presencial",
    title: "Personal Trainer",
    price: null,
    priceNote: "Consulte disponibilidade",
    period: null,
    description: "Atendimento presencial com treino totalmente personalizado para o seu objetivo.",
    features: [
      "Avaliação física completa",
      "Planejamento de treino individualizado",
      "Acompanhamento presencial",
      "Ajustes contínuos de carga e método",
    ],
    cta: "Consultar Vaga",
    ctaHref: "https://wa.me/5519983492257",
    highlight: false,
  },
  {
    tag: "Consultoria Online",
    title: "Plano Bimestral",
    price: "R$ 170",
    priceNote: "por 2 meses",
    period: "2 Treinos",
    description: "Ideal para quem quer começar com suporte online e flexibilidade de horário.",
    features: [
      "2 treinos personalizados",
      "Suporte via WhatsApp",
      "Planilha de treino detalhada",
      "Orientações gerais de execução",
    ],
    cta: "Começar Agora",
    ctaHref: "https://wa.me/5519983492257",
    highlight: false,
  },
  {
    tag: "Consultoria Online",
    title: "Plano Trimestral",
    price: "R$ 280",
    priceNote: "por 3 meses",
    period: "3 Treinos + Acompanhamento",
    description: "Plano completo com acompanhamento mensal — o mais indicado para resultados sólidos.",
    features: [
      "3 treinos personalizados",
      "Acompanhamento mensal",
      "Suporte via WhatsApp",
      "Ajustes de treino mensais",
      "Planilha de treino detalhada",
    ],
    cta: "Começar Agora",
    ctaHref: "https://wa.me/5519983492257",
    highlight: true,
  },
  {
    tag: "Consultoria Online",
    title: "Plano Dupla",
    price: "R$ 280",
    priceNote: "bimestral",
    period: "2 Treinos Individualizados",
    description: "Para duas pessoas com planos totalmente independentes e personalizados.",
    features: [
      "2 treinos individualizados (cada)",
      "Suporte via WhatsApp",
      "Planilhas separadas por aluno",
      "Ideal para casais ou amigos",
    ],
    cta: "Começar Agora",
    ctaHref: "https://wa.me/5519983492257",
    highlight: false,
  },
];

const PlansSection = () => {
  return (
    <section id="planos" className="py-24 md:py-32 bg-[#F4F7FB]">
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
              Investimento
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-[#021329] leading-none">
              PLANOS &<br />SERVIÇOS
            </h2>
            <p className="text-gray-400 text-base max-w-xs md:mb-1 leading-relaxed">
              Escolha o plano que melhor se encaixa no seu momento e objetivo.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-[#021329]/8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col p-8 relative ${
                plan.highlight
                  ? "bg-[#021329]"
                  : "bg-white"
              }`}
            >
              {/* Most popular badge */}
              {plan.highlight && (
                <div className="absolute top-0 left-8 -translate-y-1/2">
                  <span className="bg-white text-[#021329] text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Tag */}
              <span
                className={`text-[10px] tracking-[0.3em] uppercase font-medium mb-4 ${
                  plan.highlight ? "text-white/40" : "text-[#021329]/40"
                }`}
              >
                {plan.tag}
              </span>

              {/* Title */}
              <h3
                className={`font-display text-3xl leading-tight mb-6 ${
                  plan.highlight ? "text-white" : "text-[#021329]"
                }`}
              >
                {plan.title.toUpperCase()}
              </h3>

              {/* Price */}
              <div className="mb-6">
                {plan.price ? (
                  <>
                    <div
                      className={`font-display text-5xl leading-none mb-1 ${
                        plan.highlight ? "text-white" : "text-[#021329]"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <div
                      className={`text-xs tracking-wider ${
                        plan.highlight ? "text-white/40" : "text-gray-400"
                      }`}
                    >
                      {plan.priceNote}
                    </div>
                    {plan.period && (
                      <div
                        className={`text-xs mt-1 font-medium ${
                          plan.highlight ? "text-white/60" : "text-[#021329]/60"
                        }`}
                      >
                        {plan.period}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className={`font-display text-2xl leading-none mb-1 ${
                        plan.highlight ? "text-white" : "text-[#021329]"
                      }`}
                    >
                      Sob Consulta
                    </div>
                    <div
                      className={`text-xs tracking-wider ${
                        plan.highlight ? "text-white/40" : "text-gray-400"
                      }`}
                    >
                      {plan.priceNote}
                    </div>
                  </>
                )}
              </div>

              {/* Divider */}
              <div
                className={`h-px mb-6 ${
                  plan.highlight ? "bg-white/10" : "bg-[#021329]/8"
                }`}
              />

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  plan.highlight ? "text-white/50" : "text-gray-400"
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check
                      className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                        plan.highlight ? "text-white/60" : "text-[#021329]/50"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-white/60" : "text-gray-500"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 ${
                  plan.highlight
                    ? "bg-white text-[#021329] hover:bg-white/90"
                    : "border border-[#021329] text-[#021329] hover:bg-[#021329] hover:text-white"
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-gray-400 text-sm text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Dúvidas? Entre em contato pelo WhatsApp e encontraremos o plano ideal para você.
        </motion.p>
      </div>
    </section>
  );
};

export default PlansSection;
