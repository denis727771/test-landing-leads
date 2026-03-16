import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const advantages = [
  "Gestión patrimonial integrada que conecta activos, objetivos financieros y planificación estratégica.",
  "Inversiones personalizadas adaptadas al perfil de riesgo y horizonte temporal del cliente.",
  "Planificación fiscal inteligente para mejorar la eficiencia financiera.",
  "Consultoría continua con expertos financieros y análisis de mercado.",
  "Protección y transmisión del patrimonio a largo plazo entre generaciones.",
];

const AdvantagesSection = () => (
  <section id="advantages" className="py-24 bg-gradient-dark">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-sm tracking-[0.25em] uppercase text-primary font-body mb-3">
          Gestión Patrimonial
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Ventajas
        </h2>
        <div className="section-divider mt-4" />
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-5">
        {advantages.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 bg-gradient-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors"
          >
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <p className="font-body text-foreground">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
