import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const StorySection = () => (
  <section id="story" className="py-24 bg-gradient-teal">
    <div className="container mx-auto px-4 max-w-4xl">
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
          Nuestra historia
        </h2>
        <div className="section-divider mt-4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="space-y-6 text-muted-foreground font-body leading-relaxed mb-16"
      >
        <p>
          <span className="text-foreground font-semibold">
            Eurocapital Wealth Management
          </span>{" "}
          es una empresa española especializada en asesoramiento financiero.
        </p>
        <p>
          <span className="text-foreground font-semibold">
            Phoenix Gestión Patrimonial
          </span>{" "}
          es nuestro proyecto dedicado a ofrecer servicios de asesoramiento
          financiero a clientes europeos que desean construir carteras de
          inversión seguras y diversificadas.
        </p>
        <p>
          Nuestra experiencia, conocimiento financiero y red internacional nos
          permiten ofrecer soluciones modernas que generan valor para nuestros
          clientes.
        </p>
      </motion.div>

      {/* Regulation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-gradient-card border border-border rounded-xl p-8"
      >
        <div className="flex items-center gap-3 mb-5">
          <ShieldCheck className="w-7 h-7 text-primary" />
          <h3 className="font-display font-semibold text-xl">Regulación</h3>
        </div>
        <p className="text-muted-foreground font-body mb-4">
          La empresa opera bajo la regulación financiera española:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground font-body">
          <li>
            <span className="text-foreground font-medium">CNMV</span>{" "}
            – Comisión Nacional del Mercado de Valores
          </li>
          <li>
            Número de registro oficial:{" "}
            <span className="text-foreground font-medium">34</span>
          </li>
          <li>
            Fecha de registro:{" "}
            <span className="text-foreground font-medium">11/06/2010</span>
          </li>
          <li>
            Dirección:{" "}
            <span className="text-foreground font-medium">
              Alfonso XII Nº4, Entresuelo Derecha, 28014 Madrid, España
            </span>
          </li>
          <li>
            <span className="text-foreground font-medium">
              Fondo de Garantía de Inversiones (FOGAIN)
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default StorySection;
