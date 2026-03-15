const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/5">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl text-white/40 tracking-widest">
            FLÁVIO<span className="text-white/15">.</span> PERSONAL TRAINER
          </p>
          <p className="text-white/20 text-xs tracking-wider">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
