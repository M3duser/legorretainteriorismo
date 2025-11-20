import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Team", href: "#team" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className="
          fixed top-0 left-0 w-full z-50
          px-6 md:px-12 py-4
          flex justify-between items-center
          backdrop-blur-xl
          bg-white/40
          border-b border-white/20
          shadow-sm
        "
      >
        {/* LOGO */}
        <h1 className="font-serif text-lg tracking-wide text-neutral-900">
          LEGORRETA.
        </h1>

        {/* MOBILE BTN */}
        <button
          className="md:hidden text-neutral-900"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] text-neutral-900">
          {links.map((item) => (
            <a key={item.label} href={item.href} className="hover:opacity-60">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/90 backdrop-blur-xl z-50 flex flex-col justify-center items-center text-neutral-900"
          >
            <button
              className="absolute top-6 right-6"
              onClick={() => setOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-4xl font-serif mb-8 hover:text-neutral-500"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
