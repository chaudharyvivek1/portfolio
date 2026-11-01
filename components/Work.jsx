import SectionHeading from './SectionHeading';
import { projects } from '@/data/content';

export default function Work() {
  return (
    <section id="work" className="border-b border-black/[0.06] py-20 dark:border-white/[0.08]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I have shipped."
          description="A freelance landing site, a full-stack CRUD app and an internship portal."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`card flex flex-col p-6 sm:p-7${index === 2 ? ' md:col-span-2' : ''}`}
            >
              <p className="eyebrow">{project.kind}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.name}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{project.tagline}</p>

              <ul className="mt-4 space-y-2.5">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[14.5px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent/70 dark:bg-[#6b9bff]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>

              <div className="mt-6 pt-1">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline dark:text-[#6b9bff]"
                  >
                    Visit live site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">Internal project - not publicly hosted</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
