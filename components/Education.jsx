import SectionHeading from './SectionHeading';
import { education, certification } from '@/data/content';

export default function Education() {
  return (
    <section id="education" className="border-b border-black/[0.06] py-20 dark:border-white/[0.08]">
      <div className="container-page">
        <SectionHeading eyebrow="Education" title="Study and certification." />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="card p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-[17px] font-semibold tracking-tight">{education.degree}</h3>
              <span className="rounded-full border border-black/[0.08] px-2.5 py-1 text-[12px] text-neutral-600 dark:border-white/[0.1] dark:text-neutral-400">
                {education.period}
              </span>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{education.school}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{education.university}</p>
            <p className="mt-4 inline-flex rounded-lg bg-black/[0.04] px-3 py-1.5 text-[13px] font-medium dark:bg-white/[0.06]">
              {education.score}
            </p>
          </div>

          <div className="card p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-[17px] font-semibold tracking-tight">{certification.name}</h3>
              <span className="rounded-full border border-black/[0.08] px-2.5 py-1 text-[12px] text-neutral-600 dark:border-white/[0.1] dark:text-neutral-400">
                {certification.date}
              </span>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {certification.org} &middot; {certification.hours} &middot; ID {certification.id}
            </p>
            <ul className="mt-4 space-y-2.5">
              {certification.points.map((point) => (
                <li key={point} className="flex gap-3 text-[14.5px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                  <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent/70 dark:bg-[#6b9bff]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
