import { useState } from "react";
import { ArrowRight, Images } from "lucide-react";
import { gallery } from "../data/gallery";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  const visibleGallery = showAll ? gallery : gallery.slice(0, 4);

  return (
    <section id="gallery" className="section-space bg-slate-50">
      <div className="container-page">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
              <Images size={17} />
              Gallery
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Shop Highlights
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Take a look at our shop, products and available services.
            </p>
          </div>

          {/* View More / Show Less */}
          {gallery.length > 4 && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {showAll ? "Show Less" : "View More Photos"}

              <ArrowRight
                size={17}
                className={`transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleGallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Image Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-14">
                <h3 className="font-black text-white">{item.title}</h3>

                {item.description && (
                  <p className="mt-1 text-xs text-slate-200">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}