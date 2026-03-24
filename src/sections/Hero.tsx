import Container from "../components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import img5 from "../assets/hero/hero_image_1.png";
import img2 from "../assets/hero/hero_image_2.png";
import img3 from "../assets/hero/hero_image_3.png";
import img4 from "../assets/hero/hero_image_4.png";
import img1 from "../assets/logo.png";

export default function Hero() {

  const handleWhatsApp = () => {
    const phone = "5492995873256";
    const message = "Hola! Vi tu web y quiero consultar por un sistema";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const images = [img1, img2, img3, img4, img5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">

      {/* 🎬 Carrusel fondo */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover absolute"
          />
        </AnimatePresence>

        {/* 🌑 Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 🧱 Contenido */}
      <div className="relative z-10 w-full">
        <Container>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Desarrollo de software a medida
          </motion.h1>

          <p className="mb-6 text-lg max-w-xl">
            Automatizá tu negocio y escalá con tecnología.
          </p>

          <button
            onClick={handleWhatsApp}
            className="
              bg-(--color-accent) 
              px-6 py-3 
              rounded-xl 
              shadow-lg
              hover:shadow-2xl 
              hover:scale-105 
              transition-all 
              duration-300
            "
          >
            Contactar por WhatsApp
          </button>

        </Container>
      </div>

    </section>
  );
}