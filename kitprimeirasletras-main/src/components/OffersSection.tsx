import { motion } from "framer-motion";
import { Check, X, Star } from "lucide-react";

const OffersSection = () => {
  const scrollToOffer = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="ofertas" className="py-10 md:py-24 bg-cream-gradient">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-xl md:text-4xl font-800 text-center text-foreground mb-3">
          Escolha a <span className="text-kit-orange">Melhor Oferta</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Garanta a apostila de alfabetização com desconto, enquanto ainda está disponível!
        </p>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto items-stretch justify-center">
          {/* Complete Offer - FIRST */}
          <motion.div
            id="oferta-completa"
            className="flex-1 max-w-md bg-card rounded-3xl overflow-hidden shadow-offer border-2 border-kit-green relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-kit-green text-primary-foreground font-heading text-xs font-800 px-4 py-1.5 rounded-b-xl flex items-center gap-1 uppercase tracking-wider">
                <Star className="w-3 h-3" /> Mais Vendido
              </div>
            </div>

            <div className="bg-kit-green/10 p-6 text-center pt-10">
              <span className="font-heading text-sm font-700 text-kit-green uppercase tracking-wider">Plano Completo</span>
              <p className="font-body text-xs text-muted-foreground mt-1">Recomendado por Psicopedagogos</p>
              <div className="mt-2">
                <span className="font-body text-sm text-muted-foreground line-through">R$97,00</span>
              </div>
              <div className="font-heading text-4xl md:text-5xl font-900 text-kit-green mt-1">
                R$19<span className="text-2xl md:text-3xl">,90</span>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <OfferItem included text="Kit Primeiras Letras — +2.750 Atividades" />
              <OfferItem included text="Matemática" />
              <OfferItem included text="Sílabas Simples e Complexas" />
              <OfferItem included text="Coordenação Motora" />
              <OfferItem included text="Vogais e Consciência Fonológica" />
              <OfferItem included text="Consoantes, Fonemas e Grafemas" />
              <OfferItem included text="Formando Palavras e Caligrafia" />
              <OfferItem included text="Todos os 4 Bônus Especiais" />
              <OfferItem included text="Acesso Vitalício" />
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => scrollToOffer("https://pay.kiwify.com.br/2zp4L9n")}
                className="w-full bg-kit-green text-primary-foreground font-heading text-base font-700 py-4 rounded-xl hover:brightness-110 transition-all animate-pulse-glow"
              >
                Quero o Pacote Completo!! 🚀
              </button>
            </div>
          </motion.div>

          {/* Basic Offer - SECOND */}
          <motion.div
            className="flex-1 max-w-md bg-card rounded-3xl overflow-hidden shadow-playful border border-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-kit-orange/10 p-6 text-center">
              <span className="font-heading text-sm font-700 text-kit-orange uppercase tracking-wider">Oferta Básica</span>
              <div className="mt-2">
                <span className="font-body text-sm text-muted-foreground line-through">R$57,00</span>
              </div>
              <div className="font-heading text-4xl md:text-5xl font-900 text-kit-orange mt-1">
                R$9<span className="text-2xl md:text-3xl">,90</span>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <OfferItem included text="Kit — 250 Atividades de Alfabetização" />
              <OfferItem included={false} text="Todos os Bônus" />
              <OfferItem included={false} text="Atualizações de atividades" />
              <OfferItem included={false} text="Acesso vitalício" />
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => scrollToOffer("https://pay.kiwify.com.br/Qmb2HIT")}
                className="w-full bg-kit-orange text-primary-foreground font-heading text-base font-700 py-3.5 rounded-xl hover:brightness-110 transition-all"
              >
                Adquirir o Kit Básico
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OfferItem = ({ included, text }: { included: boolean; text: string }) => (
  <div className="flex items-start gap-2.5">
    {included ? (
      <Check className="w-5 h-5 text-kit-green flex-shrink-0 mt-0.5" />
    ) : (
      <X className="w-5 h-5 text-kit-red/50 flex-shrink-0 mt-0.5" />
    )}
    <span className={`font-body text-sm ${included ? "text-foreground" : "text-muted-foreground line-through"}`}>
      {text}
    </span>
  </div>
);

export default OffersSection;
