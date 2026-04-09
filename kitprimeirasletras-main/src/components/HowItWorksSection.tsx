import { motion } from "framer-motion";
import { Download, Printer, Clock } from "lucide-react";

const steps = [
  { icon: Download, title: "VOCÊ BAIXA", desc: "Receba acesso instantâneo ao Kit completo no seu e-mail", color: "bg-kit-blue" },
  { icon: Printer, title: "VOCÊ IMPRIME", desc: "Imprima todo o Kit ou à medida que a criança for realizando", color: "bg-kit-green" },
  { icon: Clock, title: "REALIZE AS ATIVIDADES", desc: "De 15 a 30 minutos por dia, na ordem do material. A criança vai amar!", color: "bg-kit-orange" },
];

const HowItWorksSection = () => {
  return (
    <section className="py-10 md:py-24 bg-cream-gradient">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-xl md:text-4xl font-800 text-center text-foreground mb-8 md:mb-12">
          Como <span className="text-kit-blue">funciona?</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto items-stretch">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="flex-1 bg-card rounded-2xl p-5 md:p-8 text-center shadow-playful relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-kit-orange flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-800 text-sm">{i + 1}</span>
              </div>
              <div className={`w-12 h-12 md:w-16 md:h-16 ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-3 mt-2`}>
                <s.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-base md:text-xl font-800 text-foreground mb-1">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
