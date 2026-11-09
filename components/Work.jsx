import SectionHeading from './SectionHeading';
import { projects } from '@/data/content';

export default function Work() {
  return (
    <section id="work" className="border-b border-black/[0.06] py-20 dark:border-white/[0.08]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I have shipped."
          description="An open-source component library, a freelance landing site, a full-stack CRUD app and an internship portal."
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
                ) : project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline dark:text-[#6b9bff]"
                  >
                    View source on GitHub
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12A11.5 11.5 0 0 0 12 .5z" />
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
