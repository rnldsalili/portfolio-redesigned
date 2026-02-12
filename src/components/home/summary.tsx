import type { FC } from 'hono/jsx';

import type { PortfolioSummary as PortfolioSummaryData } from '@/types/portfolio';

interface HomeSummaryProps {
  summary: PortfolioSummaryData;
}

const HomeSummary: FC<HomeSummaryProps> = ({ summary }) => {
  return (
    <section class='scroll-mt-24' id='summary'>
      <div class='mb-8 space-y-2'>
        <h1 class='text-4xl font-extrabold tracking-tight text-[var(--brand-text-main)] sm:text-5xl'>
          {summary.heading}
        </h1>
        <p class='text-xl text-[var(--brand-text-muted)]'>{summary.subheading}</p>
      </div>
      <div class='portfolio-card portfolio-card--summary p-7 sm:p-8'>
        <p class='text-lg leading-relaxed text-[var(--brand-text-main)] opacity-90'>{summary.body}</p>
      </div>
    </section>
  );
};

export default HomeSummary;
