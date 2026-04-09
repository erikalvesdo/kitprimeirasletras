import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";

const testimonials = [
  { img: testimonial1, name: "Rafael" },
  { img: testimonial2, name: "Cida" },
  { img: testimonial3, name: "Angélica" },
  { img: testimonial4, name: "Marta" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MessageCircle className="w-8 h-8 text-kit-green" />
          <h2 className="font-heading text-2xl md:text-4xl font-800 text-foreground">
            O que dizem os <span className="text-kit-green">Pais</span>
          </h2>
        </div>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Veja os resultados reais de quem já usa o Kit Primeiras Letras!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl overflow-hidden shadow-playful border border-border bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={t.img}
                alt={`Depoimento de ${t.name}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
