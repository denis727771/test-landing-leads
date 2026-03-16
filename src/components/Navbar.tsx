import { useState } from "react";
import { Menu, X, Send } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Gestión patrimonial", href: "#about" },
  { label: "Para quién es", href: "#audience" },
  { label: "Servicios", href: "#services" },
  { label: "Ventajas", href: "#advantages" },
  { label: "Tendencias", href: "#trends" },
  { label: "Nuestra historia", href: "#story" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="font-display text-lg font-bold text-gradient-neon">
          Phoenix Gestión Patrimonial
        </a>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-neon-light transition-colors neon-glow"
          >
            <Send className="w-3.5 h-3.5" />
            Contactar con nosotros
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-background/95 backdrop-blur-xl border-b border-border pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
            >
              Contactar con nosotros
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
