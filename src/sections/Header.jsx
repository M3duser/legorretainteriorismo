import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="font-serif text-lg tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          LEGORRETA.
        </h1>

        {/* MOBILE BTN */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          <a href="#philosophy" className="hover:opacity-70">Philosophy</a>
          <a href="#services" className="hover:opacity-70">Services</a>
          <a href="#work" className="hover:opacity-70">Work</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#111] z-50 flex flex-col justify-center items-center text-white"
          >
            <button 
              className="absolute top-6 right-6"
              onClick={() => setOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            {["Philosophy", "Services", "Work", "Contact"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-4xl font-serif mb-8 hover:text-neutral-400"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
