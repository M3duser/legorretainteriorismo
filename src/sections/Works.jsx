import { motion } from "framer-motion";

export default function Work() {

  // ---- Reveal ----
  const Reveal = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0, 1] }}
    >
      {children}
    </motion.div>
  );

  // ---- Project Card ----
  const ProjectCard = ({ img, title, location, type }) => (
    <Reveal>
      <div className="group cursor-pointer">
        
        {/* IMAGE */}
        <div className="w-full aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 
                       group-hover:scale-105 group-hover:brightness-90"
          />
        </div>

        {/* TEXT */}
        <div className="mt-6">
          <h4 className="font-serif text-3xl mb-1 text-neutral-900">
            {title}
          </h4>
          <p className="text-sm tracking-wide text-neutral-500">
            {location} · {type}
          </p>
        </div>
      </div>
    </Reveal>
  );

  return (
    <section id="work" className="py-24 md:py-40 px-6 md:px-12 bg-[#F4EFE9]">
      <div className="max-w-screen-xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              Selected Projects
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-serif text-5xl md:text-7xl text-neutral-900 mt-4">
              Recent Work
            </h3>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-neutral-600 max-w-xl mx-auto text-sm leading-relaxed">
              A curated look into our interior design projects and collaborative 
              work supporting designers with concept development, materials, 
              furniture layouts, 3D studies and client-ready presentations.
            </p>
          </Reveal>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">

          <ProjectCard
            img="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80"
            title="Warm Scandinavian Living"
            location="Guadalajara"
            type="Interior Design"
          />

          <ProjectCard
            img="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80"
            title="Contemporary Loft"
            location="Mexico City"
            type="Concept & Styling"
          />

          <ProjectCard
            img="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80"
            title="Casa Bruma"
            location="San Miguel de Allende"
            type="Furniture Layout + Sourcing"
          />

          <ProjectCard
            img="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80"
            title="Onyx Spa Suite"
            location="Tulum"
            type="Mood Boards + 3D Study"
          />

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-20">
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 
                         border border-neutral-900 text-neutral-900 
                         tracking-[0.25em] text-xs uppercase font-medium
                         hover:bg-neutral-900 hover:text-white transition-all duration-500"
            >
              Request Full Portfolio
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
