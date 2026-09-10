import { useEffect, useState } from "react";
import { Menu, MessageCircle, Moon, Phone, Sun, X } from "lucide-react";
import { shop } from "../data/shop";

const links = [
  ["Home", "home"],
  ["Categories", "categories"],
  ["Products", "products"],
  ["Services", "services"],
  ["Reviews", "reviews"],
  ["Gallery", "gallery"],
  ["FAQ", "faq"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("barua-theme") || "green",
  );
  const [dark, setDark] = useState(
    () => localStorage.getItem("barua-dark") === "1",
  );
  const [active, setActive] = useState("home");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("barua-theme", theme);
    localStorage.setItem("barua-dark", dark ? "1" : "0");
  }, [theme, dark]);
  useEffect(() => {
    const els = links
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (es) => {
        const v = es
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (v) setActive(v.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.4] },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, []);
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const whatsapp = shop.whatsapp
    ? `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(`Hello ${shop.name}, I want to know more about your shop and services.`)}`
    : "#contact";
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="container-page flex min-h-[72px] items-center justify-between gap-3 py-2">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-xl text-white shadow-sm">
            🏪
          </div>
          <div className="hidden sm:block">
            <div className="text-base font-black text-slate-950 dark:text-white">
              {shop.name}
            </div>
            <div className="text-[11px] text-slate-500">{shop.tagline}</div>
          </div>
        </button>
        <nav className="hidden items-center gap-1 xl:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`rounded-xl px-3 py-2 text-sm font-bold transition ${active === id ? "bg-green-50 text-green-700" : "text-slate-600 hover:bg-slate-50 hover:text-green-700 dark:text-slate-300 dark:hover:bg-slate-900"}`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "green" ? "blue" : "green")}
            title={`Switch to ${theme === "green" ? "blue" : "green"} accent`}
            className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-bold text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            <span className="h-3 w-3 rounded-full bg-green-600 theme-dot" />{" "}
            <span className="hidden md:inline">Colour</span>
          </button>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={shop.phone ? `tel:${shop.phone}` : "#contact"}
            aria-label="Call"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:text-green-600 lg:flex"
          >
            <Phone size={18} />
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-green-700 lg:inline-flex"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 xl:hidden dark:border-slate-700 dark:text-slate-200"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all xl:hidden dark:border-slate-800 dark:bg-slate-950 ${open ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="container-page py-3">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`flex w-full rounded-xl px-4 py-3 text-left text-sm font-bold ${active === id ? "bg-green-50 text-green-700" : "text-slate-700 dark:text-slate-200"}`}
            >
              {label}
            </button>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
            <a
              href={`tel:${shop.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold dark:border-slate-700 dark:text-slate-200"
            >
              <Phone size={17} />
              Call
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
