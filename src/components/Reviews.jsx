
import { useState } from "react";
import {
  ExternalLink,
  MessageCircle,
  Send,
  Star,
} from "lucide-react";
import { reviews } from "../data/reviews";
import { shop } from "../data/shop";

export default function Reviews() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const whatsapp = shop.whatsapp
    ? `https://wa.me/${shop.whatsapp}`
    : "#contact";

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter(
      (review) => Number(review.rating) === rating
    ).length,
  }));

  const totalReviews = reviews.length;

  const averageRating =
    totalReviews > 0
      ? (
          reviews.reduce(
            (total, review) => total + Number(review.rating),
            0
          ) / totalReviews
        ).toFixed(1)
      : "0.0";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!shop.whatsapp) {
      alert("WhatsApp number is not configured.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!selectedRating) {
      alert("Please select a rating.");
      return;
    }

    if (!message) {
      alert("Please write your feedback.");
      return;
    }

    const feedbackText = `Hello ${shop.name},

I would like to share my feedback.

Name: ${name}
Rating: ${selectedRating}/5

Feedback:
${message}`;

    const url = `${whatsapp}?text=${encodeURIComponent(
      feedbackText
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");

    form.reset();
    setSelectedRating(0);
    setHoverRating(0);
  };

  return (
    <section
      id="reviews"
      className="section-space bg-slate-50"
    >
      <div className="container-page">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-green-600">
            Customer Feedback
          </p>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            What Customers Say
          </h2>

          <p className="mt-3 text-slate-600">
            See what our customers think and share your own
            experience.
          </p>
        </div>

        {/* Rating Overview */}
        <div className="mb-10 grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[180px_1fr] md:p-8">
          {/* Average Rating */}
          <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-6 text-center md:border-b-0 md:border-r md:pb-0 md:pr-8">
            <span className="text-5xl font-black text-slate-950">
              {averageRating}
            </span>

            <div className="mt-2 flex gap-1 text-amber-500">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill={
                    index < Math.round(Number(averageRating))
                      ? "currentColor"
                      : "none"
                  }
                />
              ))}
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Based on {totalReviews}{" "}
              {totalReviews === 1 ? "review" : "reviews"}
            </p>
          </div>

          {/* Rating Progress */}
          <div className="space-y-3">
            {ratingCounts.map(({ rating, count }) => {
              const percentage =
                totalReviews > 0
                  ? Math.round((count / totalReviews) * 100)
                  : 0;

              return (
                <div
                  key={rating}
                  className="grid grid-cols-[35px_1fr_45px] items-center gap-3"
                >
                  <span className="text-sm font-bold text-slate-700">
                    {rating}★
                  </span>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-amber-400 transition-all duration-700"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  <span className="text-right text-xs font-bold text-slate-500">
                    {percentage}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reviews */}
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill={
                      index < Number(review.rating)
                        ? "currentColor"
                        : "none"
                    }
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-7 text-slate-600">
                “{review.text}”
              </p>

              {/* Name */}
              <p className="mt-5 font-black text-slate-950">
                {review.name}
              </p>
            </article>
          ))}
        </div>

        {/* Review Form */}
        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Form Header */}
          <div className="border-b border-slate-100 bg-slate-50 px-6 py-6 sm:px-8">
            <h3 className="text-2xl font-black text-slate-950">
              Share Your Feedback
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              We value your feedback. Tell us about your
              experience with our shop.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 sm:p-8"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="review-name"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                Your Name
              </label>

              <input
                id="review-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-50"
              />
            </div>

            {/* Star Rating */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Your Rating
              </label>

              <div
                className="flex items-center gap-1"
                onMouseLeave={() => setHoverRating(0)}
              >
                {Array.from({ length: 5 }, (_, index) => {
                  const rating = index + 1;
                  const activeRating =
                    hoverRating || selectedRating;

                  return (
                    <button
                      key={rating}
                      type="button"
                      onClick={() =>
                        setSelectedRating(rating)
                      }
                      onMouseEnter={() =>
                        setHoverRating(rating)
                      }
                      aria-label={`Give ${rating} star${
                        rating > 1 ? "s" : ""
                      }`}
                      className="rounded-lg p-1 text-amber-400 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    >
                      <Star
                        size={30}
                        fill={
                          rating <= activeRating
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  );
                })}

                <span className="ml-3 text-sm font-semibold text-slate-500">
                  {selectedRating
                    ? `${selectedRating}/5`
                    : "Select rating"}
                </span>
              </div>
            </div>

            {/* Feedback */}
            <div>
              <label
                htmlFor="review-message"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                Your Feedback
              </label>

              <textarea
                id="review-message"
                name="message"
                required
                rows={5}
                maxLength={500}
                placeholder="Write your feedback here..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-50"
              />

              <p className="mt-2 text-xs text-slate-400">
                Please keep your feedback respectful and
                helpful.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-bold text-white shadow-sm transition hover:bg-green-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <Send size={18} />
              Send Feedback on WhatsApp
            </button>

            <p className="text-center text-xs text-slate-400">
              Your feedback will open in WhatsApp before
              sending.
            </p>
          </form>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:flex-row">
          <div>
            <p className="font-black text-slate-950">
              Have feedback?
            </p>

            <p className="text-sm text-slate-500">
              Send us a message or leave a Google review.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* WhatsApp */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>

            {/* Google */}
            {shop.social?.google && (
              <a
                href={shop.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <ExternalLink size={17} />
                Google Reviews
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}