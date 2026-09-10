import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { services } from "../data/services";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="section-space bg-slate-50">
      <div className="container-page">
        <SectionTitle
          eyebrow="What We Offer"
          title="Our Services"
          description="Useful local and digital assistance available at Barua Shop House."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((service) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-50 transition duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-2xl text-green-600 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                    {service.icon}
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-600"
                  />
                </div>

                <h3 className="mt-6 text-lg font-black text-slate-950">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-5 text-sm font-bold text-green-600">
                  Available at Shop →
                </div>
              </div>
            </article>
          ))}
        </div>

        {services.length > 6 && (
          <div className="mt-9 text-center">
            <button
              onClick={() => setShowAll((value) => !value)}
              className="rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md"
            >
              {showAll ? "Show Less" : "View More Services"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
