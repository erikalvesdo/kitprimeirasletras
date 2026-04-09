import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { BookOpen, Printer, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta-completa")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative overflow-hidden bg-cream-gradient py-8 md:py-20">
      {/* Decorative circles */}
      <div className="absolute top-10 left-5 w-20 h-20 rounded-full bg-kit-blue/10 animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-kit-orange/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-10 h-10 rounded-full bg-kit-green/10 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.img
          src={logo}
          alt="Kit Primeiras Letras"
          className="mx-auto w-36 md:w-64 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="font-heading text-2xl md:text-5xl font-900 text-foreground leading-tight mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          +2.750 Atividades de{" "}
          <span className="text-gradient-rainbow">Alfabetização Infantil</span>
        </motion.h1>

        <motion.p
          className="font-body text-muted-foreground text-sm md:text-xl max-w-2xl mx-auto mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          O Kit Primeiras Letras possui + de 2.750 atividades práticas focadas na{" "}
          <strong className="text-kit-orange">alfabetização acelerada</strong>! Ele foi Desenvolvido por Professores Especialistas em Desenvolvimento infantil.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[
            { icon: BookOpen, text: "Acesso Vitalício", color: "text-kit-blue" },
            { icon: Printer, text: "100% Imprimível", color: "text-kit-green" },
            { icon: Star, text: "+5 Bônus Especiais", color: "text-kit-orange" },
          ].map(({ icon: Icon, text, color }) => (
            <div key={text} className="flex items-center gap-1.5 bg-card rounded-full px-3 py-1.5 md:px-5 md:py-2.5 shadow-playful">
              <Icon className={`w-4 h-4 md:w-5 md:h-5 ${color}`} />
              <span className="font-body text-xs md:text-sm font-600 text-foreground">{text}</span>
            </div>
          ))}
        </motion.div>

        <motion.button
          onClick={scrollToOffer}
          className="bg-kit-green text-primary-foreground font-heading text-base md:text-xl font-800 px-8 py-3 md:px-10 md:py-4 rounded-full shadow-playful hover:brightness-110 transition-all animate-pulse-glow"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          QUERO ALFABETIZAR MEU FILHO! 📚
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
