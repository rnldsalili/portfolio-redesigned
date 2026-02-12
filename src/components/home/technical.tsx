import type { FC } from 'hono/jsx';

import type { PortfolioMetric, PortfolioTechnicalStackItem } from '@/types/portfolio';

interface HomeTechnicalProps {
  metrics: Array<PortfolioMetric>;
  stack: Array<PortfolioTechnicalStackItem>;
  tabs: Array<string>;
}

const HomeTechnical: FC<HomeTechnicalProps> = ({ metrics, stack, tabs }) => {
  const [inactiveTab, activeTab] = tabs;

  return (
    <section id='technical'>
      <h2 class='portfolio-section-header'>Technical Infrastructure</h2>
      <div class='portfolio-card portfolio-tech-shell p-5 sm:p-6'>
        <div class='portfolio-tech-tabs'>
          <span class='portfolio-tech-tab'>{inactiveTab}</span>
          <span class='portfolio-tech-tab is-active'>{activeTab}</span>
        </div>

        <div class='portfolio-tech-stack'>
          {stack.map((entry) => {
            return (
              <div class='portfolio-tech-row' key={entry.category}>
                <span class='portfolio-tech-label'>{entry.category}:</span>
                <span class='portfolio-tech-value'>{entry.value}</span>
              </div>
            );
          })}
        </div>

        {metrics.length > 0 && (
          <div class='mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2'>
            {metrics.map((metric) => (
              <div class='portfolio-metric-card' key={metric.label}>
                <p class='portfolio-metric-label'>{metric.label}</p>
                <p class={metric.isAccent ? 'portfolio-metric-value is-accent' : 'portfolio-metric-value'}>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeTechnical;
