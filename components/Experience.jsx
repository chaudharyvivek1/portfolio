import SectionHeading from './SectionHeading';
import { experience } from '@/data/content';

export default function Experience() {
  return (
    <section id="experience" className="border-b border-black/[0.06] py-20 dark:border-white/[0.08]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have worked."
          description="Production work on internal business tools, plus an internship building application features."
        />

        <ol className="mt-10 space-y-4">
          {experience.map((job) => (
            <li key={job.company} className="card p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-[17px] font-semibold tracking-tight">{job.role}</h3>
                  <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                    {job.company}
                    {job.location ? ` \u00b7 ${job.location}` : ''}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {job.current ? (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                      Current
                    </span>
                  ) : null}
                  <span className="rounded-full border border-black/[0.08] px-2.5 py-1 text-[12px] text-neutral-600 dark:border-white/[0.1] dark:text-neutral-400">
                    {job.period}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/70 dark:bg-[#6b9bff]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
