import {
  CheckCircle2,
  MapPin,
  Zap,
  UsersRound,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Local & Trusted",
    text: "A convenient local point for everyday needs.",
  },
  {
    icon: Zap,
    title: "Multiple Services",
    text: "Products and useful services in one place.",
  },
  {
    icon: MapPin,
    title: "Easy to Find",
    text: "Use directions and the location section to visit.",
  },
  {
    icon: UsersRound,
    title: "Friendly Service",
    text: "Simple, helpful and customer-focused service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-space bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Our Value"
          title="Why Choose Us"
          description="Everything you need from a convenient and trusted local shop."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-50 transition duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-lg font-black text-slate-950">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}