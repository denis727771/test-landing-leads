import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const sendMessageToTelegram = (message: string) => {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const groupChatId = import.meta.env.VITE_TELEGRAM_GROUP_CHAT_ID;
    const groupThreadId = import.meta.env.VITE_TELEGRAM_GROUP_THREAD_ID;

    if (!botToken || !groupChatId) {
      throw new Error("Missing Telegram environment variables.");
    }

    const params = new URLSearchParams({
      chat_id: groupChatId,
      text: message,
    });

    if (groupThreadId) {
      params.set("message_thread_id", groupThreadId);
    }

    return fetch(`https://api.telegram.org/bot${botToken}/sendMessage?${params.toString()}`, {
      mode: "no-cors",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Por favor, rellene todos los campos obligatorios.");
      return;
    }

    const message = [
      "Nueva solicitud:",
      `Nombre completo: ${form.name}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.phone || "-"}`,
    ].join("\n");

    try {
      await sendMessageToTelegram(message);
      toast.success("¡Gracias! Nos pondremos en contacto pronto.");
      setForm({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error(error);
      toast.error("No se pudo enviar el mensaje. Inténtelo de nuevo más tarde.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Contacto
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-1.5">
              Nombre completo *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Juan García"
              required
              maxLength={100}
            />
          </div>

          <div>
            <label className="block text-sm font-body text-muted-foreground mb-1.5">
              Email *
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="juan@ejemplo.com"
              required
              maxLength={255}
            />
          </div>

          <div>
            <label className="block text-sm font-body text-muted-foreground mb-1.5">
              Teléfono
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="+34 600 000 000"
              maxLength={20}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold font-body hover:bg-neon-light transition-colors neon-glow"
          >
            <Send className="w-4 h-4" />
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
