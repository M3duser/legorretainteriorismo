import { motion } from "framer-motion";

export default function Team() {
  const Reveal = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0, 1] }}
    >
      {children}
    </motion.div>
  );

  // Local images (exact paths in your public folder)
  const localPhotos = {
    Vanya: "/profile/VANYA-2.png",
    Liliana: "/profile/LILIANA-2.png",
    Erika: "/profile/ERIKA-2.png",
    Evelyn: "/profile/EVE-2.png",
    Hannia: "/profile/HANNIA-2.png",
    Jimena: "/profile/JIMENA-2.png",
    Padilla: "/profile/PADILLA-2.png",
  };

  // High-quality fallback photos for those without image
  const fallback = [
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg", // Hannia
    "https://images.pexels.com/photos/3310692/pexels-photo-3310692.jpeg", // Jimena
    "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg", // Padilla
  ];

  // Final team in correct order
  const team = [
    { name: "Vanya", role: "Founder | Interior Designer", quote: "Lives for intentional design and the ritual of the perfect latte." },
    { name: "Liliana", role: "Project Manager | Industrial Designer", quote: "Obsessed with classic structure, layered style, and quiet poetry." },
    { name: "Erika", role: "Project Manager | Architect", quote: "Drawn to candlelit ambiance, romance, and lasting comfort." },
    { name: "Evelyn", role: "Interior Designer", quote: "A deep love for rich textures, old-school charm, and slowing down." },
    { name: "Hannia", role: "Industrial Designer", quote: "Fueled by a perfectly curated monochrome life." },
    { name: "Jimena", role: "Interior Designer", quote: "Finds inspiration in manual crafts and the freedom of pure creativity." },
    { name: "Jimena Padilla", role: "Interior Designer", quote: "Fascinated by smart solutions and the future of functional technology." },
  ];

  return (
    <section id="team" className="py-24 bg-white px-6 md:px-12 border-t border-neutral-200">
      <div className="max-w-screen-2xl mx-auto">

        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">
              Our Team
            </h2>
            <p className="mt-4 text-neutral-600 max-w-xl mx-auto leading-relaxed">
              A collaborative studio of designers and creatives shaping thoughtful interiors.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
            
            {team.map((member, i) => {
              // assign image → if exists localPhoto use it, else fallback
              const imageSrc = localPhotos[member.name] || fallback[i - 4];

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center group"
                >
                  <div className="aspect-square w-full rounded-2xl overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={member.name}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-[0.25,0.25,0,1]"
                    />
                  </div>

                  <h4 className="mt-4 font-medium tracking-wide uppercase text-sm">
                    {member.name}
                  </h4>

                  <p className="text-neutral-500 text-xs mt-1">
                    {member.role}
                  </p>

                  <p className="text-neutral-400 text-xs mt-2 italic text-center leading-relaxed">
                    {member.quote}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </Reveal>

      </div>
    </section>
  );
}
