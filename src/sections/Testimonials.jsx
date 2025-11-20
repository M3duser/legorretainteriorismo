import { motion } from "framer-motion";

export default function Testimonials() {
  // ---- Local Reveal ----
  const Reveal = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.25, 0, 1] }}
    >
      {children}
    </motion.div>
  );

  return (
    <section
      className="py-24 bg-neutral-900 text-[#F3F0EA] px-6 md:px-12 border-b border-neutral-800"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Number */}
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            ( 04 )
          </span>
        </Reveal>

        {/* Testimonial Quote */}
        <Reveal delay={0.1}>
          <h4 className="font-serif text-2xl md:text-4xl italic leading-relaxed opacity-90 mt-8 mb-10">
            &quot;Legorreta transformed our project into a calm, cohesive space. 
            Every material, proportion and detail felt intentional — 
            not decorative. Our clients immediately connected with the design.&quot;
          </h4>
        </Reveal>

        {/* Name */}
        <Reveal delay={0.25}>
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs tracking-[0.2em] uppercase font-bold">
              Elena Rodriguez
            </p>
            <p className="text-[0.6rem] tracking-widest uppercase opacity-50">
              Principal Architect, ERA Studio
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
