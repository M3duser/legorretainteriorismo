import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  // ---- Local Reveal ----
  const Reveal = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.25, 0, 1] }}
    >
      {children}
    </motion.div>
  );

  const faqs = [
    {
      q: "What type of projects do you work on?",
      a: "We design residential interiors, apartments, amenity spaces and boutique hospitality. From single rooms to full-property interior design.",
    },
    {
      q: "Do you work with clients outside Mexico?",
      a: "Yes — we frequently collaborate with international clients through online meetings, shared boards and detailed documentation.",
    },
    {
      q: "How does the design process start?",
      a: "We begin with a consultation to understand your goals, space conditions, timeline and aesthetic direction. Then we create concept boards, material palettes, and space planning.",
    },
    {
      q: "Do you provide 3D modeling and technical drawings?",
      a: "Yes. Beyond interior design, we offer SketchUp modeling, layouts, and presentation decks for architects, developers and designers.",
    },
    {
      q: "What is your estimated timeline?",
      a: "Most projects take between 4 to 8 weeks depending on scope, revisions, and number of spaces.",
    },
  ];

  const FAQItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        className="border-b border-neutral-300 py-6 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-serif text-neutral-900">{q}</h4>

          {open ? (
            <Minus className="w-5 h-5 text-neutral-500" />
          ) : (
            <Plus className="w-5 h-5 text-neutral-500" />
          )}
        </div>

        {open && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-neutral-600 mt-4 leading-relaxed"
          >
            {a}
          </motion.p>
        )}
      </div>
    );
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-screen-xl mx-auto">

        <Reveal>
          <span className="text-xs uppercase tracking-widest text-neutral-400">
            ( 06 )
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-7xl text-neutral-900 mt-4 mb-12">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="max-w-2xl space-y-6">
          {faqs.map((item, i) => (
            <Reveal delay={0.1 * (i + 1)} key={i}>
              <FAQItem q={item.q} a={item.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
