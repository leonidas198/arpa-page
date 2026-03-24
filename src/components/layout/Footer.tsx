import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo y texto */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src={logo} alt="ARPA logo" className="h-10 mb-2" />
          <p className="text-sm">© {new Date().getFullYear()} ARPA Software & Systems</p>
        </div>

        {/* Ubicaciones y contacto */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-sm">
          <p className="font-semibold mb-2">Contáctanos en:</p>
          <ul>
            <li>Argentina - Capital Federal: +54 9 115 511 9295</li>
            <li>Argentina - Neuquén Capital: +54 9 299 587 3256</li>
            <li>Panamá: +507 665 56925</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}