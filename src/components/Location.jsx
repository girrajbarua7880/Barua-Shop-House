import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { shop } from "../data/shop";
export default function Location() {
  return (
    <section id="location" className="section-space bg-slate-50">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-green-600">
            Location
          </p>
          <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Find the Shop
          </h2>
          <p className="mt-3 text-slate-600">{shop.address}</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid min-h-[360px] lg:grid-cols-[.75fr_1.25fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <MapPin size={27} />
              </div>
              <h3 className="mt-5 text-2xl font-black text-slate-950">
                {shop.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {shop.address}
              </p>
              <a
                href={shop.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-700"
              >
                <Navigation size={18} /> Get Directions
              </a>
            </div>
            {shop.mapEmbedUrl ? (
              <iframe
                src={shop.mapEmbedUrl}
                title="Shop location map"
                loading="lazy"
                className="min-h-[360px] w-full border-0"
              />
            ) : (
              <div className="flex min-h-[360px] items-center justify-center bg-slate-100 p-8 text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <MapPin size={30} />
                  </div>
                  <p className="mt-4 font-black text-slate-900">Google Maps</p>
                  <p className="mt-2 max-w-sm text-sm text-slate-500">
                    Use the button to open the saved map pin. If the pin is
                    incorrect, update it in Google Business Profile and then
                    replace the link in src/data/shop.js.
                  </p>
                  <a
                    href={shop.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-bold text-green-600"
                  >
                    Open Maps <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
