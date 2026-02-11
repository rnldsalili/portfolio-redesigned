import {
  DatabaseIcon,
  GroupsIcon,
  LayersIcon,
  LocationIcon,
  MailIcon,
  ShareIcon,
  VerifiedIcon,
} from './icons';
import type { FC } from 'hono/jsx';

import type {
  PortfolioCompetency,
  PortfolioCredential,
  PortfolioEducationItem,
  PortfolioProfile,
  PortfolioQuickLink,
} from '@/types/portfolio';

interface HomeSidebarProps {
  competencies: Array<PortfolioCompetency>;
  credentials: Array<PortfolioCredential>;
  education: Array<PortfolioEducationItem>;
  profile: PortfolioProfile;
  quickLinks: Array<PortfolioQuickLink>;
}

const iconClassName = 'h-4 w-4 text-[var(--brand-primary)]';

const renderCompetencyIcon = (icon: PortfolioCompetency['icon']) => {
  if (icon === 'database') return <DatabaseIcon className={iconClassName} />;
  if (icon === 'groups') return <GroupsIcon className={iconClassName} />;

  return <LayersIcon className={iconClassName} />;
};

const renderQuickLinkIcon = (icon: PortfolioQuickLink['icon']) => {
  if (icon === 'share') return <ShareIcon className='h-4 w-4' />;

  return <MailIcon className='h-4 w-4' />;
};

const HomeSidebar: FC<HomeSidebarProps> = ({
  competencies,
  credentials,
  education,
  profile,
  quickLinks,
}) => {
  return (
    <>
      <section class='portfolio-card portfolio-status-card p-6' id='status'>
        <div class='mb-4 flex items-center gap-2'>
          <span class='relative inline-flex h-2.5 w-2.5'>
            <span class='absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-primary)] opacity-70' />
            <span class='relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-primary)]' />
          </span>
          <span class='text-xs font-semibold uppercase tracking-wide text-[var(--brand-primary)]'>
            Available for Enterprise Projects
          </span>
        </div>

        <div class='space-y-3'>
          {quickLinks.map((link) => {
            return (
              <a
                class='flex items-center gap-2 text-sm font-medium text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)]'
                href={link.href}
                key={link.label}
              >
                {renderQuickLinkIcon(link.icon)}
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </section>

      <section id='competencies'>
        <h2 class='portfolio-section-header'>Core Competencies</h2>
        <div class='space-y-4'>
          {competencies.map((item) => {
            return (
              <article class='portfolio-card p-5' key={item.title}>
                <div class='mb-2 flex items-center gap-3'>
                  {renderCompetencyIcon(item.icon)}
                  <h3 class='text-xl font-bold text-[var(--brand-text-main)]'>{item.title}</h3>
                </div>
                <p class='text-sm leading-relaxed text-[var(--brand-text-muted)]'>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id='education'>
        <h2 class='portfolio-section-header'>Education</h2>
        <div class='space-y-6'>
          {education.map((item) => {
            return (
              <article key={item.degree}>
                <h3 class='text-lg font-bold leading-snug text-[var(--brand-text-main)]'>{item.degree}</h3>
                <p class='text-sm font-semibold text-[var(--brand-primary)]'>{item.school}</p>
                <p class='mt-1 text-xs text-[var(--brand-text-muted)]'>{item.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id='certifications'>
        <h2 class='portfolio-section-header'>Professional Credentials</h2>
        <div class='space-y-3'>
          {credentials.map((credential) => {
            return (
              <article class='portfolio-card flex items-center gap-3 p-3.5' key={credential.title}>
                <VerifiedIcon className='h-[18px] w-[18px] text-[var(--brand-primary)]' />
                <div>
                  <p class='text-sm font-bold text-[var(--brand-text-main)]'>{credential.title}</p>
                  <p class='text-[10px] font-medium uppercase tracking-wide text-[var(--brand-text-muted)]'>
                    {credential.issuer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div class='border-t border-[var(--brand-border)] pt-8'>
        <div class='flex items-center gap-3 text-[var(--brand-text-muted)]'>
          <LocationIcon className='h-[18px] w-[18px]' />
          <span class='text-sm font-medium'>{profile.location}</span>
        </div>
      </div>
    </>
  );
};

export default HomeSidebar;
