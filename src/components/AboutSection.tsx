import { motion } from "framer-motion";
import aboutImg from "@/assets/about-wealth.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutSection = () => (
  <section id="about" className="py-24 bg-gradient-teal">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="text-center mb-16"
      >
        <p className="text-sm tracking-[0.25em] uppercase text-primary font-body mb-3">
          Gestión Patrimonial
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Gestión patrimonial
        </h2>
        <div className="section-divider mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <img
            src={aboutImg}
            alt="Gestión patrimonial moderna con tecnología financiera"
            className="rounded-xl w-full object-cover aspect-video border border-border"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.7, delay: 0.2 } } }}
          className="space-y-5"
        >
          <p className="text-muted-foreground leading-relaxed font-body">
            La gestión patrimonial es un servicio financiero integral enfocado en
            planificar, optimizar, proteger y transmitir el conjunto de activos
            financieros, inmobiliarios y empresariales de una persona o familia.
          </p>
          <p className="text-muted-foreground leading-relaxed font-body">
            Su objetivo es aumentar el capital, minimizar riesgos y optimizar la
            fiscalidad a largo plazo. Este servicio está diseñado para quienes
            desean preservar, diversificar y ampliar su patrimonio mediante
            estrategias personalizadas basadas en objetivos financieros, perfil de
            riesgo y planificación a largo plazo.
          </p>
          <p className="text-muted-foreground leading-relaxed font-body">
            Hoy en día la gestión patrimonial es cada vez más digital, basada en
            datos y apoyada por plataformas tecnológicas inteligentes que
            transforman la relación entre las instituciones financieras y sus
            clientes.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
