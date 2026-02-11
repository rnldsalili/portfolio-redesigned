import type { Child, FC } from 'hono/jsx';

interface IconBaseProps {
  children: Child;
  className?: string;
}

interface IconProps {
  className?: string;
}

const IconBase: FC<IconBaseProps> = ({ children, className }) => {
  return (
    <svg
      aria-hidden='true'
      class={className}
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='1.8'
      viewBox='0 0 24 24'
    >
      {children}
    </svg>
  );
};

export const SunIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <circle cx='12' cy='12' r='4' />
      <path d='M12 2v2.5' />
      <path d='M12 19.5V22' />
      <path d='M4.93 4.93l1.77 1.77' />
      <path d='M17.3 17.3l1.77 1.77' />
      <path d='M2 12h2.5' />
      <path d='M19.5 12H22' />
      <path d='M4.93 19.07l1.77-1.77' />
      <path d='M17.3 6.7l1.77-1.77' />
    </IconBase>
  );
};

export const MoonIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <path d='M20.16 14.37A8.4 8.4 0 1 1 9.63 3.84 6.7 6.7 0 0 0 20.16 14.37Z' />
    </IconBase>
  );
};

export const MenuIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <path d='M4 7h16' />
      <path d='M4 12h16' />
      <path d='M4 17h16' />
    </IconBase>
  );
};

export const CloseIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <path d='m6 6 12 12' />
      <path d='m18 6-12 12' />
    </IconBase>
  );
};

export const MailIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <path d='M3.5 7.5A2.5 2.5 0 0 1 6 5h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5Z' />
      <path d='m4.5 8.5 7.5 5 7.5-5' />
    </IconBase>
  );
};

export const ShareIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <circle cx='18' cy='5' r='2.5' />
      <circle cx='6' cy='12' r='2.5' />
      <circle cx='18' cy='19' r='2.5' />
      <path d='m8.3 11.1 7.4-4.2' />
      <path d='m8.3 12.9 7.4 4.2' />
    </IconBase>
  );
};

export const LayersIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <path d='m12 3 8 5-8 5-8-5Z' />
      <path d='m4 12 8 5 8-5' />
    </IconBase>
  );
};

export const DatabaseIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <ellipse cx='12' cy='5' rx='7.5' ry='3' />
      <path d='M4.5 5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V5' />
      <path d='M4.5 11v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6' />
    </IconBase>
  );
};

export const GroupsIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <circle cx='9' cy='9' r='2.5' />
      <circle cx='16.5' cy='8' r='2' />
      <path d='M4.8 18a4.2 4.2 0 0 1 8.4 0' />
      <path d='M14.5 17.6a3.5 3.5 0 0 1 5 0' />
    </IconBase>
  );
};

export const VerifiedIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <path d='m12 3 3.2 1.8 3.7.4 1.1 3.5 2.4 2.8-2.4 2.8-1.1 3.5-3.7.4L12 21l-3.2-1.8-3.7-.4-1.1-3.5L1.6 12l2.4-2.8 1.1-3.5 3.7-.4Z' />
      <path d='m8.3 12.1 2.3 2.2 5.1-5.2' />
    </IconBase>
  );
};

export const LocationIcon: FC<IconProps> = ({ className }) => {
  return (
    <IconBase className={className}>
      <path d='M12 21s6.5-5.6 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 15.4 12 21 12 21Z' />
      <circle cx='12' cy='10.5' r='2.2' />
    </IconBase>
  );
};
