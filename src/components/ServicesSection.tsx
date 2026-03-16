import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  ArrowRightLeft,
  Shield,
  Umbrella,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Gestión de inversiones",
    desc: "Análisis y selección de activos según el perfil del cliente, creando carteras personalizadas orientadas a objetivos específicos.",
  },
  {
    icon: FileText,
    title: "Planificación fiscal",
    desc: "Optimización de la carga fiscal mediante estrategias legales que reducen impuestos y protegen los ingresos.",
  },
  {
    icon: ArrowRightLeft,
    title: "Planificación sucesoria",
    desc: "Estructuras jurídicas diseñadas para garantizar la transmisión eficiente del patrimonio entre generaciones.",
  },
  {
    icon: Shield,
    title: "Protección jurídica y contable",
    desc: "Organización fiscal, balances financieros y estructuras contractuales para cumplir con la normativa.",
  },
  {
    icon: Umbrella,
    title: "Gestión de riesgos y seguros",
    desc: "Evaluación de riesgos y soluciones mediante seguros de vida, planes de pensiones y protección patrimonial.",
  },
  {
    icon: Building2,
    title: "Asesoramiento financiero e inmobiliario",
    desc: "Orientación estratégica para decisiones sobre inversiones financieras e inmobiliarias.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-gradient-teal">
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
          Servicios
        </h2>
        <div className="section-divider mt-4" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-gradient-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all group"
          >
            <div className="w-14 h-14 mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
