import { Bell, ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { offers } from "../data/offers";

export default function Offers() {
  return (
    <section id="offers" className="section-space bg-slate-50">
      <div className="container-page">
        <SectionTitle
          eyebrow="Updates"
          title="Latest Offers & Announcements"
          description="Useful information and service updates from Barua Shop House."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-50 transition duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <Bell size={22} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-600"
                  />
                </div>

                <h3 className="mt-6 text-lg font-black text-slate-950">
                  {offer.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {offer.text}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-600">
                  Shop Update
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}