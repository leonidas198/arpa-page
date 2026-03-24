import systemImg from "../assets/services/system.png";
import appImg from "../assets/services/aplicacion.png";
import processImg from "../assets/services/procesos.png";
import webImg from "../assets/services/desarrollo.png";
import apiImg from "../assets/services/api.png";
import sopImg from "../assets/services/soporte.png";


export const COMPANY = {
  name: "ARPA Software & Systems",
  whatsapp: "5492995873256",
  email: "contacto@arpa.com",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export const SERVICES = [
  {
    title: "Sistemas a medida",
    description:
      "Desarrollamos soluciones personalizadas adaptadas a las necesidades de tu negocio, permitiéndote tener control total sobre tus procesos y escalar sin limitaciones.",
    color: "from-blue-500/20 to-blue-700/20",  
    image: systemImg,
  },
  {
    title: "Aplicaciones móviles",
    description:
      "Creamos apps modernas para Android e iOS con excelente experiencia de usuario, conectando tu negocio con tus clientes desde cualquier lugar.",
    color: "from-purple-500/20 to-pink-500/20",
    image: appImg,  
  },
  {
    title: "Automatización de procesos",
    description:
      "Eliminamos tareas manuales mediante automatización inteligente, reduciendo errores y mejorando la eficiencia.",
    color: "from-green-500/20 to-emerald-500/20",
    image: processImg,  
  },
  {
    title: "Desarrollo web profesional",
    description:
      "Creamos sitios web rápidos, modernos y optimizados para conversión que representan tu marca.",
    color: "from-cyan-500/20 to-blue-500/20",
    image: webImg,  
  },
  {
    title: "Integraciones y APIs",
    description:
      "Conectamos tus sistemas con plataformas externas y herramientas digitales para centralizar tu operación.",
    color: "from-yellow-500/20 to-orange-500/20",
    image: apiImg,  
  },
  {
    title: "Soporte y mantenimiento",
    description:
      "Brindamos soporte continuo y mejoras para asegurar que tu sistema evolucione con tu negocio.",
    color: "from-red-500/20 to-pink-500/20",
    image: sopImg,  
  },
];

export const PROBLEMS = [
  {
    title: "Procesos manuales",
    description: "Tu equipo pierde tiempo en tareas repetitivas que podrían automatizarse.",
  },
  {
    title: "Falta de control",
    description: "No tenés visibilidad clara de lo que pasa en tu negocio en tiempo real.",
  },
  {
    title: "Sistemas desconectados",
    description: "Usás múltiples herramientas que no se integran entre sí.",
  },
  {
    title: "Errores humanos",
    description: "Las tareas manuales generan fallos que impactan en costos y clientes.",
  },
  {
    title: "Escalabilidad limitada",
    description: "Tu negocio crece pero tus sistemas no acompañan ese crecimiento.",
  },
  {
    title: "Pérdida de oportunidades",
    description: "No podés responder rápido a clientes o procesos internos.",
  },
  {
    title: "Dependencia de Excel",
    description: "Todo está en planillas difíciles de mantener y propensas a errores.",
  },
  {
    title: "Falta de automatización",
    description: "Procesos que deberían ser automáticos siguen siendo manuales.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Esteban Lizardi",
    role: "Dueño de empresa logística",
    text: "Antes perdíamos mucho tiempo con procesos manuales. ARPA nos desarrolló un sistema a medida que automatizó todo y hoy operamos mucho más rápido y sin errores.",
    image: "/assets/testimonials/1.png",
  },
  {
    name: "Cristina Biló",
    role: "Emprendedora e-commerce",
    text: "Necesitaba una solución simple pero potente. El equipo entendió perfecto mi negocio y desarrolló una plataforma que realmente me ayudó a crecer.",
    image: "/assets/testimonials/2.png",
  },
  {
    name: "Carlos Rodríguez",
    role: "Gerente comercial",
    text: "Integraron todos nuestros sistemas y ahora tenemos control total de la información en tiempo real. Fue un cambio enorme para la empresa.",
    image: "/assets/testimonials/3.png",
  },
];

export const ABOUT = [
  {
    title: "Experiencia",
    description: "En Arpa Software, nuestra historia nace de la unión de tres profesionales apasionados por la tecnología, cada uno con experiencia en desarrollo de software en distintas empresas. Decidimos combinar nuestras fortalezas y visión para crear un espacio donde la innovación y la eficiencia se encuentren. Desde nuestros inicios, nos enfocamos en diseñar soluciones digitales a medida, desarrollando sistemas, aplicaciones móviles y Progressive Web Apps (PWAs) que ayudan a nuestros clientes a optimizar sus procesos y transformar sus ideas en productos funcionales y escalables. Cada proyecto es una oportunidad para superar retos y ofrecer soluciones creativas que marcan la diferencia en el mundo digital.",
    icon: "💼",
  },
  {
    title: "Nuestra Misión",
    description: "Desarrollar soluciones digitales innovadoras que transformen ideas en productos funcionales y escalables, siempre priorizando la experiencia del usuario y la eficiencia en cada proyecto.",
    icon: "🚀",
  },
];
