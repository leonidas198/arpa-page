import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { ABOUT } from "../utils/constants";

import member1 from "../assets/hero/member1.png";
import member2 from "../assets/hero/member2.png";
import member3 from "../assets/hero/member3.png";
import teamImg from "../assets/team/team.png";

type AboutItem = {
  title: string;
  description: string;
  icon: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const TEAM = [
  {
    name: "Jorge Gomez",
    role: "Socio comercial y de ventas",
    image: member3,
  },
  {
    name: "Cristian Prediger",
    role: "Socio desarrollador fullstack",
    image: member2,
  },
  {
    name: "Quique Chavez",
    role: "Socio desarrollador fullstack",
    image: member1,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const cardBase =
  "p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300";

/* 👤 Card Equipo */
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div variants={itemAnimation} className={`${cardBase} text-center`}>
      <div className="mb-4 flex justify-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full border-2 border-white/20 shadow-lg"
        />
      </div>

      <h4 className="text-lg font-semibold">{member.name}</h4>
      <p className="text-sm text-gray-400">{member.role}</p>
    </motion.div>
  );
}

/* 🧠 Card About */
function AboutCard({ item }: { item: AboutItem }) {
  return (
    <motion.div variants={itemAnimation} className={cardBase}>
      <div className="text-2xl mb-2">{item.icon}</div>
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-300 text-sm">{item.description}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <Section id="about">
      <Container>
        {/* 🔥 Título */}
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Nosotros
          </h2>
        </Reveal>

        {/* 💬 Intro */}
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          En ARPA Software somos un equipo enfocado en desarrollar soluciones
          tecnológicas que generan resultados reales. Combinamos experiencia técnica,
          visión de negocio y metodologías ágiles para ayudar a nuestros clientes a crecer.
        </p>

        {/* 🧩 Layout */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">

          {/* 👥 Equipo */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-bold text-center mb-10">
                Fundadores
              </h3>
            </Reveal>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {TEAM.map((member, i) => (
                <TeamCard key={i} member={member} />
              ))}
            </motion.div>
          </div>

          {/* 🖼️ Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={teamImg}
              alt="Equipo ARPA Software"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl -z-10 rounded-2xl"></div>
          </motion.div>

          {/* 🧠 ABOUT FULL WIDTH */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 md:col-span-2"
          >
            {ABOUT.map((item, i) => (
              <AboutCard key={i} item={item} />
            ))}
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}