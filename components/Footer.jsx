import { profile } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-8 dark:border-white/[0.08]">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-sm text-neutral-500 sm:flex-row dark:text-neutral-500">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink dark:hover:text-white">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink dark:hover:text-white">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink dark:hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
