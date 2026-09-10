import {
  ArrowRight,
  BookOpen,
  Coffee,
  Monitor,
  ShoppingBasket,
  Smartphone,
  Wifi,
} from "lucide-react";
import { categories } from "../data/categories";

const icons = {
  Grocery: ShoppingBasket,
  Drinks: Coffee,
  Mobile: Smartphone,
  "Books & Stationery": BookOpen,
  "Recharge & SIM": Wifi,
  "Online Services": Monitor,
};

export default function Categories() {
  const handleCategory = (name) => {
    window.dispatchEvent(
      new CustomEvent("select-product-category", {
        detail: name,
      })
    );

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="categories"
      className="section-space bg-slate-50"
    >
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-green-600">
            Explore
          </p>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Shop Categories
          </h2>

          <p className="mt-3 text-slate-600">
            Explore products and services available at Barua Shop House.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ id, name, description }) => {
            const Icon = icons[name] || ShoppingBasket;

            return (
              <button
                key={id}
                onClick={() => handleCategory(name)}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-50 transition duration-300 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-green-600"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-slate-950">
                    {name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>

                  <div className="mt-5 text-sm font-bold text-green-600">
                    Explore Category →
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}