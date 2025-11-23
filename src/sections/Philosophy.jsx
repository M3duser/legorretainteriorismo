import { motion } from "framer-motion";

export default function Philosophy() {
  // ---- Local Reveal ----
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

  // ---- Local Button ----
  const Button = ({ children, href = "#" }) => (
    <a
      href={href}
      className="inline-flex items-center justify-center px-8 py-4 
                 border border-neutral-900 text-neutral-900 
                 tracking-[0.25em] text-xs uppercase 
                 hover:bg-neutral-900 hover:text-white
                 transition-all duration-500"
    >
      {children}
    </a>
  );

  return (
    <section id="philosophy" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* IMAGE SIDE */}
        <div className="order-2 md:order-1 relative">

          <Reveal>
            <div className="aspect-[4/5] overflow-hidden bg-neutral-200">
              <img
                src="public\legorreta.jpg?q=80&w=2000&auto=format&fit=crop"
                alt="Interior textures and warm materials"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
            </div>
          </Reveal>

          {/* Rotating bubble */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neutral-900/90 rounded-full text-white hidden md:flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="w-full h-full flex items-center justify-center text-[0.65rem] uppercase tracking-widest p-2"
            >
              <svg viewBox="0 0 100 100" width="100" height="100">
                <path
                  id="circleText"
                  d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text fill="currentColor">
                  <textPath xlinkHref="#circleText" startOffset="0">
                    Warm materials • Proportion • Natural light •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="order-1 md:order-2">
          <Reveal>
            <h3 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8 text-neutral-900">
              Design that feels lived-in, crafted, and deeply personal.
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-neutral-600 text-lg leading-relaxed mb-10 max-w-lg">
              We create interiors that feel calm, intentional, and grounded in real life.
              Spaces shaped by proportion, natural textures, and quiet details that stay
              beautiful for years — not seasons.
              <br /><br />
              Our philosophy is simple: design should feel effortless. Whether it’s a home,
              a weekend retreat, or a single room, we refine light, flow, and materials so
              every moment inside feels meaningful.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <Button href="#services">How We Work</Button>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
