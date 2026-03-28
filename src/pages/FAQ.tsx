import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import FAQNavbar from "@/components/FAQNavbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "Para quem é o acompanhamento online?",
    answer:
      "Para qualquer pessoa que queira transformar o corpo e a saúde com um programa personalizado, independente de nível — iniciantes, intermediários ou avançados.",
  },
  {
    question: "Como funciona o treino online?",
    answer:
      "Após a avaliação inicial, você recebe seu plano de treino direto no app. Temos contato frequente via WhatsApp para acompanhar sua evolução e ajustar o que for necessário.",
  },
  {
    question: "Preciso de academia para treinar?",
    answer:
      "Não necessariamente. Montamos o plano de acordo com sua realidade: academia, treino em casa ou ao ar livre.",
  },
  {
    question: "O plano alimentar está incluso?",
    answer:
      "O plano alimentar está incluso apenas no Plano Elite com Nutri. Nos demais planos o foco é exclusivamente no treino personalizado.",
  },
  {
    question: "Com que frequência terei retorno do Flávio?",
    answer:
      "O suporte é contínuo via WhatsApp. Além disso, realizamos check-ins semanais para acompanhar seu progresso e ajustar o programa.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Não há fidelidade. Você pode cancelar a qualquer momento, sem multa.",
  },
  {
    question: "Como começo?",
    answer:
      "Basta clicar em «Comece Agora» e enviar uma mensagem no WhatsApp. Farei uma avaliação gratuita para entender seus objetivos e indicar o melhor plano.",
  },
];

const FAQItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-white/8"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <span className="font-display text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-200 pr-6">
          {question}
        </span>
        <span className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors duration-200">
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-white/40 text-sm leading-relaxed pb-7 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-[#021329]">
      <FAQNavbar />

      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="container px-6">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-white/35 text-xs tracking-[0.35em] uppercase font-medium">
                Dúvidas Frequentes
              </span>
            </div>
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-none">
              FAQ
            </h1>
          </motion.div>

          <div className="max-w-3xl">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                index={i}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-white/30 text-sm mb-6">
              Não encontrou sua dúvida? Fala comigo diretamente.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5519983492257"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/50 text-white text-xs tracking-[0.2em] uppercase font-medium px-8 py-3 hover:bg-white hover:text-[#021329] transition-all duration-200"
              >
                Falar no WhatsApp
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfYWVGnLSLc6KYpqYMhe4-6W2c1UtUVpSPxpWt8DPM2Z4Tnng/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#021329] text-xs tracking-[0.2em] uppercase font-medium px-8 py-3 hover:bg-white/90 transition-all duration-200"
              >
                Começar Agora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
