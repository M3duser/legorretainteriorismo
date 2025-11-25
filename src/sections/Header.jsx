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

        {/* DESKTOP NAV + IG ICON */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-10 text-xs uppercase tracking-[0.2em] text-neutral-900">
            {links.map((item) => (
              <a key={item.label} href={item.href} className="hover:opacity-60">
                {item.label}
              </a>
            ))}
          </nav>

          {/* INSTAGRAM ICON */}
          <a
            href="https://www.instagram.com/legorretainteriorismo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-900"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        {/* MOBILE BTN */}
        <button
          className="md:hidden text-neutral-900"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
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

            {/* IG in mobile menu */}
            <a
              href="https://www.instagram.com/legorretainteriorismo/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 hover:opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-900"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
