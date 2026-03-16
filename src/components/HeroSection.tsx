import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />

    <div className="relative z-10 container mx-auto px-4 pt-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-body">
            Eurocapital Wealth Management
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
        >
          Phoenix{" "}
          <span className="text-gradient-neon">Gestión Patrimonial</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10 max-w-xl"
        >
          La gestión patrimonial es un servicio financiero moderno que ayuda a
          individuos y familias a proteger, optimizar y hacer crecer su capital
          mediante estrategias financieras avanzadas y herramientas digitales.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-neon-light transition-colors neon-glow-strong"
        >
          Contactar con nosotros
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
