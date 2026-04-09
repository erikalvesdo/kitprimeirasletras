import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como a apostila é entregue?",
    a: "A apostila é 100% digital. Enviamos um link do Google Drive diretamente para o seu e-mail. Você vai acessar o link e baixar o conteúdo em seu computador ou celular. Para imprimir, basta fazer normalmente como qualquer arquivo PDF."
  },
  {
    q: "Posso parcelar?",
    a: "Sim, oferecemos parcelamento em até 4x no cartão de crédito."
  },
  {
    q: "Para qual idade é a apostila de alfabetização?",
    a: "A apostila é indicada para crianças de 4 a 7 anos que estão iniciando ou reforçando o processo de alfabetização."
  },
  {
    q: "Tem garantia?",
    a: "Sim! Oferecemos garantia incondicional de 7 dias. Se você não gostar do material, basta entrar em contato e devolvemos 100% do valor investido."
  },
  {
    q: "Posso imprimir quantas vezes quiser?",
    a: "Sim! O acesso é vitalício e você pode imprimir quantas vezes precisar."
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-heading text-2xl md:text-4xl font-800 text-center text-foreground mb-12">
          Perguntas <span className="text-kit-orange">Frequentes</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-2xl border border-border px-5 shadow-sm"
            >
              <AccordionTrigger className="font-heading text-base font-700 text-foreground hover:no-underline py-5 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
