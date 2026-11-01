import { profile, navLinks } from '@/data/content';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-paper/80 backdrop-blur-md dark:border-white/[0.08] dark:bg-[#080a0e]/80">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-[12px] font-bold text-white dark:bg-white dark:text-ink">
            VC
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-neutral-600 md:flex dark:text-neutral-400">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink dark:hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={`mailto:${profile.email}`} className="btn btn-primary !px-4 !py-2 !text-[13px]">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
