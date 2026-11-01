import SectionHeading from './SectionHeading';
import { skills } from '@/data/content';

export default function Skills() {
  return (
    <section id="skills" className="border-b border-black/[0.06] py-20 dark:border-white/[0.08]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit I build with."
          description="Frontend is home, with enough backend to take a feature end to end."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group} className="card p-5">
              <p className="eyebrow">{group.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
