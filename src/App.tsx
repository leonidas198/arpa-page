import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Problems from "./sections/Problems";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="animated-bg">
        <div className="bg-black/40 backdrop-blur-sm">
          <Problems />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;