import HomeExperience from './experience';
import HomeFooter from './footer';
import HomeHeader from './header';
import HomeSidebar from './sidebar';
import HomeSummary from './summary';
import HomeTechnical from './technical';
import type { PortfolioContent } from '@/types/portfolio';
import type { FC } from 'hono/jsx';
import { portfolioContent } from '@/constants/portfolio';

interface HomePageProps {
  content?: PortfolioContent;
}

const HomePage: FC<HomePageProps> = ({ content = portfolioContent }) => {
  return (
    <div class='min-h-screen bg-[var(--brand-bg)] text-[var(--brand-text-main)] transition-colors duration-300'>
      <a
        class='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--brand-primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[var(--brand-logo-foreground)]'
        href='#main-content'
      >
        Skip to main content
      </a>
      <HomeHeader navItems={content.navItems} profile={content.profile} />

      <div class='mx-auto w-full max-w-[1280px] px-4 pb-12 pt-10 sm:px-6 lg:px-8'>
        <main class='grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12' id='main-content' tabindex={-1}>
          <div class='space-y-14 lg:col-span-8'>
            <HomeSummary summary={content.summary} />
            <HomeExperience items={content.experiences} />
            <HomeTechnical
              metrics={content.infrastructure.metrics}
              stack={content.infrastructure.stack}
              tabs={content.infrastructure.tabs}
            />
          </div>

          <aside aria-label='Profile and supporting details' class='space-y-12 lg:col-span-4'>
            <HomeSidebar
              competencies={content.competencies}
              credentials={content.credentials}
              education={content.education}
              profile={content.profile}
              quickLinks={content.links.quickLinks}
            />
          </aside>
        </main>

        <HomeFooter note={content.footerNote} />
      </div>
    </div>
  );
};

export default HomePage;
