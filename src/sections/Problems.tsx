import { PROBLEMS } from "../utils/constants";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Problems() {
  return (
    <Section id="problems">
      <Container>

        {/* Título con Reveal */}
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-center">
            ¿Tu negocio está pasando por esto?
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
            Identificamos los problemas más comunes que frenan el crecimiento de las empresas.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
        >
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="
                p-4 
                rounded-xl 
                bg-white/5 
                backdrop-blur-sm 
                border border-white/10
                hover:bg-white/10
                hover:-translate-y-1
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-lg mt-1">⚠️</span>

                <div>
                  <h3 className="text-sm font-semibold leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-snug">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-4">
            Si te sentís identificado con alguno de estos problemas...
          </p>

          <h3 className="text-2xl font-semibold mb-6">
            Transformamos estos problemas en oportunidades de crecimiento 🚀
          </h3>

          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="
              bg-(--color-accent)
              text-white
              px-6 py-3
              rounded-xl
              shadow-lg
              hover:shadow-2xl
              hover:scale-105
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            Ver cómo podemos ayudarte
          </button>

          <div className="relative mt-20">
            <div className="h-24 bg-linear-to-b from-transparent to-(--color-primary) opacity-80"></div>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}