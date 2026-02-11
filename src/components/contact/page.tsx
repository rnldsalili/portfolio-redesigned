import type { FC } from 'hono/jsx';

import type { PortfolioContent, PortfolioNavItem, PortfolioQuickLink } from '@/types/portfolio';
import HomeFooter from '@/components/home/footer';
import HomeHeader from '@/components/home/header';
import { LocationIcon, MailIcon, ShareIcon } from '@/components/home/icons';
import { portfolioContent } from '@/constants/portfolio';

interface ContactPageProps {
  content?: PortfolioContent;
}

interface ContactChannel {
  href: string;
  label: string;
  description: string;
  icon: 'mail' | 'share';
}

const buildContactNavItems = (navItems: Array<PortfolioNavItem>) => {
  const mappedItems = navItems.map((item) => {
    const href = item.href.startsWith('#') ? `/${item.href}` : item.href;

    return {
      ...item,
      href,
      isActive: href === '/contact',
    };
  });

  if (mappedItems.some((item) => item.href === '/contact')) {
    return mappedItems;
  }

  return [
    ...mappedItems,
    { href: '/contact', isActive: true, label: 'Contact' },
  ];
};

const mapQuickLinkToChannel = (link: PortfolioQuickLink): ContactChannel => {
  return {
    description:
      link.icon === 'mail'
        ? 'Direct message channel for project inquiries.'
        : 'Public profile with background and technical work.',
    href: link.href,
    icon: link.icon,
    label: link.label,
  };
};

const buildContactChannels = (content: PortfolioContent) => {
  return [
    ...content.links.quickLinks.map(mapQuickLinkToChannel),
    {
      description: 'Detailed resume and enterprise project history.',
      href: content.links.cv,
      icon: 'share' as const,
      label: 'Download CV',
    },
  ];
};

const renderContactIcon = (icon: ContactChannel['icon']) => {
  if (icon === 'mail') {
    return <MailIcon className='h-4 w-4 text-[var(--brand-primary)]' />;
  }

  return <ShareIcon className='h-4 w-4 text-[var(--brand-primary)]' />;
};

const ContactPage: FC<ContactPageProps> = ({ content = portfolioContent }) => {
  const navItems = buildContactNavItems(content.navItems);
  const channels = buildContactChannels(content);

  return (
    <div class='min-h-screen bg-[var(--brand-bg)] text-[var(--brand-text-main)] transition-colors duration-300'>
      <a
        class='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--brand-primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[var(--brand-logo-foreground)]'
        href='#main-content'
      >
        Skip to main content
      </a>

      <HomeHeader cvHref={content.links.cv} navItems={navItems} profile={content.profile} />

      <div class='mx-auto w-full max-w-[1280px] px-4 pb-12 pt-10 sm:px-6 lg:px-8'>
        <main class='grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12' id='main-content' tabindex={-1}>
          <div class='space-y-14 lg:col-span-8'>
            <section id='contact-summary'>
              <div class='mb-8 space-y-2'>
                <h1 class='text-4xl font-extrabold tracking-tight text-[var(--brand-text-main)] sm:text-5xl'>
                  Contact
                </h1>
                <p class='text-xl text-[var(--brand-text-muted)]'>
                  Start a conversation about enterprise delivery, architecture, or leadership support.
                </p>
              </div>

              <div class='portfolio-card portfolio-card--summary p-7 sm:p-8'>
                <p class='text-lg leading-relaxed text-[var(--brand-text-main)] opacity-90'>
                  Share a short overview of your initiative, timeline, and team context. I focus on high-reliability
                  systems, full-stack delivery, and long-term maintainability across product lifecycles.
                </p>
              </div>
            </section>

            <section id='project-brief'>
              <h2 class='portfolio-section-header'>Project Brief Checklist</h2>

              <article class='portfolio-card p-5 sm:p-6'>
                <ul class='space-y-3'>
                  <li class='flex gap-3 text-lg leading-relaxed text-[var(--brand-text-muted)]'>
                    <span class='mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]' />
                    <span>Business objective and expected outcome.</span>
                  </li>
                  <li class='flex gap-3 text-lg leading-relaxed text-[var(--brand-text-muted)]'>
                    <span class='mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]' />
                    <span>Current stack, constraints, and integration requirements.</span>
                  </li>
                  <li class='flex gap-3 text-lg leading-relaxed text-[var(--brand-text-muted)]'>
                    <span class='mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]' />
                    <span>Delivery timeline and key milestones.</span>
                  </li>
                  <li class='flex gap-3 text-lg leading-relaxed text-[var(--brand-text-muted)]'>
                    <span class='mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]' />
                    <span>Team setup and preferred collaboration model.</span>
                  </li>
                </ul>
              </article>
            </section>
          </div>

          <aside aria-label='Contact channels and availability' class='space-y-12 lg:col-span-4'>
            <section class='portfolio-card portfolio-status-card p-6' id='availability'>
              <div class='mb-4 flex items-center gap-2'>
                <span class='relative inline-flex h-2.5 w-2.5'>
                  <span class='absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-primary)] opacity-70' />
                  <span class='relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-primary)]' />
                </span>
                <span class='text-xs font-semibold uppercase tracking-wide text-[var(--brand-primary)]'>
                  Accepting New Engagements
                </span>
              </div>
              <p class='text-sm leading-relaxed text-[var(--brand-text-muted)]'>
                Initial response window is typically within one business day for qualified enterprise opportunities.
              </p>
            </section>

            <section id='channels'>
              <h2 class='portfolio-section-header'>Preferred Channels</h2>
              <div class='space-y-3'>
                {channels.map((channel) => {
                  return (
                    <a class='portfolio-card flex items-center gap-3 p-3.5' href={channel.href} key={channel.label}>
                      {renderContactIcon(channel.icon)}
                      <div>
                        <p class='text-sm font-bold text-[var(--brand-text-main)]'>{channel.label}</p>
                        <p class='text-[10px] font-medium uppercase tracking-wide text-[var(--brand-text-muted)]'>
                          {channel.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>

            <section id='location'>
              <h2 class='portfolio-section-header'>Location</h2>
              <article class='portfolio-card p-5'>
                <div class='flex items-center gap-3 text-[var(--brand-text-muted)]'>
                  <LocationIcon className='h-[18px] w-[18px] text-[var(--brand-primary)]' />
                  <div>
                    <p class='text-sm font-bold text-[var(--brand-text-main)]'>{content.profile.location}</p>
                    <p class='text-xs font-medium uppercase tracking-wide text-[var(--brand-text-muted)]'>
                      Remote collaboration across time zones
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </aside>
        </main>

        <HomeFooter note={content.footerNote} />
      </div>
    </div>
  );
};

export default ContactPage;
