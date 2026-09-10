
import { useState } from "react";
import {
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import { shop } from "../data/shop";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [error, setError] = useState("");

  const email = "girrajbarua.tech@gmail.com";

  const whatsapp = shop.whatsapp
    ? `https://wa.me/${shop.whatsapp}`
    : "#contact";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const submit = (e) => {
    e.preventDefault();

    if (!shop.whatsapp) {
      setError("WhatsApp number is not configured yet.");
      return;
    }

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!form.reason) {
      setError("Please select a reason or service.");
      return;
    }

    if (!form.message.trim()) {
      setError("Please enter your message.");
      return;
    }

    setError("");

    const text = `Hello ${shop.name},

I would like to make an enquiry.

Name: ${form.name.trim()}
Phone: ${form.phone.trim()}
Reason / Service: ${form.reason}

Message:
${form.message.trim()}`;

    const url = `${whatsapp}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="section-space relative overflow-hidden bg-white"
    >
      <div className="container-page">
        {/* =========================
            Section Header
        ========================== */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-green-600">
            Get In Touch
          </p>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Contact {shop.name}
          </h2>

          <p className="mt-4 text-slate-600">
            Have a question or need a service? Send us your enquiry
            through WhatsApp or email.
          </p>
        </div>

        {/* =========================
            Main Content
        ========================== */}
        <div className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
          {/* =========================
              Contact Form
          ========================== */}
          <form
            onSubmit={submit}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
          >
            {/* Notice */}
            <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-600 shadow-sm">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-sm font-black text-green-800">
                    Need help or have an enquiry?
                  </p>

                  <p className="mt-1 text-sm leading-6 text-green-700">
                    Contact us through WhatsApp or email at{" "}
                    <a
                      href={`mailto:${email}`}
                      className="font-black underline underline-offset-2 transition hover:text-green-900"
                    >
                      {email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Name + Phone */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  Name
                </span>

                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </label>

              {/* Phone */}
              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  Phone
                </span>

                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="Your phone number"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </label>
            </div>

            {/* Reason / Service */}
            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700">
                Reason / Service{" "}
                <span className="text-green-600">*</span>
              </span>

              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
              >
                <option value="" disabled>
                  Select a reason or service
                </option>

                <option value="Product Enquiry">
                  Product Enquiry
                </option>

                <option value="Stationery / School Supplies">
                  Stationery / School Supplies
                </option>

                <option value="Mobile Recharge">
                  Mobile Recharge
                </option>

                <option value="Bill Payment">
                  Bill Payment
                </option>

                <option value="Cold Drinks / Snacks">
                  Cold Drinks / Snacks
                </option>

                <option value="Shop / Service Enquiry">
                  Shop / Service Enquiry
                </option>

                <option value="General Enquiry">
                  General Enquiry
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </label>

            {/* Message */}
            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700">
                Message{" "}
                <span className="text-green-600">*</span>
              </span>

              <textarea
                name="message"
                required
                rows={6}
                maxLength={500}
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to ask?"
                className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />

              <span className="mt-2 block text-xs text-slate-400">
                Maximum 500 characters.
              </span>
            </label>

            {/* Error */}
            {error && (
              <p
                className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-600"
                role="alert"
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-700 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
            >
              <Send size={18} />
              Send on WhatsApp
            </button>

            <p className="mt-3 text-xs text-slate-400">
              Your enquiry will open in WhatsApp before sending.
            </p>
          </form>

          {/* =========================
              Contact Information
          ========================== */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {/* Phone */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <Phone size={21} />
              </div>

              <h3 className="mt-5 font-black text-slate-950">
                Call
              </h3>

              <a
                href={`tel:${shop.phone}`}
                className="mt-2 block font-bold text-slate-600 transition hover:text-green-600"
              >
                {shop.phone}
              </a>
            </div>

            {/* Opening Hours */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <Clock3 size={21} />
              </div>

              <h3 className="mt-5 font-black text-slate-950">
                Opening Hours
              </h3>

              <p className="mt-2 text-slate-600">
                {shop.openingTime} – {shop.closingTime}
              </p>
            </div>

            {/* Address */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <MapPin size={21} />
              </div>

              <h3 className="mt-5 font-black text-slate-950">
                Visit Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {shop.address}
              </p>

              {shop.mapUrl && (
                <a
                  href={shop.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-bold text-green-600 transition hover:text-green-700"
                >
                  <Navigation size={17} />
                  Get Directions
                </a>
              )}
            </div>

            {/* Email */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <Mail size={21} />
              </div>

              <h3 className="mt-5 font-black text-slate-950">
                Email
              </h3>

              <a
                href={`mailto:${email}`}
                className="mt-2 block break-all text-sm font-bold text-slate-600 transition hover:text-green-600"
              >
                {email}
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
              {/* Instagram */}
              {shop.social?.instagram ? (
                <a
                  href={shop.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-green-200 hover:text-green-600"
                >
                  <Instagram size={20} />
                </a>
              ) : (
                <span
                  title="Add Instagram URL in src/data/shop.js"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-300"
                >
                  <Instagram size={20} />
                </span>
              )}

              {/* Facebook */}
              {shop.social?.facebook ? (
                <a
                  href={shop.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-green-200 hover:text-green-600"
                >
                  <Facebook size={20} />
                </a>
              ) : (
                <span
                  title="Add Facebook URL in src/data/shop.js"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-300"
                >
                  <Facebook size={20} />
                </span>
              )}

              {/* WhatsApp */}
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
