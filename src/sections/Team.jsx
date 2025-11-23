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
    Vanya: "/profile/VANYA.jpg",
    Liliana: "/profile/LILIANA.jpg",
    Erika: "/profile/ERIKA.jpg",
    Evelyn: "/profile/EVE.jpg",
  };

  // High-quality fallback photos for those without image
  const fallback = [
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg", // Hannia
    "https://images.pexels.com/photos/3310692/pexels-photo-3310692.jpeg", // Jimena
    "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg", // Padilla
  ];

  // Final team in correct order
  const team = [
    { name: "Vanya", role: "Founder", quote: "Passionate about creating spaces that tell a story." },
    { name: "Liliana", role: "Project Manager", quote: "Driven by structure, clarity, and good coffee." },
    { name: "Erika", role: "Interior Designer", quote: "Lover of Scandinavian style, tea, and indoor plants." },
    { name: "Evelyn", role: "Interior Designer", quote: "Inspired by travel, culture, and quiet cafés." },
    { name: "Hannia", role: "Interior Designer", quote: "Obsessed with natural light, textures, and thoughtful design." },
    { name: "Jimena", role: "Interior Designer", quote: "Architecture, music, and photography spark my creativity." },
    { name: "Padilla", role: "Interior Designer", quote: "Focused on creating warm atmospheres and subtle details." },
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
