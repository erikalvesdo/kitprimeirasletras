import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="Kit Primeiras Letras" className="w-24 mx-auto mb-4 brightness-200" />
        <p className="font-body text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Kit Primeiras Letras. Todos os direitos reservados.
        </p>
        <p className="font-body text-xs text-primary-foreground/40 mt-2">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho é apenas ilustrativa.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
