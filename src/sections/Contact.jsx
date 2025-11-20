import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {

  // ---- Modal State ----
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // ---- Reveal Animation ----
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

  // ---- Input Group ----
  const InputGroup = ({ label, placeholder, type = "text", isTextArea = false, name }) => (
    <Reveal>
      <div className="flex flex-col gap-3">
        <label className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          {label}
        </label>

        {isTextArea ? (
          <textarea
            rows={4}
            placeholder={placeholder}
            name={name}
            required
            className="w-full bg-transparent border-b border-neutral-300 py-3 text-lg font-serif 
                       text-neutral-900 placeholder:text-neutral-400 
                       focus:outline-none focus:border-neutral-900 transition-colors resize-none"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            required={label !== "Estimated Budget (optional)"}
            className="w-full bg-transparent border-b border-neutral-300 py-3 text-lg font-serif 
                       text-neutral-900 placeholder:text-neutral-400 
                       focus:outline-none focus:border-neutral-900 transition-colors"
          />
        )}
      </div>
    </Reveal>
  );

  // ---- Button ----
  const Button = ({ children }) => (
    <button
      type="submit"
      className="inline-flex items-center justify-center px-10 py-4 
      border border-neutral-900 text-neutral-900 
      tracking-[0.25em] text-xs uppercase font-medium
      hover:bg-neutral-900 hover:text-white
      transition-all duration-500"
    >
      {children}
    </button>
  );

  // ---- Handle Submit ----
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      project: form.project.value,
      budget: form.budget.value,
    };

    const response = await fetch("https://formspree.io/f/mldzzqqw", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form),
    });

    if (response.ok) {
      setSubmittedData(data);
      setModalOpen(true);
      form.reset();
    }
  };

  return (
    <>
    {/* MAIN SECTION */}
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-[#F3F0EA]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT SIDE — TEXT */}
        <div>
          <Reveal>
            <span className="text-xs tracking-widest uppercase text-neutral-500">
              ( 06 )
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-serif text-5xl md:text-7xl mb-8 text-neutral-900 leading-tight">
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
              <p className="text-xl font-serif text-neutral-900">
                vanya@legorretainteriorismo.com
              </p>
              <p className="text-xl opacity-50">+52 (55) 1234 5678</p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form 
          onSubmit={handleSubmit}
          className="space-y-12 mt-6 lg:mt-0"
        >
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
            label="Tell us about your project"
            placeholder="Type of space, goals, timeline…"
            isTextArea
            name="project"
          />

          <InputGroup 
            label="Estimated Budget (optional)" 
            placeholder="$3,000 USD"
            name="budget"
          />

          <div className="pt-6">
            <Reveal delay={0.1}>
              <Button>Submit Inquiry</Button>
            </Reveal>
          </div>

        </form>

      </div>
    </section>

    {/* SUCCESS MODAL */}
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]"
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            className="bg-white/80 backdrop-blur-xl p-10 rounded-xl border border-neutral-200 max-w-lg w-full shadow-2xl"
          >
            <h2 className="text-3xl font-serif text-neutral-900 mb-4">
              Message Sent Successfully
            </h2>

            <p className="text-neutral-700 mb-6 leading-relaxed">
              Thank you for reaching out. We’ve received your inquiry and will respond within 24 hours.
            </p>

            {submittedData && (
              <div className="mb-6 text-neutral-800 space-y-2">
                <p><span className="font-semibold">Name:</span> {submittedData.name}</p>
                <p><span className="font-semibold">Email:</span> {submittedData.email}</p>
                <p><span className="font-semibold">Project:</span> {submittedData.project}</p>
                {submittedData.budget && (
                  <p><span className="font-semibold">Budget:</span> {submittedData.budget}</p>
                )}
              </div>
            )}

            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 w-full px-6 py-3 border border-neutral-900 text-neutral-900 
              tracking-[0.2em] text-xs uppercase hover:bg-neutral-900 hover:text-white 
              transition-all duration-500"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
