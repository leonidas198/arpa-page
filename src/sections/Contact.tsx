import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <Container>

        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Hablemos de tu proyecto
          </h2>

          <p className="text-gray-300">
            Completá el formulario y te contacto a la brevedad.
          </p>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            flex flex-col gap-4 
            max-w-md mx-auto 
            bg-white/5 
            p-6 
            rounded-2xl 
            backdrop-blur-sm 
            border border-white/10
          "
        >
          <input
            type="text"
            name="name" // 👈 importante
            placeholder="Nombre"
            required
            className="p-3 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
          />

          <input
            type="email"
            name="email" // 👈 importante
            placeholder="Email"
            required
            className="p-3 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
          />

          <textarea
            name="message" // 👈 importante
            placeholder="Contanos tu idea..."
            rows={4}
            required
            className="p-3 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              bg-(--color-accent) 
              text-white 
              py-3 
              rounded-xl 
              shadow-md
              hover:shadow-xl 
              hover:-translate-y-1 
              active:scale-95
              transition-all 
              duration-300
              disabled:opacity-50
            "
          >
            {loading ? "Enviando..." : "Enviar consulta"}
          </button>

          {/* ✅ Mensaje éxito */}
          {success && (
            <p className="text-green-400 text-sm text-center">
              ✅ Mensaje enviado correctamente
            </p>
          )}
        </motion.form>

      </Container>
    </Section>
  );
}