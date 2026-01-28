export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Gensei</div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#philosophy"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#work"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Work
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
