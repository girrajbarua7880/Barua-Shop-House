import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import { faqs } from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="section-space bg-white">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
            <CircleHelp size={17} />
            Help Center
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Find quick answers about our products, services, timings and
            location.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq) => {
            const isOpen = open === faq.id;

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-green-200 bg-green-50/50 shadow-md"
                    : "border-slate-200 bg-white hover:border-green-200 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpen(isOpen ? null : faq.id)
                  }
                  className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                        isOpen
                          ? "bg-green-600 text-white"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      <CircleHelp size={18} />
                    </span>

                    <span
                      className={`pt-1 font-bold ${
                        isOpen
                          ? "text-green-800"
                          : "text-slate-900"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-green-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-green-100 px-5 pb-6 pt-4 pl-[4.75rem] text-sm leading-7 text-slate-600 sm:pl-[4.9rem]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-slate-950 p-5 text-center text-white sm:p-6">
          <p className="text-sm text-slate-300">
            Still have a question?
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-2 font-bold text-green-400 transition hover:text-green-300"
          >
            Contact Barua Shop House →
          </button>
        </div>
      </div>
    </section>
  );
}