import {
  Clock3,
  Package,
  Settings,
  Star,
} from "lucide-react";
import { products } from "../data/products";
import { services } from "../data/services";
import { reviews } from "../data/reviews";
import { shop } from "../data/shop";

function isOpen() {
  const now = new Date();

  const toMinutes = (value) => {
    const [time, meridiem] = value.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (meridiem === "PM" && hours !== 12) hours += 12;
    if (meridiem === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
  };

  const current = now.getHours() * 60 + now.getMinutes();

  return (
    current >= toMinutes(shop.openingTime) &&
    current < toMinutes(shop.closingTime)
  );
}

export default function QuickInfo() {
  const average = reviews.length
    ? (
        reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length
      ).toFixed(1)
    : "0.0";

  const open = isOpen();

  const items = [
    {
      icon: Clock3,
      value: open ? "Open Now" : "Closed",
      label: `${shop.openingTime} – ${shop.closingTime}`,
      status: true,
    },
    {
      icon: Package,
      value: `${products.length}+`,
      label: "Products listed",
    },
    {
      icon: Settings,
      value: `${services.length}+`,
      label: "Services listed",
    },
    {
      icon: Star,
      value: average,
      label: "Customer rating",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-page grid grid-cols-2 sm:grid-cols-4">
        {items.map(
          ({ icon: Icon, value, label, status }, index) => (
            <div
              key={label}
              className={`group flex items-center gap-3 px-4 py-5 transition hover:bg-green-50 sm:justify-center sm:px-5 ${
                index < 2 ? "border-b sm:border-b-0" : ""
              } ${index % 2 === 0 ? "border-r sm:border-r" : ""} ${
                index === 1 ? "sm:border-r" : ""
              } border-slate-200`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                <Icon size={21} />
              </div>

              <div className="min-w-0">
                <div
                  className={`flex items-center gap-2 text-sm font-black ${
                    status
                      ? open
                        ? "text-green-700"
                        : "text-red-600"
                      : "text-slate-950"
                  }`}
                >
                  {status && (
                    <span
                      className={`h-2 w-2 rounded-full ${
                        open ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                  )}
                  {value}
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  {label}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}