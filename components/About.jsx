import SectionHeading from './SectionHeading';
import { about, profile, sections } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="border-b border-black/[0.06] py-20 dark:border-white/[0.08]">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow={sections.about.eyebrow} title={sections.about.title} />

        <div>
          <div className="space-y-4 text-[15.5px] leading-relaxed text-neutral-700 dark:text-neutral-300">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-black/[0.07] bg-black/[0.07] sm:grid-cols-2 dark:border-white/[0.09] dark:bg-white/[0.09]">
            {about.facts.map((fact) => (
              <div key={fact.label} className="bg-paper p-5 dark:bg-[#0b0e13]">
                <dt className="text-[12px] font-medium uppercase tracking-wider text-neutral-500">{fact.label}</dt>
                <dd className="mt-1.5 text-[15px] font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500">
            Reach me at{' '}
            <a href={`mailto:${profile.email}`} className="link-underline text-neutral-700 dark:text-neutral-300">
              {profile.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
