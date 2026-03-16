import { motion } from "framer-motion";
import trendsImg from "@/assets/trends-bg.jpg";
import { Brain, BarChart2, Leaf, Blocks, Globe, Smartphone } from "lucide-react";

const trends = [
  { icon: Brain, label: "Inteligencia artificial y automatización para mejorar el trabajo de los asesores financieros." },
  { icon: BarChart2, label: "Personalización basada en datos que permite recomendaciones adaptadas a cada cliente." },
  { icon: Leaf, label: "Inversiones ESG con mayor transparencia y trazabilidad." },
  { icon: Blocks, label: "Tokenización de activos mediante tecnología blockchain." },
  { icon: Globe, label: "Finanzas abiertas y mayor integración digital entre servicios financieros." },
  { icon: Smartphone, label: "Transformación completa de la experiencia digital del cliente." },
];

const TrendsSection = () => (
  <section id="trends" className="relative py-24 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${trendsImg})` }}
    />
    <div className="absolute inset-0 bg-background/85" />

    <div className="relative z-10 container mx-auto px-4">
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
          Tendencias
        </h2>
        <div className="section-divider mt-4" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {trends.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-4 bg-card/60 backdrop-blur border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
          >
            <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
            <p className="font-body text-sm text-foreground">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrendsSection;
