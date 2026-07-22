import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen w-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-rebar-worker.png"
            alt="Precision steel reinforcement for stronger structures"
            className="object-cover"
            fill
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-16 left-6 md:left-16 max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Precision Steel Reinforcement for Stronger Structures
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            We specialise in professional steel fixing, reinforcement detailing and reinforced concrete works that form the structural backbone of residential, commercial and industrial buildings.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 bg-orange-600 hover:bg-orange-700 transition rounded-md text-white font-semibold"
          >
            Request a Site Consultation
          </a>
        </div>
      </section>

      {/* Second Section - Progress Story */}
      <section className="relative h-[80vh] w-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-block-walls-ppe.png"
            alt="Elevated view of block masonry walls under construction"
            className="object-cover object-top"
            fill
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-12 left-6 md:left-16 max-w-xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold">Every Bar Matters</h2>
          <p className="mt-3 text-lg text-white/90">
            From foundation and columns to beams and suspended slabs, every reinforcement cage is installed according to structural drawings, ensuring accuracy, durability and long-term safety.
          </p>
        </div>
      </section>

    </main>
  );
}