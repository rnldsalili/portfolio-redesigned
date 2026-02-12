import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons';
import type { FC } from 'hono/jsx';

import type { PortfolioNavItem, PortfolioProfile } from '@/types/portfolio';

interface HomeHeaderProps {

  navItems: Array<PortfolioNavItem>;
  profile: PortfolioProfile;
}

const HomeHeader: FC<HomeHeaderProps> = ({ navItems, profile }) => {
  return (
    <>
      <header class='portfolio-header sticky top-0 z-40 border-b border-[var(--brand-border)]'>
        <div class='mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div class='flex items-center gap-3'>
            <div class='flex h-11 w-11 items-center justify-center rounded-md bg-[var(--brand-primary)] text-sm font-black text-[var(--brand-logo-foreground)] shadow-[0_0_20px_var(--brand-shadow)]'>
              <img src="/favicon.svg" alt={profile.name} class="h-9 w-9 rounded-sm" />
            </div>
            <div class='hidden md:block'>
              <p class='text-sm font-bold leading-none text-[var(--brand-text-main)]'>{profile.name}</p>
              <p class='mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-text-muted)]'>
                {profile.role}
              </p>
            </div>
          </div>

          <div class='flex items-center gap-6'>
            <nav aria-label='Primary navigation' class='hidden items-center gap-1 lg:flex'>
              {navItems.map((item) => {
                const linkClass = item.isActive ? 'portfolio-nav-link is-active' : 'portfolio-nav-link';

                return (
                  <a class={linkClass} href={item.href} key={item.href}>
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div class='flex items-center gap-2 sm:gap-3'>
              <button
                aria-label='Switch theme'
                aria-pressed='false'
                class='portfolio-icon-button'
                data-theme-toggle
                type='button'
              >
                <SunIcon className='theme-icon theme-icon--sun h-5 w-5' />
                <MoonIcon className='theme-icon theme-icon--moon h-5 w-5' />
              </button>

              <button
                aria-controls='mobile-navigation'
                aria-expanded='false'
                aria-label='Open navigation menu'
                class='portfolio-icon-button lg:hidden'
                data-menu-trigger
                type='button'
              >
                <MenuIcon className='menu-icon menu-icon--open h-5 w-5' />
                <CloseIcon className='menu-icon menu-icon--close h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        aria-hidden='true'
        aria-labelledby='mobile-navigation-title'
        aria-modal='true'
        class='hidden fixed inset-0 z-50 bg-black/45 backdrop-blur-sm lg:hidden'
        data-mobile-menu
        id='mobile-navigation'
        role='dialog'
        tabindex={-1}
      >
        <div class='absolute right-0 top-0 h-full w-[min(84vw,360px)] border-l border-[var(--brand-border)] bg-[var(--brand-card-bg)] p-6 shadow-2xl'>
          <div class='mb-6 flex items-center justify-between border-b border-[var(--brand-border)] pb-4'>
            <p class='text-sm font-bold uppercase tracking-wider text-[var(--brand-text-main)]' id='mobile-navigation-title'>
              Navigation
            </p>
            <button aria-label='Close navigation menu' class='portfolio-icon-button' data-menu-close type='button'>
              <CloseIcon className='h-5 w-5' />
            </button>
          </div>

          <nav aria-label='Mobile navigation' class='space-y-2'>
            {navItems.map((item) => {
              const linkClass = item.isActive ? 'portfolio-nav-link is-active w-full' : 'portfolio-nav-link w-full';

              return (
                <a class={linkClass} data-mobile-link href={item.href} key={`mobile-${item.href}`}>
                  {item.label}
                </a>
              );
            })}
          </nav>


        </div>
      </div>
    </>
  );
};

export default HomeHeader;
