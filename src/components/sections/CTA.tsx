export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Let's Create Something
          <br />
          <span className="text-gray-400">Amazing Together</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Ready to transform your digital presence? Let's start a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@gensei.studio"
            className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors text-lg"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
