import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "../components/ProjectModal";

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  const Reveal = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.15, 0, 1] }}
    >
      {children}
    </motion.div>
  );

  // ---- BASE PROJECT ----
  const kitchen = {
    title: "Kitchen Remodel",
    location: "Austin, TX",
    description:
      "A transitional kitchen renovation blending warm wood tones, sculptural lighting, and refined stone surfaces to create a timeless and elevated space.",
    slides: [
      "/projects/kitchen1/1.jpg",
      "/projects/kitchen1/2.jpg",
      "/projects/kitchen1/3.jpg",
      "/projects/kitchen1/4.jpg",
      "/projects/kitchen1/5.jpg",
      "/projects/kitchen1/6.jpg"
    ]
  };

  return (
    <section id="work" className="py-28 md:py-40 px-6 md:px-12 bg-[#F4EFE9]">
      <div className="max-w-screen-2xl mx-auto">

        {/* SECTION TITLE */}
        <div className="text-center mb-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Selected Projects
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-serif text-6xl md:text-7xl text-neutral-900 mt-4 tracking-tight">
              Recent Work
            </h3>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-6 text-neutral-600 max-w-2xl mx-auto text-base leading-relaxed">
              Featured interiors and renovation projects across the U.S. and Canada —
              showcasing design development, materials, drawings, and final styled imagery.
            </p>
          </Reveal>
        </div>

        {/* FEATURED PROJECT */}
        <Reveal>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center cursor-pointer group mb-32"
            onClick={() => setActiveProject(kitchen)}
          >
            {/* IMAGE */}
            <div className="rounded-[32px] overflow-hidden shadow-sm aspect-[4/5] md:aspect-auto bg-neutral-200">
              <img
                src={kitchen.slides[0]}
                alt={kitchen.title}
                className="w-full h-full object-cover transition duration-700 group-hover:brightness-90 group-hover:scale-[1.02]"
              />
            </div>

            {/* TEXT */}
            <div className="pr-4">
              <h4 className="font-serif text-4xl md:text-5xl text-neutral-900 leading-tight tracking-tight">
                {kitchen.title}
              </h4>

              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">
                {kitchen.location}
              </p>

              <p className="mt-6 text-neutral-600 text-base leading-relaxed max-w-md">
                {kitchen.description}
              </p>

              <button className="mt-8 text-sm uppercase tracking-[0.25em] text-neutral-800 hover:opacity-70 transition">
                View Project →
              </button>
            </div>
          </div>
        </Reveal>

        {/* SUBTITLE */}
        <Reveal>
          <h5 className="text-center text-xs uppercase tracking-[0.3em] text-neutral-400 mb-16 mt-10">
            More Selected Projects
          </h5>
        </Reveal>

        {/* MINI PROJECT LIST */}
        <div className="max-w-3xl mx-auto space-y-12">
          {[
            {
              title: "Bathroom Refresh",
              location: "Vancouver, BC",
              description:
                "A compact redesign focused on calming tones and refined surface details.",
              thumb: kitchen.slides[1],
            },
            {
              title: "Primary Bathroom Upgrade",
              location: "Toronto, ON",
              description:
                "A brighter, balanced space with custom cabinetry, soft textures and updated fixtures.",
              thumb: kitchen.slides[2],
            },
            {
              title: "Millwork Package",
              location: "Seattle, WA",
              description:
                "A custom built-in wall system with elevations, material palette, and technical drawings.",
              thumb: kitchen.slides[3],
            },
          ].map((proj, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div
                className="group cursor-pointer flex gap-6 items-center pb-6 border-b border-neutral-300/50"
                onClick={() => setActiveProject(kitchen)}
              >
                {/* THUMBNAIL */}
                <div className="w-28 h-28 rounded-xl overflow-hidden bg-neutral-200 shadow-sm flex-shrink-0">
                  <img
                    src={proj.thumb}
                    className="w-full h-full object-cover group-hover:brightness-90 group-hover:scale-[1.03] transition duration-500"
                  />
                </div>

                {/* TEXT BLOCK */}
                <div className="flex-1">
                  <h4 className="font-serif text-xl text-neutral-900 tracking-tight">
                    {proj.title}
                  </h4>

                  <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">
                    {proj.location}
                  </p>

                  <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* ARROW */}
                <span className="text-neutral-500 text-2xl pr-1 group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
