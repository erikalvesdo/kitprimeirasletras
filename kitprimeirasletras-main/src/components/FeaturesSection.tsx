import { motion } from "framer-motion";
import { BookText, PenTool, Calculator, Music, Puzzle, HandMetal } from "lucide-react";

const features = [
  { icon: BookText, title: "Vogais e Consciência Fonológica", desc: "A, E, I, O, U — Identificação, rimas e sons", color: "bg-kit-blue" },
  { icon: PenTool, title: "Consoantes e Sílabas", desc: "Sílabas simples e complexas, divisão silábica", color: "bg-kit-green" },
  { icon: Music, title: "Fonemas e Grafemas", desc: "Som e letra, associação e identificação", color: "bg-kit-orange" },
  { icon: Puzzle, title: "Formando Palavras", desc: "Junte sílabas, complete e leia palavras", color: "bg-kit-yellow" },
  { icon: HandMetal, title: "Coordenação Motora", desc: "Trace caminhos, una pontos e formas", color: "bg-kit-blue" },
  { icon: Calculator, title: "Matemática", desc: "Números, contagem, adição e subtração", color: "bg-kit-red" },
];

const FeaturesSection = () => {
  return (
    <section className="py-10 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-xl md:text-4xl font-800 text-center text-foreground mb-3">
          O que você vai <span className="text-kit-orange">receber</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-sm md:text-base mb-8 md:mb-12 max-w-xl mx-auto">
          Um material completo e organizado para guiar a alfabetização do seu filho, passo a passo.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-background rounded-2xl p-4 md:p-6 shadow-playful hover:shadow-offer transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 ${f.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-sm md:text-lg font-700 text-foreground mb-1">{f.title}</h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
