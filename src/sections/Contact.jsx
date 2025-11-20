import { motion } from "framer-motion";

export default function Contact() {
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

  // ---- Local InputGroup ----
  const InputGroup = ({ label, placeholder, type = "text", isTextArea = false }) => (
    <Reveal>
      <div className="flex flex-col gap-3">
        <label className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          {label}
        </label>

        {isTextArea ? (
          <textarea
            rows={4}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-neutral-300 py-3 text-lg font-serif text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-neutral-300 py-3 text-lg font-serif text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
          />
        )}
      </div>
    </Reveal>
  );

  // ---- Local Button ----
  const Button = ({ children }) => (
    <a
      href="#"
      className="inline-flex items-center justify-center px-10 py-4 
                 border border-neutral-900 text-neutral-900 
                 tracking-[0.25em] text-xs uppercase font-medium
                 hover:bg-neutral-900 hover:text-white
                 transition-all duration-500"
    >
      {children}
    </a>
  );

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-[#F3F0EA]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT SIDE — TEXT */}
        <div>
          <Reveal>
            <span className="text-xs tracking-widest uppercase text-neutral-500">
              ( 05 )
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-serif text-5xl md:text-7xl mb-8 text-neutral-900">
              Start a <br /> Project
            </h3>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-neutral-600 text-lg max-w-md mb-10 leading-relaxed">
              We take on a limited number of projects per month to ensure a 
              thoughtful, detail-driven design process.
              <br /><br />
              Tell us a bit about your space and we’ll get back to you within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="space-y-3">
              <p className="text-xl font-serif text-neutral-900">hello@legorreta.mx</p>
              <p className="text-xl opacity-50">+52 (55) 1234 5678</p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form className="space-y-12 mt-6 lg:mt-0">

          <InputGroup 
            label="What is your name?" 
            placeholder="John Doe"
          />

          <InputGroup 
            label="What is your email?" 
            placeholder="john@example.com"
            type="email"
          />

          <InputGroup 
            label="Tell us about your project"
            placeholder="Type of space, goals, timeline…"
            isTextArea
          />

          <InputGroup 
            label="Estimated Budget (optional)" 
            placeholder="$40,000 USD"
          />

          <div className="pt-6">
            <Reveal delay={0.1}>
              <Button>Submit Inquiry</Button>
            </Reveal>
          </div>

        </form>

      </div>
    </section>
  );
}
