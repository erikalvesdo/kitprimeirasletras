import { motion } from "framer-motion";
import { Gift, FileText, Gamepad2, Sparkles } from "lucide-react";

const bonuses = [
  { icon: FileText, title: "Apostila de Português", desc: "Material extra completo de português", num: 1 },
  { icon: FileText, title: "Frases e Textos", desc: "Kit de desenvolvimento de frases para alfabetização", num: 2 },
  { icon: Gamepad2, title: "Jogos Didáticos", desc: "Aprendizado divertido com jogos educativos", num: 3 },
  { icon: Sparkles, title: "Surpresa Especial", desc: "Um bônus surpresa esperando por você!", num: 4 },
];

const BonusSection = () => {
  return (
    <section className="py-10 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Gift className="w-8 h-8 text-kit-orange" />
          <h2 className="font-heading text-2xl md:text-4xl font-800 text-foreground">
            +4 <span className="text-kit-orange">Bônus Especiais</span>
          </h2>
        </div>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Além de todo o conteúdo do Kit, você ainda recebe estes bônus incríveis!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-4xl mx-auto">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-background rounded-2xl p-4 md:p-6 shadow-playful border-2 border-kit-orange/20 hover:border-kit-orange/50 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-kit-orange/10 rounded-xl flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-kit-orange" />
                </div>
                <span className="font-heading text-xs font-700 text-kit-orange uppercase tracking-wider">
                  Bônus {b.num}
                </span>
              </div>
              <h3 className="font-heading text-base font-700 text-foreground mb-1">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
