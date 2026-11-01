import { profile } from '@/data/content';

export default function Contact() {
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
    { label: 'GitHub', value: 'github.com/chaudharyvivek1', href: profile.github },
    { label: 'LinkedIn', value: 'linkedin.com/in/vivek-chaudhary123', href: profile.linkedin },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container-page">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 glow" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-[2.1rem]">
                Let us build something that holds up in production.
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                I am open to frontend and full-stack roles, and to freelance work on Next.js sites. The fastest
                way to reach me is email.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  Email me
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <ul className="space-y-px overflow-hidden rounded-xl border border-black/[0.07] bg-black/[0.07] dark:border-white/[0.09] dark:bg-white/[0.09]">
              {links.map((link) => (
                <li key={link.label} className="bg-white dark:bg-[#0b0e13]">
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.04]"
                  >
                    <span className="text-[13px] font-medium uppercase tracking-wider text-neutral-500">{link.label}</span>
                    <span className="text-right text-[14px] font-medium">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
