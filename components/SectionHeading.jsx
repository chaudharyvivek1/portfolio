export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-[2rem]">{title}</h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
      ) : null}
    </div>
  );
}
