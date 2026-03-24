import { TESTIMONIALS } from "../utils/constants";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import { motion } from "framer-motion";

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

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>

        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Lo que dicen nuestros clientes
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
            Empresas que confiaron en nosotros para transformar su negocio.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="
                p-6 
                rounded-2xl 
                bg-white/5 
                border border-white/10 
                backdrop-blur-sm
                hover:-translate-y-2
                hover:shadow-xl
                transition-all duration-300
              "
            >
              {/* 🧠 Texto */}
              <p className="text-gray-300 text-sm mb-6">
                “{t.text}”
              </p>

              {/* 👤 Usuario */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold">
                    {t.name}
                  </h4>

                  <p className="text-xs text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </Section>
  );
}