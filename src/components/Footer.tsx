const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-sm text-gradient-neon font-semibold mb-2">
        Phoenix Gestión Patrimonial
      </p>
      <p className="text-xs text-muted-foreground font-body">
        Parte de Eurocapital Wealth Management · CNMV Reg. Nº 34 · Madrid, España
      </p>
      <p className="text-xs text-muted-foreground font-body mt-1">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
