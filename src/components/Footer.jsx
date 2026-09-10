
import {
  ArrowUp,
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
} from "lucide-react";
import { shop } from "../data/shop";

export default function Footer() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  const whatsapp = `https://wa.me/${
    shop.whatsapp
  }?text=${encodeURIComponent(
    `Hello ${shop.name}, I want to know more about your shop and services.`
  )}`;

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-page py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_1fr]">
          {/* Shop Info */}
          <div>
            <button
              onClick={() => go("home")}
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600">
                🏪
              </span>

              <span className="text-lg font-black">
                {shop.name}
              </span>
            </button>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              {shop.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {/* Call */}
              <a
                href={`tel:${shop.phone}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-xs font-bold text-slate-950"
              >
                <Phone size={14} />
                Call
              </a>

              {/* WhatsApp */}
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-3.5 py-2 text-xs font-bold"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>

              {/* Instagram */}
              {shop.social?.instagram && (
                <a
                  href={shop.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10"
                >
                  <Instagram size={15} />
                </a>
              )}

              {/* Facebook */}
              {shop.social?.facebook && (
                <a
                  href={shop.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10"
                >
                  <Facebook size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black">
              Quick Links
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["Home", "home"],
                ["Products", "products"],
                ["Services", "services"],
                ["Reviews", "reviews"],
                ["Gallery", "gallery"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="text-left text-xs text-slate-400 transition hover:text-green-400"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-black">
              Contact
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {shop.address}
            </p>

            <p className="mt-3 text-sm text-slate-400">
              {shop.openingTime} – {shop.closingTime}
            </p>

            <p className="mt-3 text-sm text-slate-400">
              {shop.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} {shop.name}. All rights reserved.
          </p>

          {/* Created By */}
          <p className="text-[11px] text-slate-500">
            Created by{" "}
            <span className="font-semibold text-slate-400">
              Girraj Barua
            </span>
          </p>

          {/* Back To Top */}
          <button
            onClick={() => go("home")}
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:text-white"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
