import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
} from "lucide-react";
import { shop } from "../data/shop";
export default function Hero() {
  const whatsapp = shop.whatsapp
    ? `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(`Hello ${shop.name}, I want to know more about your shop and services.`)}`
    : "#contact";
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-emerald-500 text-white"
    >
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="container-page relative grid min-h-[650px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
            <MapPin size={16} className="mr-2" />
            Surpura • Local Shop
          </div>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-[68px]">
            Everything You Need,
            <span className="mt-2 block text-green-100">All in One Place.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-green-50 sm:text-lg">
            {shop.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => go("products")}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-bold text-green-700 shadow-lg hover:bg-green-50"
            >
              Explore Shop <ArrowRight size={18} />
            </button>
            <a
              href={shop.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 font-bold backdrop-blur hover:bg-white/20"
            >
              <MapPin size={18} /> Find Shop
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 font-bold backdrop-blur hover:bg-white/20"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[560px]">
          <div className="overflow-hidden rounded-[30px] bg-white p-4 text-slate-900 shadow-2xl sm:p-6">
            <img
              src="/images/gallery/shop-front.svg"
              alt="Barua Shop House illustration"
              className="h-64 w-full rounded-[24px] object-cover sm:h-80"
            />
            <div className="p-2 pt-5 sm:p-3 sm:pt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black sm:text-3xl">
                    {shop.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">{shop.tagline}</p>
                </div>
                <span className="shrink-0 rounded-full bg-green-50 px-3 py-1.5 text-xs font-black text-green-700">
                  Open 6 AM–9 PM
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => go("products")}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-left hover:bg-green-50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                    <ShoppingBag size={19} />
                  </span>
                  <span className="font-bold">Products</span>
                </button>
                <a
                  href={`tel:${shop.phone}`}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-left hover:bg-green-50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                    <Phone size={19} />
                  </span>
                  <span className="font-bold">Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
