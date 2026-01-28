import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-24 px-6 lg:px-8 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left — Copy */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <p className="text-sm tracking-[0.18em] uppercase text-(--text-secondary)">
            Hero
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-medium text-[#F5F5F5]">
            Design that works,
            <br />
            beautifully.
          </h1>
          <p className="text-base sm:text-lg text-(--text-secondary) max-w-xl">
            Gensei is a design agency focused on systems, identity, and digital
            products.
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm text-(--text-secondary)">
            <span className="inline-block w-8 h-px bg-[rgba(245,245,245,0.35)]" />
            <span>- Scroll to explore</span>
          </div>
        </div>

        {/* Right — Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-4/5 overflow-hidden bg-[#151515]">
            <Image
              src="/hero.jpg"
              alt="Selected Gensei work"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
