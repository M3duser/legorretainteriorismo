export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 md:px-12 border-t border-neutral-200">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between md:items-end gap-12">

        {/* LEFT SIDE — LOGO + TAGLINE */}
        <div className="flex flex-col gap-2">
          <h5 className="font-serif text-xl font-bold tracking-tight text-neutral-900">
            LEGORRETA.
          </h5>

          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-neutral-500">
            Interior Design Studio
          </p>

          <p className="text-[0.65rem] tracking-wider text-neutral-400 mt-1">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* RIGHT SIDE — SOCIAL + BACK TO TOP */}
        <div className="flex flex-col md:items-end gap-6">

          {/* SOCIAL LINKS */}
          <div className="flex gap-8 text-[0.7rem] tracking-[0.2em] uppercase font-medium text-neutral-700">
            <a
              href="https://www.instagram.com/legorretainteriorismo/?hl=en"
              target="_blank"
              className="hover:text-neutral-400 transition-colors"
            >
              Instagram
            </a>

            <a
              href="https://mx.pinterest.com/legorretainteriorismo/"
              target="_blank"
              className="hover:text-neutral-400 transition-colors"
            >
              Pinterest
            </a>
          </div>

          {/* BACK TO TOP */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[0.7rem] tracking-[0.2em] uppercase font-medium text-neutral-700 hover:text-neutral-400 transition-colors flex items-center gap-2"
          >
            Back to top
            <span className="text-lg">↑</span>
          </button>

        </div>

      </div>
    </footer>
  );
}
