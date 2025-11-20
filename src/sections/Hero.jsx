import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-10 md:px-20 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://www.kellywearstler.com/on/demandware.static/-/Sites-KellyWearstler-Library/default/v1762997425997/images/02_Interiors/detail_pages/residences/malibu_pch/Block3IMG.jpg"
          className="w-full h-full object-cover brightness-[0.9]"
        />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" />
      </div>

      {/* CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          max-w-md p-10 rounded-2xl
          bg-white/8 backdrop-blur-[10px]
          border border-white/20
          shadow-[0_10px_40px_rgba(0,0,0,0.28)]
        "
      >
        {/* TITLE */}
        <h1 className="
          text-white font-serif
          text-[44px] md:text-[52px]
          leading-[1.08] tracking-tight
        ">
          Elevated interiors
          <br />
          <span className="italic">with heart.</span>
        </h1>

        {/* SUBTITLE */}
        <p className="
          text-white/90 text-[17px]
          leading-relaxed mt-6
        ">
          A warm, refined approach to interior design — blending natural
          materials, crafted details and timeless living.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-10">
          <a
            href="#work"
            className="
              px-6 py-2.5 text-[12px] uppercase
              tracking-[0.14em]
              text-white border border-white/40
              rounded-sm backdrop-blur-sm
              hover:bg-white hover:text-neutral-900
              transition-all
            "
          >
            Explore Work
          </a>

          <a
            href="#services"
            className="
              px-6 py-2.5 text-[12px] uppercase
              tracking-[0.14em]
              text-white border border-white/40
              rounded-sm backdrop-blur-sm
              hover:bg-white hover:text-neutral-900
              transition-all
            "
          >
            Services
          </a>
        </div>
      </motion.div>

    </section>
  );
}
