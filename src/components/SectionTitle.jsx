export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={`mb-10 max-w-2xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center rounded-full bg-green-50 px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-green-700">
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}