import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Gift, Coins, Brain } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Empresarios y profesionales",
    desc: "Empresarios exitosos e inversores profesionales que buscan hacer crecer su patrimonio de forma estratégica.",
  },
  {
    icon: TrendingUp,
    title: "Inversores con carteras complejas",
    desc: "Inversores con carteras diversificadas y complejas que requieren supervisión experta.",
  },
  {
    icon: Users,
    title: "Familias con patrimonio elevado",
    desc: "Familias que gestionan un patrimonio significativo entre generaciones y clases de activos.",
  },
  {
    icon: Gift,
    title: "Herencias y jubilación",
    desc: "Personas que han recibido herencias, vendido empresas o se preparan para la jubilación.",
  },
];

const AudienceSection = () => (
  <section id="audience" className="py-24 bg-gradient-dark">
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
          ¿Para quién es?
        </h2>
        <div className="section-divider mt-4" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {audiences.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gradient-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-all group"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Capital menor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-3xl mx-auto bg-gradient-card border border-border rounded-xl p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <Coins className="w-6 h-6 text-primary" />
          <h3 className="font-display font-semibold text-lg">¿Capital inicial menor?</h3>
        </div>
        <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
          <p>
            Si dispone de entre <span className="text-foreground font-medium">500 y 1.000 euros</span>,
            podemos ayudarle a aumentar su capital de forma progresiva.
          </p>
          <p>
            Si dispone de <span className="text-foreground font-medium">5.000 euros o más</span>,
            puede crear y ampliar una cartera de inversión diversificada con estrategias inteligentes.
          </p>
          <div className="flex items-center gap-2 pt-2 text-primary">
            <Brain className="w-4 h-4" />
            <p className="text-sm font-medium">
              Enseñamos a nuestros clientes a utilizar herramientas de inteligencia artificial para mejorar la gestión de sus inversiones.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AudienceSection;
