import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Legorreta elevated our project far beyond expectations. Every proportion, material and gesture carried intention — quiet, timeless, and aligned with the architecture.",
      name: "Elena Rodriguez",
      role: "Principal Architect, ERA Studio",
    },
    {
      quote:
        "Their attention to proportion, balance, and mood is unlike anything we've experienced. The design felt effortless yet deeply considered.",
      name: "Michael Turner",
      role: "Senior Interior Designer, Atelier M",
    },
    {
      quote:
        "A truly collaborative partner. They understood exactly what the project needed and delivered a design that was both expressive and grounded.",
      name: "Sofia Alvarez",
      role: "Founder, Casa Norte Studio",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  // ---- Local Reveal ----
  const Reveal = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.25, 0, 1] }}
    >
      {children}
    </motion.div>
  );

  return (
    <section className="py-20 bg-neutral-900 text-[#F3F0EA] px-6 md:px-12 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto text-center relative">

        {/* Section Number */}
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            ( 04 )
          </span>
        </Reveal>

        {/* Testimonial Slider */}
        <div className="mt-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              <h4 className="font-serif text-xl md:text-2xl italic leading-relaxed opacity-95">
                “{testimonials[index].quote}”
              </h4>

              <div className="flex flex-col gap-1">
                <p className="text-xs tracking-[0.25em] uppercase font-semibold">
                  {testimonials[index].name}
                </p>
                <p className="text-[0.6rem] tracking-widest uppercase opacity-50">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-6 mt-12 opacity-70">
          <button
            onClick={prev}
            className="text-xs tracking-widest uppercase hover:opacity-100 transition-opacity"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="text-xs tracking-widest uppercase hover:opacity-100 transition-opacity"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
