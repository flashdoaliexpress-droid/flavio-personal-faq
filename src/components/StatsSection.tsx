import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "Anos de Experiência" },
  { number: "200+", label: "Alunos Transformados" },
  { number: "2", label: "Nutricionistas Parceiros" },
  { number: "100%", label: "Dedicação ao Resultado" },
];

const StatsSection = () => {
  return (
    <section className="bg-black py-14 border-y border-white/5">
      <div className="container px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="lg:border-l border-white/8 lg:pl-10 first:border-l-0 first:pl-0"
            >
              <div className="font-display text-5xl md:text-6xl text-white leading-none mb-2">
                {stat.number}
              </div>
              <div className="text-white/30 text-[11px] tracking-[0.3em] uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
