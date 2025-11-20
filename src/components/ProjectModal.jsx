import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => (i + 1) % project.slides.length);

  const prev = () =>
    setIndex((i) => (i - 1 + project.slides.length) % project.slides.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-white text-4xl font-light hover:opacity-70 transition"
        >
          ×
        </button>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:opacity-70 transition"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:opacity-70 transition"
        >
          ›
        </button>

        {/* IMAGE WRAPPER */}
        <motion.div
          key={index}
          className="flex items-center justify-center w-full h-full"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
        >
          <img
            src={project.slides[index]}
            className="
              max-h-[90vh]
              max-w-[90vw]
              object-contain
              rounded-lg
            "
          />
        </motion.div>

        {/* PROGRESS */}
        <div className="absolute bottom-6 w-full text-center text-white text-xs tracking-[0.25em] opacity-70">
          {index + 1} / {project.slides.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
