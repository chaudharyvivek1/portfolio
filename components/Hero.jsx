import { profile } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/[0.06] dark:border-white/[0.08]">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 glow" aria-hidden="true" />

      <div className="container-page relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="rise inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-3 py-1.5 text-[12px] font-medium text-neutral-700 backdrop-blur dark:border-white/[0.1] dark:bg-white/[0.04] dark:text-neutral-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {profile.status}
          </div>

          <h1 className="rise d1 mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Building fast, considered interfaces for{' '}
            <span className="text-accent dark:text-[#6b9bff]">real business software.</span>
          </h1>

          <p className="rise d1 mt-4 text-[13px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">
            {profile.role} &middot; {profile.location}
          </p>

          <p className="rise d2 mt-6 max-w-xl text-[16px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            {profile.summary}
          </p>

          <div className="rise d3 mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              See my work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost !px-3.5"
              aria-label="GitHub profile"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12A11.5 11.5 0 0 0 12 .5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="rise d2">
          <div className="card p-6 shadow-[0_30px_70px_-45px_rgba(13,16,23,0.55)]">
            <p className="eyebrow">Currently</p>
            <p className="mt-3 text-lg font-semibold tracking-tight">
              {profile.current.role} at {profile.current.company}
            </p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Since {profile.current.since} &middot; {profile.location}
            </p>

            <div className="my-5 h-px bg-black/[0.07] dark:bg-white/[0.09]" />

            <p className="eyebrow">Focus</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.current.focus.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>

            <div className="my-5 h-px bg-black/[0.07] dark:bg-white/[0.09]" />

            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500">Live projects</dt>
                <dd className="mt-1 text-lg font-semibold tracking-tight">2 shipped</dd>
              </div>
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500">Education</dt>
                <dd className="mt-1 text-lg font-semibold tracking-tight">B.E. CE, 2026</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
