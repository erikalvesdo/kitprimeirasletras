import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-10 md:py-20 bg-cream-gradient">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-playful border border-kit-green/20"
        >
          <ShieldCheck className="w-16 h-16 text-kit-green mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-800 text-foreground mb-4">
            Satisfação <span className="text-kit-green">Garantida!</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Sabemos da qualidade do nosso material de Alfabetização, e por este motivo liberamos a{" "}
            <strong className="text-foreground">garantia de 7 dias</strong>! Se neste período você utilizar nosso material e não gostar, basta entrar em contato para pedir o{" "}
            <strong className="text-kit-green">reembolso de 100% do valor investido</strong>!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
