import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDownRight, ArrowRight, Menu, X, Plus } from "lucide-react";

// --- ASSETS & CONSTANTS ---
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", // Minimalist beige room
  philosophy:
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop", // Texture detail
  work1:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop", // Living room
  work2:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop", // Kitchen
  work3:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop", // Bathroom
  work4:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1000&auto=format&fit=crop", // Detail
};

// --- REUSABLE COMPONENTS ---

const Reveal = ({ children, delay = 0, width = "fit-content" }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Button = ({ children, href = "#", primary = false, light = false }) => (
  <a
    href={href}
    className={`
      group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden transition-all duration-500 border
      ${primary
        ? "border-neutral-900 bg-neutral-900 text-[#F3F0EA]"
        : light
        ? "border-white/80 bg-transparent text-white hover:bg-white hover:text-neutral-900"
        : "border-neutral-900 bg-transparent text-neutral-900 hover:text-[#F3F0EA]"
      }
    `}
  >
    <span
      className={`
        absolute w-0 h-0 transition-all duration-500 ease-out rounded-full group-hover:w-96 group-hover:h-96
        ${primary
          ? "bg-[#F3F0EA]"
          : light
          ? "bg-white/10"
          : "bg-neutral-900"
        }
      `}
    ></span>
    <span
      className={`
        relative flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300
        ${primary
          ? "group-hover:text-neutral-900"
          : light
          ? "group-hover:text-neutral-900"
          : "group-hover:text-[#F3F0EA]"
        }
      `}
    >
      {children} {primary && <ArrowRight className="w-4 h-4" />}
    </span>
  </a>
);

const SectionNumber = ({ num }) => (
  <div className="overflow-hidden mb-4">
    <span className="block text-xs font-bold tracking-widest text-neutral-400">
      ( {num} )
    </span>
  </div>
);

// --- SUB-COMPONENTS ---

const ProjectCard = ({ img, title, cat, year, aspect = "aspect-square" }) => (
  <Reveal>
    <div className="group cursor-pointer">
      <div className={`w-full ${aspect} overflow-hidden bg-neutral-300 relative mb-6`}>
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[0.95]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      <div className="flex justify-between items-baseline border-b border-neutral-300 pb-4 group-hover:border-neutral-900 transition-colors duration-500">
        <div>
          <h4 className="font-serif text-2xl mb-1">{title}</h4>
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            {cat}
          </span>
        </div>
        <span className="text-xs font-mono opacity-50">{year}</span>
      </div>
    </div>
  </Reveal>
);

const InputGroup = ({
  label,
  placeholder,
  type = "text",
  isTextArea = false,
  name,
}) => (
  <Reveal>
    <div className="relative group">
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4"
      >
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={4}
          className="w-full bg-transparent border-b border-neutral-300 py-4 text-xl font-serif text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-neutral-300 py-4 text-xl font-serif text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
        />
      )}
    </div>
  </Reveal>
);

// --- MAIN APP COMPONENT ---

export default function LegorretaInteriorismo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-[#F3F0EA] min-h-screen text-neutral-900 font-sans selection:bg-neutral-900 selection:text-[#F3F0EA]">
      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 text-white bg-black/40 backdrop-blur-sm px-6 py-4 md:px-12 md:py-5 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-xl tracking-tight font-bold">
            LEGORRETA.
          </h1>
          <span className="text-[0.6rem] uppercase tracking-[0.25em] opacity-80 hidden sm:block">
            Interior Design Studio
          </span>
        </div>

        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <nav className="hidden md:flex gap-10 text-[0.65rem] font-medium tracking-[0.25em] uppercase">
          <a href="#philosophy" className="hover:opacity-70 transition-opacity">
            Philosophy
          </a>
          <a href="#services" className="hover:opacity-70 transition-opacity">
            Services
          </a>
          <a href="#work" className="hover:opacity-70 transition-opacity">
            Work
          </a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">
            Contact
          </a>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#111111] z-50 flex flex-col justify-center items-center text-[#F3F0EA]"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {[
                { id: "philosophy", label: "Philosophy" },
                { id: "services", label: "Services" },
                { id: "work", label: "Work" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-4xl md:text-5xl hover:text-neutral-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 overflow-hidden">
        {/* Background Image with subtle parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] z-0"
        >
          <img
            src={IMAGES.hero}
            alt="Warm, contemporary interior design by Legorreta Interiorismo"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </motion.div>

        {/* Gradient overlay for better contrast at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

        <div className="relative z-10 w-full border-t border-[#F3F0EA]/25 pt-10 mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-[#F3F0EA] text-[12vw] lg:text-[8vw] leading-[0.85] font-serif tracking-tight">
                  Contemporary
                  <br />
                  Interiors
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end text-[#F3F0EA]">
              <Reveal delay={0.2}>
                <p className="text-sm md:text-base max-w-sm leading-relaxed opacity-90 mb-8 lg:text-right">
                  We create warm, contemporary interiors and amenity areas for
                  homes, developments and hospitality projects. Calm palettes,
                  natural textures and spaces that feel effortless to live in.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4 mb-10 lg:justify-end">
                  <Button primary href="#work">
                    View Work
                  </Button>
                  <Button light href="#services">
                    View Services
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex items-center gap-4">
                  <span className="text-[0.6rem] tracking-[0.3em] uppercase">
                    Scroll to explore
                  </span>
                  <ArrowDownRight className="w-4 h-4" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY - Editorial Layout */}
      <section id="philosophy" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1 relative">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden bg-neutral-200">
                <img
                  src={IMAGES.philosophy}
                  alt="Interior materials and textures in a warm palette"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
              </div>
            </Reveal>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neutral-900 rounded-full flex items-center justify-center text-[#F3F0EA] animate-spin-slow hidden md:flex">
              <svg
                viewBox="0 0 100 100"
                width="100"
                height="100"
                className="animate-spin-slow w-full h-full p-2"
              >
                <path
                  id="curve"
                  d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                  fill="transparent"
                />
                <text fill="currentColor">
                  <textPath
                    xlinkHref="#curve"
                    className="text-[0.65rem] uppercase tracking-widest"
                  >
                    • Residences • Amenity spaces • Hospitality •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <SectionNumber num="01" />
            <Reveal>
              <h3 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-neutral-900">
                Warm, modern interiors with a quiet sense of luxury.
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-neutral-600 text-lg leading-relaxed mb-10 max-w-md">
                Legorreta Interiorismo is a boutique studio focused on spaces
                that age gracefully. We work on full homes, apartments and
                so-called “dull” areas—corridors, lobbies, laundry rooms and
                amenity zones—turning them into places that feel considered,
                welcoming and timeless.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button href="#work">Explore our projects</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES - Horizontal Cards */}
      <section
        id="services"
        className="py-24 bg-white px-6 md:px-12 border-t border-neutral-200"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <SectionNumber num="02" />
              <Reveal>
                <h3 className="font-serif text-5xl md:text-7xl text-neutral-900">
                  Services
                </h3>
              </Reveal>
            </div>
            <Reveal delay={0.2} width="100%">
              <p className="text-neutral-500 max-w-sm text-sm mt-6 md:mt-0 md:text-right">
                From full-home interiors to amenity spaces and technical
                support, we adapt to where your project needs the most impact.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {[
              {
                title: "Residential Interiors",
                desc: "Complete interior design for homes and apartments: from concept and materials to furniture, lighting and styling.",
                features: [
                  "Concept & mood direction",
                  "Materials & finishes",
                  "Furniture & lighting selection",
                ],
              },
              {
                title: "Amenity & Common Areas",
                desc: "Lobbies, corridors, lounges, coworking, fitness, rooftops and other 'dull' areas that deserve character and warmth.",
                features: [
                  "Lobbies & reception",
                  "Corridors & transitions",
                  "Rooftops & shared spaces",
                ],
              },
              {
                title: "3D & Technical Support",
                desc: "For studios and developers who need extra hands: SketchUp models, layouts and visuals that support your design process.",
                features: [
                  "SketchUp & 3D modeling",
                  "Space planning support",
                  "Client-ready presentations",
                ],
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className="bg-white p-10 md:p-16 group hover:bg-[#1a1a1a] hover:text-[#F3F0EA] transition-colors duration-500"
              >
                <Reveal delay={i * 0.12}>
                  <span className="text-xs tracking-widest uppercase opacity-50 mb-12 block group-hover:text-[#F3F0EA]">
                    Service 0{i + 1}
                  </span>
                  <h4 className="font-serif text-2xl md:text-3xl mb-6">
                    {service.title}
                  </h4>
                  <p className="text-sm leading-relaxed opacity-70 mb-10 min-h-[80px]">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 border-t border-neutral-200/20 pt-6">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-xs uppercase tracking-wider opacity-60"
                      >
                        <Plus className="w-3 h-3" /> {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK - Masonry Grid */}
      <section
        id="work"
        className="py-24 md:py-40 px-6 md:px-12 bg-[#F3F0EA]"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <SectionNumber num="03" />
            <Reveal width="100%">
              <h3 className="font-serif text-5xl md:text-8xl text-neutral-900 tracking-tight">
                Recent Work
              </h3>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Col 1 */}
            <div className="space-y-16 mt-0 md:mt-20">
              <ProjectCard
                img={IMAGES.work1}
                title="Residence 04"
                cat="Private Home · Guadalajara"
                year="2023"
              />
              <ProjectCard
                img={IMAGES.work4}
                title="Atelier Loft"
                cat="Creative Studio · Mexico City"
                year="2024"
                aspect="aspect-[3/4]"
              />
            </div>

            {/* Col 2 */}
            <div className="space-y-16">
              <ProjectCard
                img={IMAGES.work2}
                title="Casa Bruna"
                cat="Hospitality · San Miguel"
                year="2023"
                aspect="aspect-[3/4]"
              />
              <ProjectCard
                img={IMAGES.work3}
                title="Onyx Bath"
                cat="Concept Study"
                year="2024"
              />
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <Button href="#contact">Request Project Portfolio</Button>
          </div>
        </div>
      </section>

      {/* REVIEWS - Minimalist Quote */}
      <section className="py-24 bg-neutral-900 text-[#F3F0EA] px-6 md:px-12 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <SectionNumber num="04" />
          <Reveal width="100%">
            <h4 className="font-serif text-2xl md:text-4xl italic leading-relaxed opacity-90 mb-8">
              &quot;Legorreta transformed our project into a calm, cohesive
              space. Every material and piece of furniture feels intentional,
              not decorative. Our clients immediately connected with the
              design.&quot;
            </h4>
            <div className="flex flex-col items-center gap-2">
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

      {/* CONTACT - Boutique Style */}
      <section
        id="contact"
        className="py-24 md:py-32 px-6 md:px-12 bg-[#F3F0EA]"
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionNumber num="05" />
            <Reveal>
              <h3 className="font-serif text-5xl md:text-7xl mb-8 text-neutral-900">
                Start a
                <br />
                Project
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-neutral-600 text-lg max-w-md mb-8">
                We take on a limited number of projects per month to keep the
                process personal and careful. Share a few details and we&apos;ll
                get back to you within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-3 mb-10">
                <a
                  href="mailto:hello@legorreta.mx"
                  className="block text-xl hover:text-neutral-500 transition-colors"
                >
                  hello@legorreta.mx
                </a>
                <p className="text-sm tracking-[0.2em] uppercase opacity-60">
                  Based in Mexico · Working Worldwide
                </p>
              </div>
            </Reveal>
          </div>

          <form className="space-y-12 mt-4 lg:mt-10">
            <div className="space-y-10">
              <InputGroup
                label="What is your name?"
                placeholder="John Doe"
                name="name"
              />
              <InputGroup
                label="What is your email?"
                placeholder="john@example.com"
                type="email"
                name="email"
              />
              <InputGroup
                label="Tell us about your space"
                placeholder="Type of project, location, rooms, overall vibe..."
                isTextArea
                name="project"
              />
              <InputGroup
                label="Estimated budget (optional)"
                placeholder="e.g. $15,000 – $30,000 USD"
                name="budget"
              />
              <InputGroup
                label="Anything else we should know?"
                placeholder="Timeline, decision-makers, references you like..."
                name="notes"
              />
            </div>
            <div className="pt-4">
              <Button
                primary
                href="mailto:hello@legorreta.mx?subject=Project%20Inquiry"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-6 md:px-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h5 className="font-serif text-lg font-bold tracking-tight">
            LEGORRETA.
          </h5>
          <p className="text-[0.6rem] tracking-widest uppercase opacity-50 mt-2">
            © {new Date().getFullYear()} Legorreta Interiorismo · Interior
            Design Studio
          </p>
        </div>
        <div className="flex gap-8 text-[0.65rem] tracking-[0.2em] uppercase font-medium">
          <a href="#" className="hover:text-neutral-500">
            Instagram
          </a>
          <a href="#" className="hover:text-neutral-500">
            Pinterest
          </a>
          <a href="#" className="hover:text-neutral-500">
            Behance
          </a>
        </div>
      </footer>

      {/* GLOBAL STYLES */}
      <style>{`
        .font-serif { 
          font-family: 'Playfair Display', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
      `}</style>
    </div>
  );
}
