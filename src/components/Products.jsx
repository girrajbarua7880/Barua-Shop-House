import { Search, X, PackageSearch } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";
import { products } from "../data/products";
import { categories } from "../data/categories";

export default function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleCategory = (event) => {
      setCategory(event.detail);
      setShowAll(false);
    };

    window.addEventListener("select-product-category", handleCategory);

    return () => {
      window.removeEventListener(
        "select-product-category",
        handleCategory
      );
    };
  }, []);

  const filtered = useMemo(() => {
    const search = query.toLowerCase().trim();

    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = `${product.name} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  const visible = showAll ? filtered : filtered.slice(0, 6);

  const clearSearch = () => {
    setQuery("");
    setShowAll(false);
  };

  return (
    <section id="products" className="section-space bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Information Only"
          title="Available Products"
          description="Explore the types of products available at Barua Shop House. This website is for information only."
        />

        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-green-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-50">
            <Search size={19} className="shrink-0 text-slate-400" />

            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowAll(false);
              }}
              placeholder="Search products..."
              className="w-full bg-transparent py-3.5 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
            />

            {query && (
              <button
                onClick={clearSearch}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-green-50 hover:text-green-600"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setShowAll(false);
            }}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-bold text-slate-700 outline-none transition focus:border-green-300 focus:ring-4 focus:ring-green-50"
          >
            <option value="All">All Categories</option>

            {categories.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {category !== "All" && (
          <div className="mb-6 flex items-center justify-between rounded-2xl border border-green-100 bg-green-50 px-4 py-3">
            <p className="text-sm font-bold text-green-700">
              Showing: {category}
            </p>

            <button
              onClick={() => {
                setCategory("All");
                setShowAll(false);
              }}
              className="text-sm font-bold text-green-600 hover:text-green-800"
            >
              Clear Filter
            </button>
          </div>
        )}

        {visible.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center overflow-hidden bg-slate-50 p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="inline-flex rounded-full bg-green-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-green-700">
                    {product.category}
                  </div>

                  <h3 className="mt-4 text-lg font-black text-slate-950">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <PackageSearch size={27} />
            </div>

            <h3 className="mt-5 text-lg font-black text-slate-900">
              No products found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another product name or category.
            </p>

            {(query || category !== "All") && (
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                  setShowAll(false);
                }}
                className="mt-5 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-700"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {filtered.length > 6 && (
          <div className="mt-9 text-center">
            <button
              onClick={() => setShowAll((value) => !value)}
              className="rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md"
            >
              {showAll
                ? "Show Less"
                : `View More (${filtered.length - 6} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}