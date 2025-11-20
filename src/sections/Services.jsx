import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Services() {
  const Reveal = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0, 1] }}
    >
      {children}
    </motion.div>
  );

  return (
    <section
      id="services"
      className="py-32 px-6 md:px-12 bg-[#FAF9F7] border-t border-neutral-200"
    >
      <div className="max-w-screen-2xl mx-auto">

        {/* HEADER ASIMÉTRICO EDITORIAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-end">

          <div>
            <Reveal>
              <span className="text-xs tracking-widest uppercase text-neutral-400">
                ( 02 )
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-serif text-6xl md:text-8xl text-neutral-900 mt-4 leading-[1.1]">
                Services
              </h3>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="text-neutral-600 text-base leading-relaxed max-w-md md:ml-auto">
              From full-home interiors to amenity spaces and technical support,
              we design thoughtful, balanced environments and provide clarity
              across every stage of your project.
            </p>
          </Reveal>
        </div>

        {/* GRID NUEVO — MÁS GRANDE, MÁS PREMIUM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <Reveal>
            <div className="bg-white p-12 rounded-xl border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-500 group shadow-sm">
              <span className="text-xs tracking-widest uppercase opacity-50 mb-6 block group-hover:opacity-70">
                Service 01
              </span>

              <h4 className="font-serif text-3xl mb-4">
                Residential Interiors
              </h4>

              <p className="text-sm leading-relaxed opacity-70 mb-8 group-hover:opacity-80">
                Full interior design for homes and apartments: concepts, materials,
                furniture, lighting, and styling. Warm, balanced, contemporary living.
              </p>

              <ul className="space-y-3 border-t border-neutral-200/60 pt-5 group-hover:border-white/20">
                {[
                  "Concept & mood direction",
                  "Materials & finishes",
                  "Furniture & lighting selection",
                ].map((txt, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs uppercase tracking-wider opacity-70 group-hover:opacity-90">
                    <Plus className="w-3 h-3" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* CARD 2 */}
          <Reveal delay={0.1}>
            <div className="bg-white p-12 rounded-xl border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-500 group shadow-sm">
              <span className="text-xs tracking-widest uppercase opacity-50 mb-6 block group-hover:opacity-70">
                Service 02
              </span>

              <h4 className="font-serif text-3xl mb-4">
                Amenity & Common Areas
              </h4>

              <p className="text-sm leading-relaxed opacity-70 mb-8 group-hover:opacity-80">
                Lobbies, corridors, lounges, coworking, fitness and rooftops.
                We elevate shared environments into warm, welcoming spaces.
              </p>

              <ul className="space-y-3 border-t border-neutral-200/60 pt-5 group-hover:border-white/20">
                {[
                  "Lobbies & reception",
                  "Corridors & transitions",
                  "Shared spaces & rooftops",
                ].map((txt, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs uppercase tracking-wider opacity-70 group-hover:opacity-90">
                    <Plus className="w-3 h-3" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* CARD 3 */}
          <Reveal delay={0.2}>
            <div className="bg-white p-12 rounded-xl border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-500 group shadow-sm">
              <span className="text-xs tracking-widest uppercase opacity-50 mb-6 block group-hover:opacity-70">
                Service 03
              </span>

              <h4 className="font-serif text-3xl mb-4">
                3D & Technical Support
              </h4>

              <p className="text-sm leading-relaxed opacity-70 mb-8 group-hover:opacity-80">
                High-quality 3D modeling, layouts and presentation decks to 
                support studios, architects, and developers through every phase.
              </p>

              <ul className="space-y-3 border-t border-neutral-200/60 pt-5 group-hover:border-white/20">
                {[
                  "SketchUp & 3D modeling",
                  "Space planning support",
                  "Client-ready presentations",
                ].map((txt, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs uppercase tracking-wider opacity-70 group-hover:opacity-90">
                    <Plus className="w-3 h-3" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="flex justify-center mt-20">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-12 py-4 border border-neutral-900 text-neutral-900 
                        tracking-[0.25em] text-xs uppercase 
                        hover:bg-neutral-900 hover:text-white 
                        transition-all duration-500"
            >
              Start Your Project
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
