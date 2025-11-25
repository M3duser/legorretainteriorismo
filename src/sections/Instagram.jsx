import { useEffect } from "react";

export default function InstagramSection() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section className="py-20 bg-[#F9F7F3] border-t border-neutral-200">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-neutral-900">
            Latest on Instagram
          </h2>

          <a
            href="https://instagram.com/legorretainteriorismo"
            target="_blank"
            className="mt-3 inline-block text-[0.75rem] tracking-[0.25em] uppercase text-neutral-500 hover:text-neutral-700 transition"
          >
            Follow us →
          </a>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://cdn.lightwidget.com/widgets/cb2aa6093a1354a49137f1bc7ef1475e.html"
            scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget w-full max-w-6xl rounded-lg shadow-sm"
            style={{ border: 0, overflow: "hidden" }}
          ></iframe>
        </div>

      </div>
    </section>
  );
}
