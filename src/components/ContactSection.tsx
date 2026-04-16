import { motion } from "framer-motion";
import { Instagram, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-[#021329]">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/25" />
              <span className="text-white/35 text-xs tracking-[0.35em] uppercase font-medium">
                Contato
              </span>
            </div>
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-none mb-8">
              COMECE SUA<br />TRANSFORMAÇÃO
            </h2>
            <p className="text-white/40 text-base md:text-lg leading-relaxed mb-12">
              Quer conquistar seus resultados de forma eficiente e segura? Entre
              em contato e inicie sua consultoria online comigo.
            </p>

            <div className="space-y-5">
              <a
                href="https://wa.me/5519983492257"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 border border-white/12 flex items-center justify-center group-hover:border-white/35 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm tracking-wider">WhatsApp</span>
              </a>
              <a
                href="https://forms.gle/zQKGmZsuonuLFBkf7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 border border-white/12 flex items-center justify-center group-hover:border-white/35 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm tracking-wider">Começar agora</span>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 border border-white/12 flex items-center justify-center group-hover:border-white/35 transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="text-sm tracking-wider">Instagram</span>
              </a>
              <a
                href="mailto:contato@personalfabio.com"
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 border border-white/12 flex items-center justify-center group-hover:border-white/35 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm tracking-wider">contato@personalfabio.com</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-5 py-4 text-sm focus:outline-none focus:border-white/35 transition-colors"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-5 py-4 text-sm focus:outline-none focus:border-white/35 transition-colors"
            />
            <input
              type="tel"
              placeholder="Seu WhatsApp"
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-5 py-4 text-sm focus:outline-none focus:border-white/35 transition-colors"
            />
            <textarea
              placeholder="Sua mensagem"
              rows={4}
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-5 py-4 text-sm focus:outline-none focus:border-white/35 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-[#021329] font-semibold py-4 text-xs tracking-[0.25em] uppercase hover:bg-white/90 transition-colors duration-200"
            >
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
