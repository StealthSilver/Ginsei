export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
          Crafting Digital
          <br />
          <span className="text-gray-400">Experiences</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We transform visions into stunning digital realities through
          thoughtful design and innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#work"
            className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg"
          >
            View Our Work
          </a>
          <a
            href="#services"
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors text-lg"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
