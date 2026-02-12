import type { FC } from 'hono/jsx';

import type { PortfolioExperienceItem } from '@/types/portfolio';

interface HomeExperienceProps {
  items: Array<PortfolioExperienceItem>;
}

const HomeExperience: FC<HomeExperienceProps> = ({ items }) => {
  return (
    <section class='scroll-mt-24' id='experience'>
      <h2 class='portfolio-section-header'>Professional Experience</h2>
      <div class='space-y-11'>
        {items.map((item) => {
          return (
            <article class='portfolio-timeline-item' key={`${item.role}-${item.period}`}>
              <div class={`portfolio-timeline-dot ${item.isCurrent ? 'is-current' : ''}`} />
              <div class='mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-center'>
                <h3 class='text-3xl font-black uppercase tracking-tight text-[var(--brand-text-main)] sm:text-[1.75rem]'>
                  {item.role}
                </h3>
                <span class={`portfolio-date-chip ${item.isCurrent ? 'is-current' : ''}`}>{item.period}</span>
              </div>
              <p class='mb-4 text-lg font-semibold text-[var(--brand-primary)]'>{item.company}</p>
              <ul class='space-y-3'>
                {item.highlights.map((highlight) => {
                  return (
                    <li class='flex gap-3 text-lg leading-relaxed text-[var(--brand-text-muted)]' key={highlight}>
                      <span class='mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]' />
                      <span>{highlight}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HomeExperience;
