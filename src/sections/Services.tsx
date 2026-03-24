import { SERVICES } from "../utils/constants";
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

export default function Services() {
  return (
    <Section id="services">
      <Container>

        <Reveal>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Servicios
          </h2>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="
                relative 
                rounded-2xl 
                overflow-hidden 
                group
                border border-white/10
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* 🖼️ Imagen */}
              <img
                src={s.image}
                alt={s.title}
                className="
                  w-full h-48 object-cover
                  group-hover:scale-110
                  transition-transform duration-500
                "
              />

              {/* 🌑 Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* 🎨 Gradiente */}
              <div className={`absolute inset-0 bg-linear-to-br ${s.color} opacity-40`} />

              {/* 🧠 Contenido */}
              <div className="absolute bottom-0 p-6 z-10">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {s.title}
                </h3>

                <p className="text-gray-200 text-sm">
                  {s.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </Container>
    </Section>
  );
}